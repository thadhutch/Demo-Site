import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Leaderboards.module.sass";
import Add from "../Add";

const topCollector = [
  {
    name: "Kristaps Dokans",
    sign: "/images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#d4af37",
    avatar: "/images/content/KristapsDokansprofilepic.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>$20,000</span>",
    gallery: [
      "images/content/KDSpringtimeBliss.jpg",
      "/images/content/Dolorianphoto.jpg",
      "/images/content/spacejellyfish.jpeg",
    ],
  },
];

const goodCollectors = [
  {
    displayName: "Jones",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-2.jpg",
    url: "",
    amountSpent: "$14,621",
    ranking: "2",
  },
  {
    displayName: "Taylor",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-1.jpg",
    url: "",
    amountSpent: "$15,654",
    ranking: "3",
  },
  {
    displayName: "Mike",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-2.jpg",
    url: "",
    amountSpent: "$14,621",
    ranking: "4",
  },
  {
    displayName: "Bobby",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-3.jpg",
    url: "",
    amountSpent: "$11,351",
    ranking: "5",
  },
  {
    displayName: "Tripp",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-4.jpg",
    url: "",
    amountSpent: "$9,824",
    ranking: "6",
  },
];



const Left = () => {
  return (
    <div className={styles.leadersSection}>
      <div className={styles.leftSection}>
        <div className={styles.bottomLeaderboardLeft}>
          {goodCollectors.map((x, index) => (
            <div className={styles.leaderboard}>
              <div className={styles.leaderboardLeft}>
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
              </div>
              <p className={styles.amount}>{x.amountSpent}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.bottomLeaderboardRight}>
          {goodCollectors.map((x, index) => (
            <div className={styles.leaderboard}>
              <div className={styles.leaderboardRight}>
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
              </div>
              <p className={styles.amount}>{x.amountSpent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Left;
