import React, { useEffect, useState, useRef } from "react";
import styles from "./Profile.module.sass";
import UserContent from "./UserContent";
import Stats from "./Stats";
import cn from "classnames";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";
const Profile = () => {
  const [sort, setSort] = useState("viewAll");

  function selectSort(type) {
    if (type === sort) {
      setSort("all");
    } else {
      setSort(type);
    }
  }
  return (
    <>
      <Header />
    <div className={styles.profilePage}>
      <div className={styles.LeftRightContentOut}>
        <div className={styles.banner_profilePic}>
          <div className={styles.profilePic}></div>
        </div>
        <div className={styles.LeftRightContentIn}>
          <div className={styles.LeftContent}>
            <div className={styles.userInfoContainer}>
              <div className={styles.rankAddy}>
                <div className={styles.rank}><h4>#10702</h4></div>
                <div className={styles.waletAddy}><h4>0x4666...6B59</h4></div>
              </div>
              <div>
                <div className={styles.displayedName}>Jones Liddy</div>
                <div className={styles.userName}>@Joneslitty77</div>
              </div>
              <div>
              <div className={styles.followsContainer}>
                <div className={styles.follows2}>
                  <div className={styles.followsNum}>150</div>
                  <div className={styles.follows}>Following</div>
                </div>
                <div>
                  <div className={styles.followsNum}>200</div>
                  <div className={styles.follows}>Followers</div>
                </div>
                <div className={styles.totalLikesDiv}>
                  <div className={styles.followsNum}>43k</div>
                  <div className={styles.follows}>Total Likes</div>
                </div>
                </div>
                <div className={styles.followedBy}>
                  <div className={styles.followedByList}>
                    <div className={styles.followedByPic}></div>
                    <div className={styles.followedByPic}></div>
                    <div className={styles.followedByPic}></div>
                    <div className={styles.followedByPic}></div>
                    <div className={styles.followedByPic}></div>
                    <div className={styles.followedByPic}></div>
                  </div>
                  <div className={styles.followedByHeader}>Followed by</div>
                </div>
              </div>
              <div className={cn("button", styles.button)} id={styles.followBtn}><h1>Follow</h1></div>
            </div>
            <div className={styles.bioContainer}>
              <div className={styles.bioWebHeader}>Bio</div>
              <div className={styles.bioWebLink}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
                molestie a iaculis at erat pellentesque adipiscing.
              </div>
            </div>
            <div className={styles.webContainer}>
              <div className={styles.bioWebHeader}>Website</div>
              <div className={styles.bioWebLink} id={styles.bioWebLink}>
                https://designercize.com/
              </div>
            </div>
            <div className={styles.statsSuggestionsContainer}>
              <Stats />
            </div>
          </div>
          <div className={styles.RightContent}>
            <UserContent />
          </div>
        </div>
      </div>
    </div>
    <FooterHero />
      <Footer />
    </>
  );
};
export default Profile;
