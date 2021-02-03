import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
