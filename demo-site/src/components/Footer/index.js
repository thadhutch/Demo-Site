import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Image from "../Image";
import Theme from "../Theme";

const items = [
  {
    title: "SpacePath",
    menu: [
      {
        title: "Discover",
        url: "/search01",
      },
      {
        title: "Connect wallet",
        url: "/connect-wallet",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "Create item",
        url: "/upload-variants",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/logo-dark.png"
                srcDark="/images/logo-light.png"
                alt="Fitness Pro"
              />
            </Link>
            <div className={styles.info}>The Premier Art Gallery</div>
            <div className={styles.version}>
              <div className={styles.details}>SpacePath is the first NFT Marketplace that offers no minting or platform fees. (Write out more detailed description)</div>
            </div>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/spacepathhq/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/content/iconmonstr-instagram-15-240.png"
                  srcDark="/images/content/iconmonstr-instagram-15-240.png"
                  alt="Instagram Logo"
                />
              </a>
              <a href="https://twitter.com/SpacePathHQ" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/content/iconmonstr-twitter-5-240.png"
                  srcDark="/images/content/iconmonstr-twitter-5-240.png"
                  alt="Twitter Logo"
                />
              </a>
              <a href="https://discord.gg/GfdAgp8n" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/content/iconmonstr-discord-5-240.png"
                  srcDark="/images/content/iconmonstr-discord-5-240.png"
                  alt="Discord Logo"
                />
              </a>
              <a href="https://t.me/spacepathtelegram" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/content/iconmonstr-telegram-5-240.png"
                  srcDark="/images/content/iconmonstr-telegram-5-240.png"
                  alt="Telegram Logo"
                />
              </a>
            </div>
          </div>
          <div className={styles.footerlist}>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>  
                  <a href="/">Marketplace</a>
                </li>
                <li>
                  <a href="/">Discover</a>
                </li>
                <li>
                  <a href="/">Collectors</a>
                </li>
                <li>
                  <a href="/">Help</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
              </ul>
              <div className={styles.footertheme}>
                <span className={styles.sunicon}>
                <img src="/images/content/iconmonstr-weather-2-240.png" className={styles.sun} yalt="sun icon"/>
                </span>
                <Theme className={styles.theme}/>
                <span className={styles.moonicon}>
                <img src="/images/content/iconmonstr-weather-115-240.png" className={styles.moon} alt="moon icon"/>
                </span>
              </div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2021 SpacePath Inc. All rights reserved
          </div>
          <div className={styles.note}>
            <a href="/#">Privacy Policy</a> <a href="/#">Terms Of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
