import React from "react";
import cn from "classnames";
import styles from "./ModalTextTitle.module.sass";

const ModalTextTitle = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>{props.title}</div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          {props.message}
        </div>
      </div>
    </div>
  );
};

export default ModalTextTitle;