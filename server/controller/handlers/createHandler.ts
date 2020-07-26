import { ServerRequest } from 'https://deno.land/std/http/server.ts';

import { Route } from '../routes/Route.ts';
import { ProjectCache } from '../../ProjectCache.ts';
import { createHeaders } from './http/createHeaders.ts';
import { RequestHandlerFactory } from './http/RequestHandlerFactory.ts';
import { HttpMethod } from './http/HttpMethod.ts';
import { generateContent } from '../../content/generateContent.ts';

export function createHandler(route: Route, projectCache: ProjectCache): Function {
  projectCache.createCacheFile(route.path);
  createContentIfAbsent(projectCache, route);

  return async function handle(req: ServerRequest): Promise<void> {
    const httpHandler = RequestHandlerFactory.create(req.method as HttpMethod);

    httpHandler.setHeaders(createHeaders());
    httpHandler.setProjectCache(projectCache);
    httpHandler.setRoute(route);

    httpHandler.handle(req, projectCache);
  };
}

async function createContentIfAbsent(projectCache: ProjectCache, route: Route): Promise<void> {
  projectCache.createCacheFile(route.path);

  try {
    await projectCache.readFromCacheFile(route.path);
  } catch (_) {
    const content = generateContent(route);
    projectCache.writeToCacheFile(route.path, { data: content });
  }
}
