import React, { useState } from "react";
import cn from "classnames";
import styles from "./Popular.module.sass";
import DropdownEmpty from "../../../components/DropdownEmpty";
import TopLeaderboard from "./Leaderboards/TopLeaderboard";
import BottomLeaderboard from "./Leaderboards/BottomLeaderboard";

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
                <TopLeaderboard type={direction}/>
              </div>
              </div>
              <div className={styles.bottomSection}>
                <BottomLeaderboard type={direction}/>
              </div>
        </div>
    </div>
  );
};

export default Popular;
