import React from "react";
import cn from "classnames";
import styles from "./AboutHero.module.sass";

const AboutHero = () => {
  return (
    <div id={styles.aboutHeroContainer}>
      <div id={styles.aboutHero}>
      <div id={styles.aboutHeroIn}>
          <h1 className={styles.aboutHeroTitle}>SPACEPATH</h1>
      </div>
      </div>
      <span></span>
        <div className={styles.aboutHeroPTag}>
            <h2>About Us</h2>
          <h1>
            SpacePath Marketplace is an NFT marketplace designed with you in
            mind. Whether you’re an artist or creator, we’ve spent countless
            hours refining our platform to enhance the user experience from all
            angles. Shattering boundaries by offering zero platform fees and
            giving more power to the users are just two of the many ways we’ve
            shown our dedication to our community. We’re nothing without the
            continued support from our faithful community and we want to offer
            the best experience possible.
          </h1>
        </div>
    </div>
  );
};

export default AboutHero;
