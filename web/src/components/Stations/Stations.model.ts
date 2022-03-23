import { IStations } from "models/station";

export interface IStationsProps {
  stations: IStations | null;
  error: string | null;
}
