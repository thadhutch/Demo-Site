import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "PNK Collection",
    username: "cevenova",
    collectionLogo: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/pnk%20normal.png?alt=media&token=c3ebcf18-1839-4e41-8de5-b854a1305a61",
    counter: "4",
    avatar: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/161733479_1339226993118522_4040893446396386252_n.jpg?alt=media&token=c73ad287-7ec7-40c9-8486-4593ccf2fa3eg",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/pnk%20crop.png?alt=media&token=8fe17335-2f9c-49e1-9cd8-2d09fbcecd18",
    ],
  },
  {
    title: "Liam Collection",
    username: "willie",
    collectionLogo: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/liam%20normal.png?alt=media&token=855320bc-c30d-48cd-8fce-cdc821fa6015",
    counter: "12",
    avatar: "/images/content/avatar-3.jpg",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/liam%20crop.png?alt=media&token=6fec4254-e526-429d-97e8-358e132b608c",
    ],
  },
  {
    title: "Kelvin Collection",
    username: "halle",
    collectionLogo: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/kelvin%20normal.png?alt=media&token=237b16e1-802c-464a-9133-f8fc69ed224b",
    counter: "28",
    avatar: "/images/content/avatar-4.jpg",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/kelvin%20crop.png?alt=media&token=9733930f-0ae4-48a1-ae88-715dcf76f75a",
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
    slidesToShow: 4,
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1053,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Featured Collections</h3>
          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {items.map((x, index) => (
                <Link className={styles.item} to="/home" key={index}>
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
