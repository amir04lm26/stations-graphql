import { StationRows } from "./Stations.model";

export const stationRows: StationRows = [
  {
    width: 50,
    fixed: true,
    resizable: true,
    sortable: false,
    align: "center",
    title: "ID",
    dataKey: "id",
  },
  {
    width: 180,
    fixed: false,
    resizable: true,
    sortable: true,
    align: "center",
    title: "Name",
    dataKey: "name",
  },
  {
    width: 120,
    fixed: false,
    resizable: true,
    sortable: true,
    align: "center",
    title: "Volume",
    dataKey: "metrics.volume",
  },
  {
    width: 120,
    fixed: false,
    resizable: true,
    sortable: true,
    align: "center",
    title: "Margin",
    dataKey: "metrics.margin",
  },
  {
    width: 120,
    fixed: false,
    resizable: true,
    sortable: true,
    align: "center",
    title: "Profit",
    dataKey: "metrics.profit",
  },
];
