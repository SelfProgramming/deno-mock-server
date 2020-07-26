import { parse } from 'https://deno.land/std/flags/mod.ts';
import { start } from '../server/start.ts';
import { Config } from '../server/Config.ts';

export function executeStart(): void {
  const { project, port } = parse(Deno.args);
  const serverConfig = new Config(project, port);
  start(serverConfig);
}

