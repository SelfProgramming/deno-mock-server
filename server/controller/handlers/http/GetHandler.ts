import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { HttpHandler } from './HttpHandler.ts';
import { MockRouteHandler } from './MockRouteHandler.ts';

export class GetHandler extends MockRouteHandler implements HttpHandler {
  async handle(req: ServerRequest): Promise<void>  {
    const subRoutes = req.url.split('/').filter(Boolean);
    const [_, id] = subRoutes;

    let body;
    let status = 200;

    try {
      const { data } = await this.projectCache.readFromCacheFile(this.route.path);
      body = id ? data.find((el: { id: string }) => el.id === id) : data;
    } catch (err) {
      body = { error: err };
      status = 500;
    }

    req.respond({ body: JSON.stringify(body), headers: this.headers, status });
  }
}
