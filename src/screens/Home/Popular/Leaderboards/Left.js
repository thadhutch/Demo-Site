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
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/KristapsDokansprofilepic.jpeg?alt=media&token=649fde2b-30d2-49fd-802a-d2e02f4b13be",
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
    displayName: "Samantha",
    displayUserName: "@samantha27",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a",
    url: "",
    amountSpent: "$14,621",
    ranking: "2",
  },
  {
    displayName: "Timmy",
    displayUserName: "@timmytimmy",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a",
    url: "",
    amountSpent: "$15,654",
    ranking: "3",
  },
  {
    displayName: "Ashley",
    displayUserName: "@ashley",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a",
    url: "",
    amountSpent: "$14,621",
    ranking: "4",
  },
  {
    displayName: "Trent B",
    displayUserName: "@trentb",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a",
    url: "",
    amountSpent: "$11,351",
    ranking: "5",
  },
  {
    displayName: "Rover",
    displayUserName: "@rover60",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a",
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
