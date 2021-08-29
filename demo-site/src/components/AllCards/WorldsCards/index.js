import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./WorldsCards.module.sass";
import Icon from "../../Icon";

const WorldsCards = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Link className={styles.worldsCardsContainer}>
    <div className={styles.worldsCardsImg}>
      <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
    </div>
    <div className={styles.worldsCardsHeaders}>
          {item.users.map((x, index) => (
            <div>
              <h1>{item.world}</h1>
            </div>
          ))}
    </div>
</Link>
  );
};

export default WorldsCards;
