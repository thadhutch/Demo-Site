import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Carousel from "./Carousel/Carousel";
import AboutHero from "./AboutHero/AboutHero";

const About = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.aboutPageContainer}>
        <AboutHero />
        <Carousel />
      </div>
    </div>
  );
};
export default About;
