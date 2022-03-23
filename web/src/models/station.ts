export interface IStationMetric {
  volume: number;
  margin: number;
  profit: number;
}

export interface IStation {
  id: number;
  name: string;
  metrics: IStationMetric;
}

export type IStations = IStation[];

export interface IStationsObject {
  stations: IStations;
}
