import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import AboutHero from "./AboutHero/AboutHero";
import Team from "./Team/Team";

const About = () => {
  return (
    <div>
      <div className={styles.aboutPageContainer}>
        <h1>hi</h1>
        <AboutHero />
        <div className={styles.teamContainer}>
        <span></span>
        {/* <Team /> */}
        </div>
      </div>
    </div>
  );
};
export default About;
