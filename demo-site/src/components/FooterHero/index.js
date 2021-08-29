import React, { useEffect, useState, useRef  } from "react";
import styles from "./FooterHero.module.sass";
import cn from "classnames";


const FooterHero = () => {

  return (
      <div className={styles.footerHeroContainer}>
        <div className={styles.footerHeroLayout}>
          <h1>SPACEPATH</h1>
          <div className={styles.buttonHeader}>
          <h4>Want to be a verified creator?</h4>
            <button className={cn("button", styles.button)}>Apply Now</button>
          </div>
        </div>
        <div className={styles.FCContainer}>
          <video autoPlay loop muted src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/NiceBleed.mp4?alt=media&token=254a0292-12d5-47f6-9fab-73d8ce40d8a3" type="video/mp4"></video>
          <span></span>
        </div>
      </div>
  );
};

export default FooterHero;
