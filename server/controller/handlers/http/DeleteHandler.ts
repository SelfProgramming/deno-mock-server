import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { HttpHandler } from './HttpHandler.ts';
import { MockRouteHandler } from './MockRouteHandler.ts';

export class DeleteHandler extends MockRouteHandler implements HttpHandler {
  async handle(req: ServerRequest): Promise<void>  {
    const subRoutes = req.url.split('/').filter(Boolean);
    const [_, id] = subRoutes;
    if (!id) {
      const body = JSON.stringify({ error: 'ID is absent' });
      req.respond({ status: 400, body });
      return;
    }

    let { data } = await this.projectCache.readFromCacheFile(this.route.path);
    if (Array.isArray(data)) {
      const index = data.findIndex((el: { id: string }) => el.id === id);
      index > -1 && data.splice(index, 1);
    } else {
      data = {};
    }

    this.projectCache.writeToCacheFile(this.route.path, { data });
    req.respond({ status: 200 });
  }
}
