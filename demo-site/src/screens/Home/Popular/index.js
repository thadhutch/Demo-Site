import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Popular.module.sass";
import Add from "./Add";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import DropdownEmpty from "../../../components/DropdownEmpty";

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
    displayName: "Taylor",
    avatar: "/images/content/avatar-1.jpg",
    url: "",
    amountSpent: "$15,654",
    ranking: "2",
  },
  {
    displayName: "Mike",
    avatar: "/images/content/avatar-2.jpg",
    url: "",
    amountSpent: "$14,621",
    ranking: "3",
  },
  {
    displayName: "Bobby",
    avatar: "/images/content/avatar-3.jpg",
    url: "",
    amountSpent: "$11,351",
    ranking: "4",
  },
  {
    displayName: "Tripp",
    avatar: "/images/content/avatar-4.jpg",
    url: "",
    amountSpent: "$9,824",
    ranking: "5",
  },
  {
    displayName: "James",
    avatar: "/images/content/avatar-5.jpg",
    url: "",
    amountSpent: "$9,578",
    ranking: "6",
  },
  {
    displayName: "Timothy",
    avatar: "/images/content/avatar-6.jpg",
    url: "",
    amountSpent: "$8,411",
    ranking: "7",
  },
  {
    displayName: "Adam",
    avatar: "/images/content/avatar-7.jpg",
    url: "",
    amountSpent: "$7,660",
    ranking: "8",
  },
  {
    displayName: "Samantha",
    avatar: "/images/content/avatar-8.jpg",
    url: "",
    amountSpent: "$7,500",
    ranking: "9",
  },
  {
    displayName: "Brittany",
    avatar: "/images/content/avatar-9.jpg",
    url: "",
    amountSpent: "$5,212",
    ranking: "10",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const dateOptions = ["7 Days", "30 Days", "All Time"];
const directionOptions = ["Artists", "Collectors"];

const Popular = () => {
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

  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.stage}>Leaderboard</div>
            <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.label}></div>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            <div className={styles.col1}>
              {topCollector.map((x, index) => (
                <div className={styles.slide} key={index}>
                  <div className={styles.item}>
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
                    <div className={styles.body}>
                      <div className={styles.avatar}>
                        <img src={x.avatar} alt="Avatar" />
                        <div className={styles.reward}>
                          <img src={x.reward} alt="Reward" />
                        </div>
                      </div>
                      <div className={styles.name}>{x.name}</div>
                      <div
                        className={styles.price}
                        dangerouslySetInnerHTML={{ __html: x.price }}
                      />
                    </div>
                    {x.gallery.map((x, index) => (
                      <div className={styles.favorites}>
                          <img src={x} alt="Favorite Items"/>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.col2}>
                <div className={styles.list}>
                  {goodCollectors.map((x,index) => (
                    <div className={styles.leaderboard}>
                      <div className={styles.ranking}>
                        {x.ranking}
                      </div>
                      <div className={styles.leaderboardavatar}>
                        <img src={x.avatar}/>
                      </div>
                      <div className={styles.displayName}>
                        {x.displayName}
                      </div>
                      <div className={styles.amount}>
                        {x.amountSpent}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
