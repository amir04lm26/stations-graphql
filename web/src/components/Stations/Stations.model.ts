import { ColumnProps } from "rsuite-table";
import { IStations } from "models/station";

export interface IStationsProps {
  stations: IStations | null;
  error: string | null;
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
