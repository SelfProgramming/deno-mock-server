import { Route } from '../routes/Route.ts';
import { createRegexps } from './createRegexps.ts';
import { createHandler } from './createHandler.ts';
import { ProjectCache } from '../../ProjectCache.ts';

export function createRegexpToHandler(routes: Route[], projectCache: ProjectCache): Map<string, Function> {
  return routes.reduce((regexToHandler, route) => {
    const handler = createHandler(route, projectCache);
    createRegexps(route.path).forEach(regexp => regexToHandler.set(regexp, handler));
    return regexToHandler;
  }, new Map<string, Function>());
}
