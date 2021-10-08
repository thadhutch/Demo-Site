import React, { useEffect, useState } from "react";
import styles from "./UserContent.module.sass";
import { profileCollected } from "../../../mocks/ProfileContent/profileCollected";
import { profileCreated } from "../../../mocks/ProfileContent/profileCreated";
import { ViewAll } from "../../../mocks/ProfileContent/ViewAll";
import Card from "../../../components/Card";
import ProfileCard from "../ProfileCard";

const UserContent = () => {
  const [UserNFTs, setUserNFTs] = useState(profileCollected);
  const [sort, setSort] = useState("viewAll");

  useEffect(() => {
    if (sort === "collected") {
      setUserNFTs(profileCollected);
    } else if (sort === "created") {
      setUserNFTs(profileCreated);
    } else {
      setUserNFTs(ViewAll);
    }
  }, [sort]);

  return (
    <div className={styles.userContent}>
    <div className={styles.userContentTabsContainer}>
      <div className={styles.userContentTabs}>
        <div className={styles.tabs} id={sort === "viewAll" ? styles.tabClicked : ""} >
          <div onClick={() => setSort("viewAll")}>View All</div>
        </div>
        <div className={styles.tabs} id={sort === "collected" ? styles.tabClicked : ""} >
          <div onClick={() => setSort("collected")}>Collected</div>
        </div>
        <div className={styles.tabs} id={sort === "created" ? styles.tabClicked : ""}>
          <div onClick={() => setSort("created")}>Created</div>
        </div>
      </div>
      <div className={styles.followTabsContainer}>
        <div className={styles.followTabs1} id={sort === "followers" ? styles.tabClicked : ""} >
          <div onClick={() => setSort("followers")}>Followers</div>
        </div>
        <div className={styles.followTabs2} id={sort === "following" ? styles.tabClicked2 : ""} >
          <div onClick={() => setSort("following")}>Following</div>
        </div>
      </div>
      </div>
      <div className={styles.userContentCardsContainer}>
        {UserNFTs.map((x, index) => (
          <div id={styles.userContentCards}>
            <div id={styles.profileCardsT}>
            <Card key={index} item={x} />
            </div>
            <div id={styles.profileCardsM}>
            <ProfileCard key={index} item={x}/>
          </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};
export default UserContent;
