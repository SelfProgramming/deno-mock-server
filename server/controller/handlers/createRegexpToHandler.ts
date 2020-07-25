import { Route } from '../routes/Route.ts';
import { createRegexp } from './createRegexp.ts';
import { createHandler } from './createHandler.ts';

export function createRegexpToHandler(routes: Route[], project: string): Map<string, Function> {
  return routes.reduce((regexToHandler, route) => {
    regexToHandler.set(createRegexp(route.path), createHandler(route, project));
    return regexToHandler;
  }, new Map<string, Function>());
}
