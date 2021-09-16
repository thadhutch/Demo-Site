import React, { useEffect, useState, useRef  } from "react";
import styles from "./FooterHero.module.sass";
import cn from "classnames";
import Image from "../Image";
import Modal from "../Modal/index";
import Error from "../Error/index";

const FooterHero = () => {

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
        <div className={cn("section-bg", styles.footerHeroContainer)}>
          <div className={styles.footerHeroLayout}>
            <h1>SPACEPATH</h1>
            <div className={styles.buttonHeader}>
            <h4>Want to be a verified creator?</h4>
              <button className={cn("button", styles.button)} onClick={ErrorModal}>Apply Now</button>
            </div>
          </div>
          <div className={styles.FCContainer}>
            <Image 
              src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/SP%20Black.png?alt=media&token=48e65bfd-084b-43b2-a58a-23491cc66f79"
              srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/SP%20WHITE.png?alt=media&token=a25f42ec-589f-4875-8455-423fde5733bf"
              alt="SpacePath footer Logo"
            />
          </div>
        </div>
    </>
  );
};

export default FooterHero;
