export interface ModelA {
  type: 'A';
  a: string;
}

export interface ModelB {
  type: 'B';
  b: string;
}

export type AbstractModel = ModelA | ModelB;
