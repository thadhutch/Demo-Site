import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Image from "../Image";
import Theme from "../Theme";


const Footers = () => {

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-dark.png?alt=media&token=0dc78010-319d-426b-9dc0-c17db0479ec4"
                srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-light.png?alt=media&token=af5f3049-b42b-4094-956d-f8377f8986bf"
                alt="SpacePath Logo"
              />
            </Link>
            <div className={styles.info}>The Premier Art Gallery</div>
            <div className={styles.version}>
              <div className={styles.details}> SpacePath Marketplace is an NFT marketplace designed with you in
            mind. Whether you’re an artist or creator, we’ve spent countless
            hours refining our platform to enhance the user experience from all
            angles. Read more about the project on the About page!</div>
            </div>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/spacepathhq/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-instagram-15-240%20(1).png?alt=media&token=8f3379c6-3594-43c2-b071-6fd503982b4c"
                  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-instagram-15-240.png?alt=media&token=32f17a6d-ca4c-4dba-b42d-a867e18d3432"
                  alt="Instagram Logo"
                />
              </a>
              <a href="https://twitter.com/SpacePathHQ" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-twitter-5-240%20(1).png?alt=media&token=1e11e3c1-eaa7-4e13-abaf-d1ceb7a2dd9f"
                  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-twitter-5-240.png?alt=media&token=8c40f101-85ff-412e-a365-33316b67f146"
                  alt="Twitter Logo"
                />
              </a>
              <a href="https://discord.gg/3PSVUmT7Mj" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-discord-5-240%20(1).png?alt=media&token=2ef7d262-5c6b-471e-94c8-674d55a7d572"
                  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-discord-5-240.png?alt=media&token=365448a8-8542-4bc4-87a6-ee52d2e93de3"
                  alt="Discord Logo"
                />
              </a>
              <a href="https://t.me/spacepathtelegram" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-telegram-5-240%20(1).png?alt=media&token=0dee66ae-5b05-4da9-8958-92203ef114e0"
                  srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-telegram-5-240.png?alt=media&token=1f1318fc-e242-48ef-8eb0-4dc0d8331299"
                  alt="Telegram Logo"
                />
              </a>
            </div>
          </div>
          <div className={styles.footerlist}>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>  
                  <a href="/marketplace">Marketplace</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/tos" target="_blank" rel="noopener noreferrer">TOS</a>
                </li>
                <li>
                  <a href="/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </li>
              </ul>
              <div className={styles.footertheme}>
                <span className={styles.sunicon}>
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-weather-2-240%20(2).png?alt=media&token=36c037b7-c92b-4522-a12b-a20ee5e9e830"
                    srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-weather-2-240.png?alt=media&token=54ed330f-02c9-457d-a515-34a9eaf4d0e7"
                    className={styles.sun} 
                    alt="sun icon"
                  />
                </span>
                <Theme className={styles.theme}/>
                <span className={styles.moonicon}>
                  <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/iconmonstr-weather-115-240%20(1).png?alt=media&token=9f8b72fd-5d7d-4575-8539-affe38d1072f"
                    srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/iconmonstr-weather-115-240.png?alt=media&token=122e0e08-8851-47bd-9eb7-6e58f67a88b3"
                    className={styles.moon} 
                    alt="moon icon"
                  />
                </span>
              </div> 
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2021 SpacePath Inc. All rights reserved
          </div>
          <div className={styles.note}>
            <a href="/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> <a href="/tos" target="_blank" rel="noopener noreferrer">Terms Of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
