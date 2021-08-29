import React from "react";
import cn from "classnames";
import styles from "./Marketplace.module.sass";
import MarketPlaceHero from "./MarketPlaceHero/index";
import MarketPlaceCardSlider from "./MarketplaceCardSliders/index";

// data


const Marketplace = () => {

  return (
    <div className={cn("section-pt80", styles.section)}>
        <MarketPlaceHero />
      <div className={cn("container", styles.container)}>
        <MarketPlaceCardSlider />
      </div>
    </div>
  );
};

export default Marketplace;


 