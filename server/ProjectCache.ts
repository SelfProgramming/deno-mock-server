import {
  ensureDirSync,
  ensureFileSync,
  readJson,
  writeJson,
} from 'https://deno.land/std/fs/mod.ts';

export class ProjectCache {
  readonly project: string;

  private cacheDir: string = 'default';
  private modelNameToFilePath: Map<string, string>;

  constructor(project: string) {
    this.project = project;
    this.modelNameToFilePath = new Map<string, string>();
  }

  createCacheDir(dirPath: string): void {
    this.cacheDir = `${dirPath}/${this.project}-cache`;
    ensureDirSync(this.cacheDir);
  }

  createCacheFile(modelName: string): void {
    const modelFilePath = `${this.cacheDir}/${modelName}.json`;
    ensureFileSync(modelFilePath);

    this.modelNameToFilePath.set(modelName, modelFilePath);
  }

  async readFromCacheFile(modelName: string): Promise<any> {
    return readJson(this.getFilePathByModelName(modelName));
  }

  async writeToCacheFile(modelName: string, data: any): Promise<void> {
    return writeJson(this.getFilePathByModelName(modelName), data);
  }

  private getFilePathByModelName(modelName: string): string {
    return this.modelNameToFilePath.get(modelName) as string;
  }
}
