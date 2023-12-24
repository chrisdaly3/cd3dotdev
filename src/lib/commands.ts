import { user } from '$lib/stores/localStorage';

interface CommandInfo {
  execute: (arg0: string) => any;
  description: string;
}

export type HTMLResponse = {
  element: string;
}

const authorInfo: HTMLResponse = {
  element: `<p class=font-bold>
-----------------------------
Name: Chris Daly
Years of Experience: 3.5
Focus: Backend and DevOps
Languages: Golang, Python, Bash, Ruby, Javascript/Typescript 
Frameworks: Django, Svelte/Sveltekit, Fiber, Express
Terminal: cd3Term.sh
CD3.Dev/src: <a href='https://github.com/chrisdaly3/cd3dotdev' target='_blank' class='text-gold hover:text-pine hover:cursor-pointer'>https://www.github.com/chrisdaly3/cd3dotdev</a>
-----------------------------
</p>
`
}

// TODO: implement contact details for response.
const contactDetails: HTMLResponse = {
  element: `
<p class=italic>
msg is still a work in progress, it will be implemented soon :^)
</p>
`
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

function showContactDetails(): HTMLResponse {
  return contactDetails
}

const commandChoices: { [key: string]: CommandInfo } = {
  help: { execute: showHelp, description: "return a list of helpful commands" },
  user: { execute: storeUser, description: "set the terminal user value. --help for use" },
  curl: { execute: callURL, description: "Change to a new site. --help for use." },
  msg: { execute: showContactDetails, description: "Get in touch with the site creator (issues, job inquiries, etc.)" },
  neofetch: { execute: showAuthorDetails, description: "Find out more about the site creator" },
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

