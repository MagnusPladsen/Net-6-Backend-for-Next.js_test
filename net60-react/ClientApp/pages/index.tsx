import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "./landingPage";
import { concert } from "./order/tickets/[id]";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{concert.name}</title>
        <meta
          name="description"
          content="Booking side for Countryfestivalen Vinstra"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LandingPage />
    </>
  );
};

export default Home;
