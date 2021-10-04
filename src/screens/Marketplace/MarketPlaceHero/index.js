import React, { useState } from "react";
import cn from "classnames";
import styles from "./MarketPlaceHero.module.sass";
import Carousel from "../../../components/Carousel/Carousel";
import ModalTextTitle from "../../../components/ModalTextTitle";
import Modal from "../../../components/Modal";

const MarketPlaceHero = () => {

  const [errorMessage, setErrorMessage] = useState("Authentication has been cancelled");
  const [visibleErrorModal, setVisibleErrorModal] = useState(false);

  async function ErrorModal() {
    setErrorMessage("This feature will be avaliable in the MVP!");
    setVisibleErrorModal(true);
  }

  return (
    <>
      <Modal visible={visibleErrorModal} onClose={() => setVisibleErrorModal(false)}>
          <ModalTextTitle
            message={errorMessage}
          />
        </Modal>
      <div className={styles.marketPlaceHeroContainer}>
        <div className={styles.marketPlaceHeroHeader}>
          <h1>Top NFTs This Week</h1>
          <div className={styles.buttonContainer}>
            <button className={cn("button", styles.button)} onClick={ErrorModal}>View More</button>
          </div>
        </div>
        <div className={styles.marketPlaceHeroCards}>
          <div className={styles.picContainer}>
            <img className={styles.pic} src="https://news.artnet.com/app/news-upload/2021/08/the-ancient-of-days-nft-1-731x1024.jpeg" />
            <img className={styles.pic} src="https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-683x1024.jpg" />
            <img className={styles.pic} src="https://i.pinimg.com/736x/20/90/fd/2090fd4afdb7ad6f8e1f9b096af9bf48.jpg" />
          </div>
          <div className={styles.picContainer}>
            <img className={styles.pic} src="https://i.pinimg.com/736x/20/90/fd/2090fd4afdb7ad6f8e1f9b096af9bf48.jpg" />
            <img className={styles.pic} src="https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-683x1024.jpg" />
            <img className={styles.pic} src="https://news.artnet.com/app/news-upload/2021/08/the-ancient-of-days-nft-1-731x1024.jpeg" />
          </div>
          <div className={styles.picContainer}>
            <img className={styles.pic} src="https://news.artnet.com/app/news-upload/2021/08/the-ancient-of-days-nft-1-731x1024.jpeg" />
            <img className={styles.pic} src="https://i.pinimg.com/736x/20/90/fd/2090fd4afdb7ad6f8e1f9b096af9bf48.jpg" />
            <img className={styles.pic} src="https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-683x1024.jpg" />
          </div>
        </div> 
      </div>
    </>
  );
};

export default MarketPlaceHero;
