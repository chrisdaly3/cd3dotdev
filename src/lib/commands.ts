import { user, author } from '$lib/stores/localStorage';

function storeUser(command: string): string {
  if (command === '' || /^[]+$/.test(command)) {
    return `** missing arguments **\nusage: user [options]\n\n[options]\n  - <your_name>: sets your name as the user\n  - clear: removes the set name and returns to default`
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
  return `Welcome to the cd3.dev web terminal. Commands include:\n` + options.map((i) => `** ${i} **`).join(`\n`)
}

function showAuthorDetails(): string {
  return `needs to be implemented still. please be patient :^) - ${author}`
}
const commandChoices: { [key: string]: any } = {
  user: storeUser,
  help: showHelp,
  neofetch: showAuthorDetails,
  //TODO: Add additional command options
}

export function handle(command: string) {
  const [c, ...args] = command.trim().split(' ')
  if (commandChoices[c]) {
    const callFunc = commandChoices[c];
    const response = callFunc(args.join(' '))
    return response;
  }
  else {
    return `The ${c} command does not exist`;
  }
}
