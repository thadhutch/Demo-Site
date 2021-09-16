import React from "react";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Description from "./Description";

const Home = () => {
  return (
    <>
      <Description />
      <HotBid classSection="section" />
      <Popular />
      <Collections />
    </>
  );
};

export default Home;
