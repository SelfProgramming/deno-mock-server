export interface RouteModel {
  name: string;
  type: string;
  size?: string | number;
}

export interface Route {
  path: string;
  count: number;
  model: RouteModel[]
}
