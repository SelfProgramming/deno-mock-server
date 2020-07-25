export interface RouteModel {
  name: string;
  type: string;
}

export interface Route {
  path: string;
  count: number;
  model: RouteModel[]
}
