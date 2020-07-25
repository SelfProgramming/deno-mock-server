export class Config {
  project: string;
  port: number;

  constructor(project: string, port = 8000) {
    this.project = project;
    this.port = port;
  }
}
