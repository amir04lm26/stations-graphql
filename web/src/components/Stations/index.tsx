import { FC, useCallback, useMemo, useState } from "react";
import Router from "next/router";
import {
  Table,
  Column,
  HeaderCell,
  Cell,
  SortType,
  RowDataType,
} from "rsuite-table";
import { get } from "lodash";

import ErrorMessage from "components/ErrorMessage";
import { stationRows } from "./Stations.utils";
import { IStationsProps } from "./Stations.model";

import styles from "./Stations.module.css";

const TABLE_HEIGHT = 400;

export const Stations: FC<IStationsProps> = ({ stations, error }) => {
  const [sortColumn, setSortColumn] = useState<string>();
  const [sortType, setSortType] = useState<SortType>();

  const tableData = useMemo(() => {
    if (!stations) return [];
    let data: typeof stations = [...stations];

    if (sortColumn && sortType) {
      data = stations.sort((a, b) => {
        let x = get(a, sortColumn);
        let y = get(b, sortColumn);
        if (typeof x === "string") {
          x = x.charCodeAt(0);
        }
        if (typeof y === "string") {
          y = y.charCodeAt(0);
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  }, [stations, sortColumn, sortType]);

  const handleSortColumn = useCallback(
    (sortColumn: string, sortType: SortType | undefined) => {
      setSortColumn(sortColumn);
      setSortType(sortType);
    },
    [setSortColumn, setSortType]
  );

  const handleViewStation = useCallback((station: RowDataType) => {
    Router.push({
      pathname: `/station/${station.id}`,
    });
  }, []);

  return (
    <section className={styles["table-container"]}>
      <h2 className={styles["table-title"]}>Stations List</h2>

      <div className={styles["table"]}>
        <Table
          height={TABLE_HEIGHT}
          loading={!error && !tableData}
          locale={{ emptyMessage: error ? "" : "No data found" }}
          data={tableData}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          shouldUpdateScroll={false}
          onRowClick={handleViewStation}>
          {stationRows.map(
            ({ width, fixed, resizable, sortable, align, title, dataKey }) => (
              <Column
                key={dataKey}
                width={width}
                fixed={fixed}
                resizable={resizable}
                sortable={sortable}
                align={align}>
                <HeaderCell>{title}</HeaderCell>
                <Cell dataKey={dataKey} />
              </Column>
            )
          )}
        </Table>

        <ErrorMessage message={error} className={styles["table-error"]} />
      </div>
    </section>
  );
};

export default Stations;
