import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { Route } from '../routes/Route.ts';

// TODO: implement
export function createHandler(route: Route, project: string): Function {
  return function handle(req: ServerRequest): void {

  };
}
