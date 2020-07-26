import { resolve } from 'https://deno.land/std/path/mod.ts';
import { parse } from 'https://deno.land/std/flags/mod.ts';

export function executeClean(): void {
  const { project = 'default' } = parse(Deno.args);
  const cacheDirPath = resolve('cache');
  Deno.removeSync(`${cacheDirPath}/${project}-cache`, { recursive: true });
}
