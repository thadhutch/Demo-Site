import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import VerifiedArtistButton from "./VerifiedArtistButton";
import HomeHeroCards from "./HomeHeroCards";


const Description = () => {
  return (
    <div className={styles.section}>
      <div className={styles.homeHero}>
        <div className={styles.homeHeroLeft}>
          <div className={styles.homeHeroWords}>
              <h1 className={styles.title}>Govern, Create, and Collect Digital Art</h1>
              <h2>
              On a one of a kind feeless, ecological & defi marketplace.
              </h2>
          </div>
            <div className={styles.btns}>
              <Link className={cn("button", styles.button)} to="/marketplace">
                Discover More
              </Link>
              <Link className={cn("button-stroke", styles.button)} to="/">
                Earn SP
              </Link>
            </div>
          </div>
          <div className={styles.homeHeroFeature}>
            <h2 className={styles.featuretitle}>Artist Spotlight</h2>
            <div className={styles.FeaturedContent}>
              <HomeHeroCards />
            </div>
            <div className={styles.artistInfo}>
              hello
            </div>
          </div>
        </div>
    </div>
  );
};

export default Description;


