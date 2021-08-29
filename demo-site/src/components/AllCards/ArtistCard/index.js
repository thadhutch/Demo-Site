import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ArtistCard.module.sass";
import Icon from "../../Icon";
import cn from "classnames";


const ArtistCard = ({ className, item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Link className={styles.artistCardContainer}>
      <div className={styles.artistCardImg}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
      </div>
      <div className={styles.artistUsernameAvatarContainer}>
        <div className={styles.artistUsernameAvatar}>
          {item.users.map((x, index) => (
            <div>
              <div className={styles.artistAvatar} key={index}>
                <img src={x.avatar} alt="Avatar" />
              </div>
              <div className={styles.realName}>{x.realName}</div>
              <h5>@{x.username}</h5>
              <p>{x.bio}</p>
              <button className={cn("button", styles.button)}>Follow</button>
              <div className={styles.followers}>Followers</div>
              <div className={styles.followerCount}>{x.followerCount}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
