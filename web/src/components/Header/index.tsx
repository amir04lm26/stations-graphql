import { FC } from "react";
import Head from "next/head";

import styles from "./Header.module.css";

interface IHeaderProps {
  title: string;
  pageTitle: string;
  pageDescription: string;
}

const Header: FC<IHeaderProps> = ({ title, pageTitle, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
    </>
  );
};

export default Header;
