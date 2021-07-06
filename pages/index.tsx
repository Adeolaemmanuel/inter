import Head from "next/head";
import { Fragment } from "react";
import List from "../components/Index/List";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Test app</title>
      </Head>
      <div className={`${styles.index}`}>
        <List />
      </div>
    </Fragment>
  );
}
