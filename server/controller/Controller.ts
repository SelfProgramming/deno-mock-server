import { ServerRequest } from 'https://deno.land/std/http/server.ts';

export class Controller {
  private regexToHandler: Map<string, Function> = new Map<string, Function>();

  constructor(regexToHandler: Map<string, Function>) {
    this.regexToHandler = regexToHandler;
  }

  handleRequest(req: ServerRequest): void {
    Array.from(this.regexToHandler.entries())
      .forEach(([regex, handler]) => {
        if (req.url.match(regex)) {
          handler(req);
        }
      });
  }
}
