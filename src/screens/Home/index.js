import React from "react";
import Popular from "./Popular";
import HotBid from "../../components/Header/HotBid";
import Collections from "./Collections";
import Description from "./Description";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";

const Home = () => {

  return (
    <>
      <Header />
      <Description />
      <HotBid classSection="section" />
      <Popular />
      <Collections />
      <FooterHero />
      <Footer />
    </>
  );
};

export default Home;
