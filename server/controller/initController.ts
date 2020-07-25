import { Controller } from './Controller.ts';
import { parseRoutes } from './routes/parseRoutesConfig.ts';
import { createRegexpToHandler } from './handlers/createRegexpToHandler.ts';

export function initController(project: string): Controller {
  const routes = parseRoutes();
  const regexToHandler = createRegexpToHandler(routes, project);
  return new Controller(regexToHandler);
}
