import React from "react";
import cn from "classnames";
import styles from "./AboutHero.module.sass";

const AboutHero = () => {
    return (
        <div id={styles.aboutHeroContainer}>
           <div id={styles.aboutHero}>
           <h1 className={styles.title}>SPACEPATH</h1>
           </div>
        </div>
    );
};

export default AboutHero;


