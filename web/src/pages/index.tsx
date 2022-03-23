import type { GetServerSideProps, NextPage } from "next";

import client from "apollo";
import { GET_STATIONS } from "apollo/queries";
import Header from "components/Header";
import Stations from "components/Stations";
import { errorToString } from "utils/error";
import { IStations, IStationsObject } from "models/station";
import { ErrorType } from "models/error";

import styles from "styles/Home.module.css";

export type Stations = IStations | null;
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
          <Stations stations={stations} error={error} />
        </main>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let stations: Stations = null,
    error: ErrorType = null;

  try {
    // throw ""; // ! uncomment this to see the UI in case of any error
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
