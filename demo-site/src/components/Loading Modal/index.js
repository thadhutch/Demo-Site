import React from "react";
import cn from "classnames";
import styles from "./Loader.module.sass";
import Loader from "../Loader"

const LoadingModal = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={styles.loaderContainer}>
        <Loader className={styles.loader}/>
      </div>
      <div className={cn("h4", styles.title)}></div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
        {props.loadingMessage}
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;