import { readJsonSync } from 'https://deno.land/std/fs/mod.ts';
import { Route } from './Route.ts';
import { adaptRoutesFromConfig } from './adaptRoutesFromConfig.ts';
import { RoutesConfig } from './RoutesConfig.ts';

export function parseRoutes(configPath = './test.json'): Route[]  {
  const routesConfig = readJsonSync(configPath) as RoutesConfig;
  return adaptRoutesFromConfig(routesConfig);
}
