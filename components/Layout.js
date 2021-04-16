import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "./Footer";

export default function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>BEAURIVAGES DREAMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={loading} />
      {children}
      <Footer />
    </>
  );
}
