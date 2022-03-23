import type { NextPage } from "next";

import Header from "components/Header";

import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header
        title='Welcome to Station Manager'
        pageTitle='Station Manager'
        pageDescription='Station Manager Platform'
      />

      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </>
  );
};

export default Home;
