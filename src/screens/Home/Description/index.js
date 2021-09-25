import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import "./mouse.css"
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
          {/* <div className={styles.artistInfo}>
              hello
            </div> */}
        </div>
      </div>
      <div className={styles.moveContainer}>
        {/* mouse scroll animation */}
        {/* $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
              // can be whatever, 0 refers to the top space you allow
              $('.move').slideUp('slow'); // Hide your element
              } else {
                $('.move').slideDown('slow'); 
              // It's justmouse if you want to show back the element if we're back on top
          }
        }); */}
        <div className="move">
          <div className="mouse">
            <div className="mouse-icon">
              <span className="mouse-wheel"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;


