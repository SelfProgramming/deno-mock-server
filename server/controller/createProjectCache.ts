import * as path from 'https://deno.land/std/path/mod.ts';
import { ProjectCache } from '../ProjectCache.ts';

export function createProjectCache(project: string): ProjectCache {
  const projectCache = new ProjectCache(project);
  const cacheDirPath = path.resolve('cache');
  projectCache.createCacheDir(cacheDirPath);
  return projectCache;
}
