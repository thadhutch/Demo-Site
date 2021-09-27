import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Leaderboards.module.sass";
import Icon from "../../../../components/Icon";

// data
import { topCollector } from "../../../../mocks/leaderBoard"; 
import { topArtists } from "../../../../mocks/leaderBoard"; 


const TopLeader = (props) => {

  
  const [topUsers, setTopUsers] = useState(topArtists);
  useEffect(() => {
    if(props.type === "Artists") {
      setTopUsers(topArtists);
    } else {
      setTopUsers(topCollector);
    }
  }, [props.type]);


  return (
    <div className={styles.topLeaderboardContent}>
      <div>
        <div className={styles.head}>
          <div
            className={styles.rating}
            style={{ backgroundColor: topUsers.color }}
          >
            <div className={styles.icon}>
              <img src={topUsers.sign} alt="Rating" />
            </div>
            <div className={styles.number}>#{topUsers.number}</div>
          </div>
          <div className={styles.control}>
            <Link className={styles.button} to={topUsers.url}>
              <Icon name="user" size="24" />
            </Link>
          </div>
        </div>
        <div className={styles.bodyAndNFT}>
          <div className={styles.body}>
            <div className={styles.avatar}>
              <img src={topUsers.avatar} alt="Avatar" />
              <div className={styles.reward}>
                <img src={topUsers.reward} alt="Reward" />
              </div>
            </div>
            <div>
              <div className={styles.name}>{topUsers.name}</div>
              <div
                className={styles.price}
                dangerouslySetInnerHTML={{ __html: topUsers.price }}
              />
            </div>
          </div>
          <div className={styles.favoritesContainer}>
              <div className={styles.favorites}>
              {topUsers.favoritesImg.map((x, index) => (
                <ul>
                  <li>
                    <img src={x} className={styles.favoriteimg}/>
                  </li>
                </ul>
              ))}
              </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default TopLeader;
