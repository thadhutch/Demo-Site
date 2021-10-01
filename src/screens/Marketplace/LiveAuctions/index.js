import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "../MarketplaceCardSliders/CardSliders.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import { bids } from "../../../mocks/bids";



const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
  );
  
  const LiveAuctionSlider = ({ currentSlide, slideCount, children }) => {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: (
        <SlickArrow>
          <Icon name="arrow-next" size="26" />
        </SlickArrow>
      ),
      prevArrow: (
        <SlickArrow>
          <Icon name="arrow-prev" size="26" />
        </SlickArrow>
      ),
      responsive: [
        {
          breakpoint: 1179,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1023,
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
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div>
        <div className={styles.cardSliderSection1}>
          <div className={styles.cardSliderContainer}>
            <div className={styles.SliderWrapper1}>
            <div className={styles.cardSliderTitle}>
                <h3>Live Auctions</h3>
                <h3><a href="/home">view all</a></h3>
              </div>
              <div className={styles.inner}>
                <Slider className="bid-slider"  {...settings}>
                  {bids.map((x, index) => (
                    <Card key={index} className={styles.card} item={x} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default LiveAuctionSlider;