import React from "react";
import { StatsInfo } from "../../../mocks/ProfileContent/Stats_Suggestions";
import { Suggestions } from "../../../mocks/ProfileContent/Stats_Suggestions";

import styles from "./Stats.module.sass";

const Stats = () => {

  return (
    <>
    <div className={styles.statsContent}>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeaders}> Total Portfiolio Likes</div>
        <div className={styles.stats}>{StatsInfo.totalLikes}</div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeaders}>Voting Power</div>
        <div className={styles.stats}>{StatsInfo.vPower}</div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeaders}>Total NTFs Bought</div>
        <div className={styles.stats}>{StatsInfo.NFTsBought}</div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeaders}>Most Valuable NTF</div>
        <div className={styles.stats}>
        <div>{StatsInfo.mostValuableNFTeth}</div>
        <div id={styles.stats2}>{StatsInfo.mostValuableNFTusd}</div>
        </div>

      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeaders}>Joined Platform</div>
        <div className={styles.stats}>{StatsInfo.joinedDate}</div>
      </div>
    </div>
    </>
  );
};
export default Stats;
