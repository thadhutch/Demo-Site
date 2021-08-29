import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./CardSliders.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import ArtistCard from "../../../components/AllCards/ArtistCard";
import WorldsCards from "../../../components/AllCards/WorldsCards";

// data
import { bids } from "../../../mocks/bids";
import { artistCards } from "../../../mocks/artistCards";
import { worlds } from "../../../mocks/worlds";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const MarketPlaceCardSlider = ({ classSection }) => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="20" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="20"  />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1179,
        sliderSettings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        sliderSettings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        sliderSettings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
    <div className={styles.cardSliderSection1}>
      <div className={styles.cardSliderContainer}>
        <div className={styles.SliderWrapper1}>
        <h3 className={styles.cardSliderTitle}> Live Auctions</h3>
          <div className={styles.inner}>
            <Slider className="bid-slider" {...sliderSettings}>
              {bids.map((x, index) => (
               <Card key={index} className={styles.card} item={x}/>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.cardSliderSection}>
      <div className={styles.cardSliderContainer}>
        <div className={styles.SliderWrapper}>
        <h3 className={styles.cardSliderTitle}>Categories</h3>
          <div className={styles.inner}>
            <Slider className="bid-slider" {...sliderSettings}>
              {worlds.map((x, index) => (
                <WorldsCards key={index} className={styles.card} item={x} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.cardSliderSection}>
      <div className={styles.cardSliderContainer}>
        <div className={styles.SliderWrapper}>
          <h3 className={styles.cardSliderTitle}>Artists</h3>
          <div className={styles.inner}>
            <Slider className="bid-slider" {...sliderSettings}>
              {artistCards.map((x, index) => (
                <ArtistCard key={index} item={x} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarketPlaceCardSlider;
