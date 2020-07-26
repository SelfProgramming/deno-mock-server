import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { HttpHandler } from './HttpHandler.ts';
import { MockRouteHandler } from './MockRouteHandler.ts';
import { uuidv4 } from '../../../content/uuidv4.ts';

export class PostHandler extends MockRouteHandler implements HttpHandler {
  async handle(req: ServerRequest): Promise<void>  {
    const body = new TextDecoder('utf-8').decode(await Deno.readAll(req.body));
    const model = { ...JSON.parse(body), id: uuidv4() };

    let { data } = await this.projectCache.readFromCacheFile(this.route.path);
    if (Array.isArray(data)) {
      data.push(model);
    } else {
      data = model;
    }

    this.projectCache.writeToCacheFile(this.route.path, { data });
    req.respond({ status: 200 });
  }
}
