import { serve } from 'https://deno.land/std/http/server.ts';
import { Config } from './Config.ts';
import { initController } from './controller/initController.ts';

export async function start(config: Config): Promise<void> {
  const { project, port } = config;
  const server = serve({ port });

  const controller = initController(project);
  console.log(`Http mock server listening on port ${port}`);
  for await (const req of server) {
    controller.handleRequest(req);
  }
}
