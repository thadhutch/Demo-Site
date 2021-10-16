import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import PieChart from "./pieChart.png";
// import AboutHeroImg from "./SPAboutLogo_1.gif";


import Rec1 from "./Rectangle1.png";
import Rec2 from "./Rectangle2.png";
import Rec3 from "./Rectangle3.png";
import Rec4 from "./Rectangle4.png";
import EarnIcon from "./earnIcon.png";
import GovIcon from "./govIcon.png";
import VoteIcon from "./voteIcon.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";

const About = () => {
  return (
    <div>
          <Header />
      <div className={styles.aboutPageContainer}>
        <div className={styles.aboutHeroContainer}>
        <div className={styles.aboutHeroContainerBG}></div>
          <div className={styles.aboutHero}>
            <h1 className={styles.aboutHeroHeader}>ABOUT SPACEPATH</h1>
          </div>
        </div>
        <div className={styles.aboutCompanyContainer}>
          <div className={styles.aboutCompanyWords}>
            SpacePath Marketplace is an NFT marketplace designed with you in
            mind. Whether you’re an artist or creator, we’ve spent countless
            hours refining our platform to enhance the user experience from all
            angles. Shattering boundaries by offering zero platform fees and
            giving more power to the users are just two of the many ways we’ve
            shown our dedication to our community. We’re nothing without the
            continued support from our faithful community and we want to offer
            the best experience possible.
          </div>
          <div className={styles.companyInfo}>
            <div className={styles.aboutNums}>
              <h1>7,000+</h1>
              <h3>Community Members</h3>
            </div>
            <div className={styles.aboutNums}>
              <h1>$50,000</h1>
              <h3>Toal Creator Earnings</h3>
            </div>
            <div className={styles.aboutNums}>
              <h1>300,000+</h1>
              <h3>Artist Network Following</h3>
            </div>
          </div>
        </div>
        <div className={styles.howItWorksContainer}>
          <h1 className={styles.howItWorksHeader}>How It Works.</h1>
          <div className={styles.creatorsCollectorsContainer}>
            <div className={styles.creatorsCollectorsCards}>
              <h1>For Creators</h1>
              <div className={styles.creatorsCollectorsDiv}>
              Any creator is welcome to submit media for voting. As a creator, all you’ll need to do is connect your wallet and apply for our creator network. Any creator is eligible for our creator network, but you must be approved first to prevent spam and unwanted content. After you are approved as a creator, you can post as many images as you want each week ahead of the deadline for voting. Once voting commences, you’ll be able to see how your work is performing compared to others. Getting followers from other platforms to help vote on your work always helps! If the media you submit is top voted in a specific week, it’ll be minted for free and put up for auction. After it sells, you’ll get to keep 100% of the profits with zero transaction fees.
              </div>
            </div>
            <div className={styles.creatorsCollectorsCards}>
              <h1>For Collectors</h1>
              <div className={styles.creatorsCollectorsDiv}>
              Collectors power the SpacePath NFT Marketplace by voting through the SpacePath DAO and voting to aid content curation. As a collector on the SpacePath Marketplace, you get to decide what gets minted on the platform! After the deadline for submissions, collectors will have 48 hours to browse and vote on their favorite art. At the end of the 48 hours, the top voted art, decided on by the community, will be minted and put up for auction. Collectors will have another 48 hours to bid on the new auctions and add to their portfolios. As a collector, you’ll get rewarded in SpacePath Token for participating in voting and in other aspects of our site. Additionally, you’ll get to earn SpacePath Token just by owning an NFT!
              </div>
            </div>
          </div>
        </div>
        <div className={styles.govTokenContainer}>
          <h1>SpacePath Governace Token</h1>
          <h3>A Platform Controlled By You</h3>
          <div className={styles.earnGovVoteContainer}>
            <div className={styles.earnGovVote}>
              <div className={styles.Icon}>
                <img src={EarnIcon} />
              </div>
              <h1>Earn</h1>
              <div className={styles.earnGovVoteDiv}>
                {/* Foundation is a platform that aims to build a new creative
                economy-a world where creators can use the Ethereum blockchain
                to value their work in entirely new ways. */}
              </div>
            </div>
            <div className={styles.earnGovVote}>
              <div className={styles.Icon}>
                <img src={GovIcon} />
              </div>
              <h1>Governace</h1>
              <div className={styles.earnGovVoteDiv}>
                {/* Foundation is a platform that aims to build a new creative
                economy-a world where creators can use the Ethereum blockchain
                to value their work in entirely new ways. */}
              </div>
            </div>
            <div className={styles.earnGovVote}>
              <div className={styles.Icon}>
                <img src={VoteIcon} />
              </div>
              <h1>Vote</h1>
              {/* <div className={styles.earnGovVoteDiv}>
                Foundation is a platform that aims to build a new creative
                economy-a world where creators can use the Ethereum blockchain
                to value their work in entirely new ways.
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.distributionContainer}>
          <h1>$SP Token Distribution</h1>
          <div className={styles.distributionContent}>
            <div className={styles.pieChartContainer}>
              <div className={styles.pieChartImgContainer}>
                <img src={PieChart} />
              </div>
              <div className={styles.pieChartDiv}>
                <div className={styles.pieChartList}>
                  <img src={Rec1} />
                  <h1>Public Owenership</h1>
                </div>
                <div className={styles.pieChartList}>
                  <img src={Rec2} />
                  <h1>Dev Owenership</h1>
                </div>
                <div className={styles.pieChartList}>
                  <img src={Rec3} />
                  <h1>Weekly AirDrop Fund</h1>
                </div>
                <div className={styles.pieChartList}>
                  <img src={Rec4} />
                  <h1>Treasury Fund</h1>
                </div>
              </div>
            </div>
            {/* <div className={styles.distributionWords}>
              <div>
                <h3>Title</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div>
                <h3>Title</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <FooterHero />
      <Footer />
    </div>
  );
};
export default About;
