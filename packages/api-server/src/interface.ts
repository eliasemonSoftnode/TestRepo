import { Router } from 'express';

export interface Test {
  id: number;
  name: string;
  content: string;
}
export interface RoutesType {
  route: Router;
}
