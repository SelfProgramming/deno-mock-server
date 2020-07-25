import { Route } from './Route.ts';
import { RoutesConfig } from './RoutesConfig.ts';

export function adaptRoutesFromConfig(routesConfig: RoutesConfig): Route[] {
  return Object.keys(routesConfig)
    .map(route => ({
      path: route,
      count: routesConfig[route].count,
      model: routesConfig[route].model,
    }));
}
