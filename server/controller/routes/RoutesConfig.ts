import { RouteModel } from './Route.ts';

interface RouteOptions {
  count: number;
  model: RouteModel[];
}

export interface RoutesConfig {
  [route: string]: RouteOptions;
}
