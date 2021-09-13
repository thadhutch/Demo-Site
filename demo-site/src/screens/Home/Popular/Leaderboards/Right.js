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

const Right = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={styles.leftSection}>
      <div className={styles.bottomLeaderboard}>
        {goodCollectors.map((x, index) => (
          <div className={styles.leaderboard1}>
            <div className={styles.leaderboard1Left}>
              <div className={styles.ranking}>{x.ranking}</div>
              <div className={styles.leaderboardavatar}>
                <img src={x.avatar} />
              </div>
              <div>
                <div className={styles.displayName}>{x.displayName}</div>
                <h4 className={styles.displayUserName}>{x.displayUserName}</h4>
              </div>
            </div>
            <p className={styles.amount}>{x.amountSpent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
