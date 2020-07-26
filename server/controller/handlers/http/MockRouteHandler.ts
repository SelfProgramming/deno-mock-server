import { ProjectCache } from '../../../ProjectCache.ts';
import { Route } from '../../routes/Route.ts';

export class MockRouteHandler {
  public projectCache!: ProjectCache;
  public route!: Route;
  public headers!: Headers;

  setProjectCache(projectCache: ProjectCache): void {
    this.projectCache = projectCache;
  }

  setRoute(route: Route): void {
    this.route = route;
  }

  setHeaders(headers: Headers): void {
    this.headers = headers;
  }
}
