import type { GetServerSideProps, NextPage } from "next";

import client from "apollo";
import { GET_STATIONS } from "apollo/queries";
import Header from "components/Header";
import { IStations, IStationsObject } from "models/station";

import styles from "styles/Home.module.css";
import { errorToString } from "utils/error";

export type Stations = IStations | null;
export type ErrorType = string | null;
export interface IHomeProps {
  stations: Stations;
  error: ErrorType;
}

const Home: NextPage<IHomeProps> = ({ stations, error }) => {
  return (
    <>
      <Header
        title='Welcome to Station Manager'
        pageTitle='Station Manager'
        pageDescription='Station Manager Platform'
      />

      <div className={styles.container}>
        <main className={styles.main}>
          {JSON.stringify(stations)}
          {error && <p data-testid='error'>{errorToString(error)}</p>}
        </main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let stations: Stations = null,
    error: ErrorType = null;

  try {
    const res = await client.query<IStationsObject>({
      query: GET_STATIONS,
    });
    stations = res.data.stations || null;
  } catch (err: unknown) {
    stations = null;
    error = errorToString(err);
  }

  return {
    props: {
      stations,
      error,
    },
  };
};

export default Home;
