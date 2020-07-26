import { HttpMethod } from './HttpMethod.ts';
import { GetHandler } from './GetHandler.ts';
import { PostHandler } from './PostHandler.ts';
import { DeleteHandler } from './DeleteHandler.ts';
import { MockRouteHandler } from './MockRouteHandler.ts';
import { HttpHandler } from './HttpHandler.ts';

type RequestHandler = MockRouteHandler & HttpHandler

export class RequestHandlerFactory {
  static create(method: HttpMethod): RequestHandler {
    switch (method) {
      case HttpMethod.GET: {
        return new GetHandler();
      }
      case HttpMethod.POST: {
        return new PostHandler();
      }
      case HttpMethod.DELETE: {
        return new DeleteHandler();
      }
    }
  }
}
