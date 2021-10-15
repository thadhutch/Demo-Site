import React from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";
import Image from "../Image";
import Light from "./light.svg";
import Dark from "./dark.svg";

const Theme = ({ className }) => {
  const darkMode = useDarkMode(true);

  return (
    <>
      {/*<span className={styles.sunicon}>
        <Image
          src="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png"
          srcDark="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png"
          alt="sun icon"
        />
      </span>*/}
      <span className={styles.sunicon}/>
      <label
        className={cn(
          styles.theme,
          { [styles.theme]: className === "theme" },
          { [styles.themeBig]: className === "theme-big" }
        )}
      >
      <span className={styles.sunicon}/>

        <input
          className={styles.input}
          checked={darkMode.value}
          onChange={darkMode.toggle}
          type="checkbox"
        />
        <span className={styles.inner}>
        {/* <span className={styles.sunicon}/> */}
          <span className={styles.box}> </span>
          {/* <span className={styles.moonicon}/> */}

        </span>
      </label>
      {/*<span className={styles.moonicon}>
         <Image
          src="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png"
          srcDark="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png"
          alt="moon icon"
        /> 
      </span>*/}
    </>
  );
};

export default Theme;
