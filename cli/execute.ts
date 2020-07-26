import { executeHelp } from '../commands/help.ts';
import { executeStart } from '../commands/start.ts';
import { executeClean } from '../commands/clean.ts';

export enum Command {
  Help = 'help',
  Clean = 'clean',
  Start = 'start',
}

export function execute(command: Command): void {
  switch (command) {
    case Command.Help: {
      executeHelp();
      break;
    }

    case Command.Clean: {
      executeClean();
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
