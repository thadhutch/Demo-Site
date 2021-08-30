import React from "react";
import cn from "classnames";
import styles from "./Error.module.sass";

const Error = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Error</div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          {props.errorMessage}
        </div>
      </div>
    </div>
  );
};

export default Error;