import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ArtistCard.module.sass";
import Icon from "../../Icon";
import cn from "classnames";
import Modal from "../../Modal/index";
import Error from "../../Error/index";


const ArtistCard = ({ className, item }) => {

  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);

  async function ErrorModal() {
    setErrorMessage("This feature will be avaliable in the MVP!");
    setVisibleErrorModal(true);
  }

  return (
    <>
      <Modal visible={visibleErrorModal} onClose={() => setVisibleErrorModal(false)}>
          <Error
            errorMessage={errorMessage}
          />
        </Modal>
      <Link className={styles.artistCardContainer} to="/marketplace">
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
                <h6>{x.bio}</h6>
                <button className={cn("button", styles.button)} onClick={ErrorModal}>Follow</button>
                <div className={styles.followers}>Followers</div>
                <div className={styles.followerCount}>{x.followerCount}</div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArtistCard;
