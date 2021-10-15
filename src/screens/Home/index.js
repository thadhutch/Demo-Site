import React, { useEffect, useContext } from "react";
import Popular from "./Popular";
import HotBid from "../../components/Header/HotBid";
import Collections from "./Collections";
import Description from "./Description";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";
import { UserContext } from "../../GlobalState";

const Home = () => {
  const Moralis = require('moralis');
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD");
  const { setUsername, setUserAuthenticated, setEthAddress } = useContext(UserContext);

  useEffect(() => {
    const user = Moralis.User.current();
    if (user) {
      setUserAuthenticated(true);
      setUsername(user.attributes.username);
      setEthAddress(user.attributes.ethAddress);
      // console.log(user.attributes);
    } else {
      setUserAuthenticated(false);
      setUsername(null);
    }
  }, []);

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
