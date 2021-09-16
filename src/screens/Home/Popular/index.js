import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Popular.module.sass";
import Add from "./Add";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import DropdownEmpty from "../../../components/DropdownEmpty";
import TopLeader from "./Leaderboards/TopLeader";
import Left from "./Leaderboards/Left";
import Right from "./Leaderboards/Right";

const dateOptions = ["7 Days", "30 Days", "All Time"];
const directionOptions = ["Artists", "Collectors"];

const Popular = () => {
  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);
  return (
    <div className={cn("container", styles.container)}>
      <div className={styles.leaderboardSection}>
        <div className={styles.top}>
          <div className={styles.box}>
            <h1 className={styles.stage}>Leaderboard</h1>
            <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
            />
          </div>
        </div>
        <div className={styles.bothLeaderboard}>
          <div className={styles.topSection}>
            <TopLeader />
          </div>
          <div className={styles.bottomSection}>
            <Left />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
