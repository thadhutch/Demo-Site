import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";

const Card = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Link className={styles.link} to={item.url}>
      <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        </div>
        <div className={styles.bodyContent}>
          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.price}>{item.counter}</div>
            </div>
            <div className={styles.line}>
              <div className={styles.users}>
                {item.users.map((x, index) => (
                  <div className={styles.creator}>
                    <div className={styles.avatar} key={index}>
                      <img src={x.avatar} alt="Avatar" />
                    </div>
                    <span className={styles.username}>
                    @{x.username}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.biddingInfo}>
                  <div className={styles.currentBidHeader}>
                    Current Bid
                  </div>
                  <div className={styles.auctionTimeHeader}>
                    Ends In
                  </div>
                  <div className={styles.currentBid}>
                    {item.currentBid}Eth   <span className={styles.currentBidConversion}>(${item.convertedPrice})</span>
                  </div>
                  <div className={styles.auctionTime}>
                    {item.auctionTime}
                  </div>
            </div>
            <div className={styles.status}>
              {/* Highest bid <span>{item.highestBid}</span> */}
            </div>
            <div
              className={styles.bid}
              dangerouslySetInnerHTML={{ __html: item.bid }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
