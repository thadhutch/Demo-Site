import React, { useEffect, useState } from "react";
import styles from "./Leaderboards.module.sass";
import { BottomArtists } from "../../../../mocks/leaderBoard";
import { BottomCollectors } from "../../../../mocks/leaderBoard";


const BottomLeaderboard = (props) => {


  const [topUsers, setTopUsers] = useState(BottomArtists);
  useEffect(() => {
    if(props.type === "Artists") {
      setTopUsers(BottomArtists);
    } else {
      setTopUsers(BottomCollectors);
    }
  }, [props.type]);


  return (
    <div className={styles.leadersSection}>
          {topUsers.map((x, index) => (
            <div className={styles.leaderboardRow}>
                <div className={styles.ranking}>{x.ranking}</div>
                <div className={styles.leaderboardavatar}>
                  <img src={x.avatar} />
                </div>
                <div>
                  <div className={styles.displayName}>{x.displayName}</div>
                  <h4 className={styles.displayUserName}>
                    {x.displayUserName}
                  </h4>
                </div>
              <p className={styles.amount}>{x.amountSpent}</p>
            </div>
          ))}
    </div>
  );
};

export default BottomLeaderboard;
