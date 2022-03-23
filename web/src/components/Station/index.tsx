import { FC } from "react";
import { get } from "lodash";

import { stationRows } from "utils/stations";
import { Station } from "./Station.model";

import styles from "./Station.module.css";

interface IStationProps {
  station: Station;
}

const Station: FC<IStationProps> = ({ station }) => {
  return station ? (
    <section className={styles["station-container"]}>
      <header>
        <h2 data-testid='station-title'>Station ({station.id}) Information</h2>
      </header>

      <ul className={styles["station-list"]}>
        {stationRows.map(({ title, dataKey }) => (
          <li key={dataKey} className={styles["station-list__item"]}>
            <span>{title}</span>
            <b>{get(station, dataKey)}</b>
          </li>
        ))}
      </ul>
    </section>
  ) : null;
};

export default Station;
