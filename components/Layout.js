import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BEAURIVAGES DREAMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
