import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="">
          <Layout page="Beaurivage - Home">
            <div>
              <h1 className={styles.backgroundHome}>HELLO</h1>
            </div>
          </Layout>
        </div>
      </main>
    </div>
  );
}
