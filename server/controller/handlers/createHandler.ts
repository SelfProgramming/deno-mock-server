import * as path from 'https://deno.land/std/path/mod.ts';
import {
  ensureDirSync,
  ensureFileSync,
  readJson,
  writeJson,
} from 'https://deno.land/std/fs/mod.ts';
import { ServerRequest } from 'https://deno.land/std/http/server.ts';

import { Route } from '../routes/Route.ts';
import { generateContent } from '../../content/generateContent.ts';

function createCacheDir(dirPath: string, project = 'default'): string {
  const projectDirPath = `${dirPath}/${project}-cache`;
  ensureDirSync(projectDirPath);

  return projectDirPath;
}

function createCacheFile(filePath: string, modelName: string): string {
  const modelFilePath = `${filePath}/${modelName}.json`;
  ensureFileSync(modelFilePath);

  return modelFilePath;
}

async function readFromCacheFile(cacheFilePath: string): Promise<any> {
  return readJson(cacheFilePath);
}

async function writeToCacheFile(cacheFilePath: string, data: any): Promise<void> {
  return writeJson(cacheFilePath, data);
}

export function createHandler(route: Route, project: string): Function {
  const cacheDirPath = path.resolve('cache');
  const projectDirPath = createCacheDir(cacheDirPath, project);
  const modelFilePath = createCacheFile(projectDirPath, route.path);

  return async function handle(req: ServerRequest): Promise<void> {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', '*');

    let body;
    if (req.method === 'GET') {
      try {
        body = (await readFromCacheFile(modelFilePath)).data;
      } catch (_) {
        body = generateContent(route);
        writeToCacheFile(modelFilePath, {data: body});
      }
    }

    req.respond({ body: JSON.stringify(body), headers, status: 200 });
  };
}
