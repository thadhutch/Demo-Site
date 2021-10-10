import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./ProfileCard.module.sass";

const ProfileCard = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Link className={styles.link} to={item.url}>
      <div className={cn(styles.cardProfile, className)}>
        <div className={styles.previewProfile}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        </div>
        <div className={styles.bodyContentProfile}>
          <div className={styles.bodyProfile}>
            <div className={styles.line}>
              <div className={styles.title}>{item.title}</div>
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
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
