import { resolve } from 'https://deno.land/std/path/mod.ts';
import { Controller } from './Controller.ts';
import { parseRoutes } from './routes/parseRoutesConfig.ts';
import { createRegexpToHandler } from './handlers/createRegexpToHandler.ts';
import { ProjectCache } from '../ProjectCache.ts';

export function initController(project: string): Controller {
  const routes = parseRoutes();
  const projectCache = createProjectCache(project);
  const regexpToHandler = createRegexpToHandler(routes, projectCache);
  return new Controller(regexpToHandler);
}

function createProjectCache(project: string): ProjectCache {
  const projectCache = new ProjectCache(project);
  const cacheDirPath = resolve('cache');
  projectCache.createCacheDir(cacheDirPath);
  return projectCache;
}
