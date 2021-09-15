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
    sign: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-trophy-3-240.png?alt=media&token=37cd6404-fb8a-46ed-8263-76f33d849b12",
    number: "1",
    url: "",
    color: "#d4af37",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/KristapsDokansprofilepic.jpeg?alt=media&token=649fde2b-30d2-49fd-802a-d2e02f4b13be",
    reward: "/images/content/reward-1.svg",
    price: "<span>$20,000</span>",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147",
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147",
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147",
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147",
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
              <div className={styles.favorites}>
                <ul>
                  <li>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147"} className={styles.favoriteimg} alt="Favorite Items" />
                  </li>
                  <li>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147"} className={styles.favoriteimg} alt="Favorite Items" />
                  </li>
                  <li>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147"} className={styles.favoriteimg} alt="Favorite Items" />
                  </li>
                  <li>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/118142294_142594964167058_2325249536339833724_n.jpg?alt=media&token=7193f021-cc86-4534-b420-2d46daa39147"} className={styles.favoriteimg} alt="Favorite Items" />
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TopLeader;
