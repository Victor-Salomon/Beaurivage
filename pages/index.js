import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

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
            <h1>Hello</h1>
          </Layout>
        </div>
      </main>
    </div>
  );
}
