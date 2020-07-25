import { execute, Command } from './cli/execute.ts';

const [cliCommand] = Deno.args;
execute(cliCommand as Command);
