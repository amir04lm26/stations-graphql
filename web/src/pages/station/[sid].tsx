import type { GetServerSideProps, NextPage } from "next";

import client from "apollo";
import { GET_STATION_BY_ID } from "apollo/queries";
import Header from "components/Header";
import ErrorMessage from "components/ErrorMessage";
import { errorToString } from "utils/error";
import { IStation, IStationObject } from "models/station";
import { ErrorType } from "models/error";

import styles from "styles/theme.module.css";
import Station from "components/Station";

export type Station = IStation | null;
export interface IHomeProps {
  station: Station;
  error: ErrorType;
}

const Home: NextPage<IHomeProps> = ({ station, error }) => {
  return (
    <>
      <Header
        title='Stations Manager - Station Info'
        pageTitle='Stations Manager - Station Info'
        pageDescription='Station Info Page'
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <Station station={station} />
          <ErrorMessage message={error} />
        </main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const stationId = query.sid;

  let station: Station = null,
    error: ErrorType = null;

  try {
    // throw ""; // ! uncomment this to see the UI in case of any error
    if (typeof stationId !== "string")
      throw new Error(`Invalid station ID: ${stationId}`);

    const res = await client.query<IStationObject>({
      query: GET_STATION_BY_ID,
      variables: { id: Number(stationId) },
    });
    station = res.data.station;
  } catch (err: unknown) {
    station = null;
    error = errorToString(err);
  }

  return {
    props: {
      station,
      error,
    },
  };
};

export default Home;
