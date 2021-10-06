import React from "react";
import cn from "classnames";
import styles from "./Marketplace.module.sass";
import MarketPlaceHero from "./MarketPlaceHero/index";
import MarketPlaceCardSlider from "./MarketplaceCardSliders/index";
import LiveAuctionSlider from "./LiveAuctions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";

// data


const Marketplace = () => {

  return (
    <>
      <Header />
      <div className={cn("section-pt80", styles.section)}>
        <MarketPlaceHero />
        <div className={cn("container", styles.container)}>
          <LiveAuctionSlider />
          <MarketPlaceCardSlider />
        </div>
      </div>
      <FooterHero />
      <Footer />
    </>
  );
};

export default Marketplace;


