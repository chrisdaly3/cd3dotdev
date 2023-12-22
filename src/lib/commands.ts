import { user } from '$lib/stores/localStorage';

interface CommandInfo {
  execute: (arg0: string) => any;
  description: string;
}

export type HTMLResponse = {
  name: string;
  element: string;
}

const authorInfo:HTMLResponse = {
  name: 'AuthorInfo',
  element: `<p>
-----------------------------
Name: Chris Daly
Years of Experience: 4
Focus: Backend and DevOps
Languages: Golang, Python, Bash, Ruby, Javascript/Typescript 
Frameworks: Django, Svelte/Sveltekit, Fiber, Express
Terminal: cd3Term.sh
CD3.Dev/src: <a href='https://github.com/chrisdaly3/cd3dotdev' target='_blank' class='text-gold hover:text-pine hover:cursor-pointer'>https://www.github.com/chrisdaly3/cd3dotdev</a>
-----------------------------</p>
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
const commandChoices: { [key: string]: CommandInfo} = {
  user: {execute: storeUser, description: "set the terminal user value. --help for use"},
  help:{ execute: showHelp, description: "return a list of helpful commands"},
  neofetch:{execute: showAuthorDetails, description: "display information about the creator of this site."},
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

