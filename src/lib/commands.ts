import { user, messages, userMessageCount } from '$lib/stores/localStorage';

interface CommandInfo {
  execute: (arg0: string) => any;
  description: string;
}

export type HTMLResponse = {
  element: string;
}

let messagesSent = 0;

const authorInfo: HTMLResponse = {
  element: `<p class=font-bold>
-----------------------------
Name: Chris Daly
Years of Experience: 2.5
Focus: Backend and DevOps
Languages: Golang, Python, Bash, Ruby, Javascript/Typescript 
Frameworks: Django, Svelte/Sveltekit, Fiber, Express
CD3.dev/src: <a href='https://github.com/chrisdaly3/cd3dotdev' target='_blank' class='text-gold hover:text-pine hover:cursor-pointer'>https://www.github.com/chrisdaly3/cd3dotdev</a>
-----------------------------
</p>
`
}

const contactDetails: HTMLResponse = {
  element: `<form method="POST">
	<label>
		Name
		<input class="bg-transparent" name="user" placeholder="John Doe">
	</label>
	<label>
		Email
		<input class="bg-transparent" name="email" type="email" placeholder="user@example.com">
	</label>
	<label>
		Message Content
		<textarea  class="bg-transparent" name="email_content" type="password" placeholder="I LOVE this site!!"></textarea>
	</label>
	<button class="bg-foam text-overlay p-2.5" formaction="/api/mail">Submit</button>
</form>
`
}

const callers: { [key: string]: string } = {
  '--mlb': 'example',
  '--nba': 'example',
  '--nfl': 'example',
  '--nhl': 'api/sports/nhl'
}

function storeUser(command: string): string {
  if (command === '' || /^[]+$/.test(command) || command === '--help') {
    return `usage: user [options]\n\n[options]\n  - <your_name>: sets your name as the user\n  - clear: removes the set name and returns to default`
  } else if (command === 'clear') {
    user.set('visitor')
    return `username has been unset.`
  } else {
    user.set(command)
    return `username has been set to ${command}.`
  }
}

function showHelp(): string {
  let options = Object.keys(commandChoices)
  return `Welcome to the cd3.dev web terminal. Commands include:\n` + options.map((c) => `** ${c}: ${commandChoices[c].description}`).join(`\n`);
}

function showAuthorDetails(): HTMLResponse {
  return authorInfo
}

function callURL(command: string) {
  if (command === '' || /^[]+$/.test(command) || command === '--help') {
    return `usage: curl <url>\n\n<url.tld>: redirects the page to the requested url`
  } else {
    window.location.href = `https://${command}`
  }
}

function renderMsgForm(): HTMLResponse | string {
  messagesSent += 1
  messages.set(messagesSent.toString())
  if (messagesSent >= 4) {
    return `Oh no, it seems like you've reached your messaging limit. Please try again later.\n(aka - I'm on a free email API plan, please don't rack up my key usage :^)`
  } else {
    return contactDetails
  }
}

//TODO: Add server function handling for nba, mlb, and nfl leagues
async function getScores(option: string): Promise<HTMLResponse | string> {
  if (option === '' || /^[]+$/.test(option) || option === '--help') {
    return `usage: scores [options]\n\n[options]\n  --nba: return scores & standings in the NBA\n  --nhl: return scores & standings in the NHL\n  --mlb: return scores & standings in the MLB\n  --nfl: return scores & standings in the NFL`
  } else if (callers[option]) {
    try {
      let response = await fetch(callers[option]);
      let data = await response.json();
      console.log(data)
      return `Looking good! Request sent :^)`
    } catch (error) {
      console.error('Error fetching data', error);
      return `Error retreiving sports data: ${error}`
    };
  } else {
    return `working on it! you selected the ${option} league.`
  }
}

const commandChoices: { [key: string]: CommandInfo } = {
  help: { execute: showHelp, description: "return a list of helpful commands" },
  user: { execute: storeUser, description: "set the terminal user value. --help for use" },
  curl: { execute: callURL, description: "Change to a new site. --help for use." },
  scores: { execute: getScores, description: "Display scores and standings around your favorite professional sports leagues. --help for use" },
  msg: { execute: renderMsgForm, description: "Get in touch with the site creator (issues, job inquiries, etc.)" },
  neofetch: { execute: showAuthorDetails, description: "Find out more about the site creator" },
  // weather: {execute: weathercommand, description: "check your local weather"},
  //TODO: Add additional command options
}

export function handle(command: string) {
  const [c, ...args] = command.trim().split(' ')
  if (commandChoices[c]) {
    const callFunc = commandChoices[c];
    const response = callFunc.execute(args.join(' '))
    return response;
  }
  else {
    return `The ${c} command does not exist`;
  }
}

