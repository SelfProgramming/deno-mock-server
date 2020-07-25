import { executeHelp } from '../commands/help.ts';
import { executeStart } from '../commands/start.ts';

export enum Command {
  Help = 'help',
  Start = 'start',
}

export function execute(command: Command): void {
  switch (command) {
    case Command.Help: {
      executeHelp();
      break;
    }

    case Command.Start: {
      executeStart();
      break;
    }

    default: {
      console.error(`
        Sorry, something went wrong
        We aren't able to find command: ${command}
        
        Please, type "denomock help" to see available commands
      `);
    }
  }
}
