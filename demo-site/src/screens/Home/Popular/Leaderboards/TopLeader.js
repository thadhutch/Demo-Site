import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Leaderboards.module.sass";
import Add from "../Add";
import Icon from "../../../../components/Icon";
import Dropdown from "../../../../components/Dropdown";
import DropdownEmpty from "../../../../components/DropdownEmpty";

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
      "images/content/KDSpringtimeBliss.jpg",
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
    ranking: "1",
  },
  {
    displayName: "Taylor",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-1.jpg",
    url: "",
    amountSpent: "$15,654",
    ranking: "2",
  },
  {
    displayName: "Mike",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-2.jpg",
    url: "",
    amountSpent: "$14,621",
    ranking: "3",
  },
  {
    displayName: "Bobby",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-3.jpg",
    url: "",
    amountSpent: "$11,351",
    ranking: "4",
  },
  {
    displayName: "Tripp",
    displayUserName: "@heythere15734",
    avatar: "/images/content/avatar-4.jpg",
    url: "",
    amountSpent: "$9,824",
    ranking: "5",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const TopLeader = () => {

  return (
    <div className={styles.topLeaderboardContent}>
    {topCollector.map((x, index) => (
      <div>
        <div className={styles.head}>
          <div
            className={styles.rating}
            style={{ backgroundColor: x.color }}
          >
            <div className={styles.icon}>
              <img src={x.sign} alt="Rating" />
            </div>
            <div className={styles.number}>#{x.number}</div>
          </div>
          <div className={styles.control}>
            <Link className={styles.button} to={x.url}>
              <Icon name="user" size="24" />
            </Link>
          </div>
        </div>
        <div className={styles.bodyAndNFT}>
          <div className={styles.body}>
            <div className={styles.avatar}>
              <img src={x.avatar} alt="Avatar" />
              <div className={styles.reward}>
                <img src={x.reward} alt="Reward" />
              </div>
            </div>
            <div>
              <div className={styles.name}>{x.name}</div>
              <div
                className={styles.price}
                dangerouslySetInnerHTML={{ __html: x.price }}
              />
            </div>
          </div>
          <div className={styles.favoritesContainer}>
            {x.gallery.map((x, index) => (
              <div className={styles.favorites}>
                <img src={x} alt="Favorite Items" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TopLeader;
