import { ColumnProps } from "rsuite-table";

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

export interface IStationObject {
  station: IStation;
}

export interface IStationsObject {
  stations: IStations;
}

export interface IStationRow {
  width: number;
  fixed: boolean;
  resizable: boolean;
  sortable: boolean;
  align: ColumnProps["align"];
  title: string;
  dataKey: string;
}

export type StationRows = IStationRow[];
