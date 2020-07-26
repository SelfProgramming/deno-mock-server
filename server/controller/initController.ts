import { Controller } from './Controller.ts';
import { parseRoutes } from './routes/parseRoutesConfig.ts';
import { createRegexpToHandler } from './handlers/createRegexpToHandler.ts';
import { createProjectCache } from './createProjectCache.ts';

export function initController(project: string): Controller {
  const routes = parseRoutes();
  const projectCache = createProjectCache(project);
  const regexpToHandler = createRegexpToHandler(routes, projectCache);
  return new Controller(regexpToHandler);
}
