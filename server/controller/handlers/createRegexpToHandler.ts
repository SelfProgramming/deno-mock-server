import { Route } from '../routes/Route.ts';
import { createHandler } from './createHandler.ts';
import { ProjectCache } from '../../ProjectCache.ts';

export function createRegexpToHandler(routes: Route[], projectCache: ProjectCache): Map<string, Function> {
  return routes.reduce((regexToHandler, route) => {
    const handler = createHandler(route, projectCache);
    regexToHandler.set(`/${route}`, handler);
    return regexToHandler;
  }, new Map<string, Function>());
}
