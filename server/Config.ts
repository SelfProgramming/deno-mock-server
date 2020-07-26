export class Config {
  project: string;
  port: number;

  constructor(project: string = 'default', port = 8000) {
    this.project = project;
    this.port = port;
  }
}
