import { gql } from "@apollo/client";

export const GET_STATIONS = gql`
  query GetStations {
    stations {
      id
      name
      metrics {
        volume
        margin
        profit
      }
    }
  }
`;

export const GET_STATION_BY_ID = gql`
  query GetStationById($id: Float!) {
    station(id: $id) {
      id
      name
      metrics {
        volume
        margin
        profit
      }
    }
  }
`;
