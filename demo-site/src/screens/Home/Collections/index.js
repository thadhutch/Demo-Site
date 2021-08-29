import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "Retro Space",
    username: "cevenova",
    collectionLogo: "/images/content/cevenovaeth.jpg",
    counter: "4",
    avatar: "/images/content/cevenovaprofilepic.jpeg",
    gallery: [
      "/images/content/Dolorianphoto.jpg",
    ],
  },
  {
    title: "Vintage Mercedes",
    username: "willie",
    collectionLogo: "/images/content/MercedesVintageLogo.png",
    counter: "12",
    avatar: "/images/content/avatar-3.jpg",
    gallery: [
      "/images/content/MercedesVintageCar.jpeg",
    ],
  },
  {
    title: "Weird Whales",
    username: "halle",
    collectionLogo: "/images/content/WeirdWhalesLogo.png",
    counter: "28",
    avatar: "/images/content/avatar-4.jpg",
    gallery: [
      "/images/content/WeirdWhalesBanner.png",
    ],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Featured Collections</h3>
          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {items.map((x, index) => (
                <Link className={styles.item} to="" key={index}>
                  <div className={styles.collectioncontainer}>
                    <div className={styles.subtitle}>{x.title}</div>
                    <div className={styles.user}>
                      <div className={styles.avatar}>
                      </div>
                    </div>
                    <div className={cn("status-stroke-black", styles.counter)}>
                        <span>{x.counter}</span> items
                    </div>
                    <div className={styles.gallery}>
                        <div className={styles.preview} >
                          <img src={x.gallery} alt="Collection" />
                        </div>
                        <img className={styles.collectionLogo} src={x.collectionLogo} alt="Collection Logo"/>
                    </div>
                  </div>
                  <div className={styles.line}>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
