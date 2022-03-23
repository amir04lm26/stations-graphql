import { IStations } from "models/station";

export const stationsMockData: IStations = [
  {
    id: 1,
    name: "Station 1",
    metrics: {
      volume: 1526,
      margin: 20.65,
      profit: 315,
    },
  },
  {
    id: 2,
    name: "Station 2",
    metrics: {
      volume: 5000,
      margin: 50.65,
      profit: 1000,
    },
  },
  {
    id: 3,
    name: "Station 3",
    metrics: {
      volume: 2565,
      margin: 50.65,
      profit: 305,
    },
  },
];
