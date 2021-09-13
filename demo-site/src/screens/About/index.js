import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import AboutHero from "./AboutHero/AboutHero";
import Team from "./Team/Team";

const About = () => {
  return (
    <div>
      <div className={styles.aboutPageContainer}>
        <AboutHero />
        <div className={styles.teamContainer}>
        <Team />
        </div>
      </div>
    </div>
  );
};
export default About;
