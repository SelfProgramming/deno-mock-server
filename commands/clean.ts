import { resolve } from 'https://deno.land/std/path/mod.ts';
import { parse } from 'https://deno.land/std/flags/mod.ts';

export function executeClean(): void {
  const { project = 'default' } = parse(Deno.args);
  const cacheDirPath = resolve('cache');
  try {
    Deno.removeSync(`${cacheDirPath}/${project}-cache`, { recursive: true });
  } catch (e) {
    console.error(`Project ${project} was not found (please, specify your project with --project= arg)`);
    return;
  }

  console.log(`Cache for project ${project} has been cleaned`);
}
