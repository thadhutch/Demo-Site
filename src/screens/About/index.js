import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import PieChart from "./pieChart.png";
import AboutHeroImg from "./SPAboutLogo_1.gif";
import AboutHeroImgNoGlow from "./logoSPLines(noGlow).gif";
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
          <div className={styles.aboutHero}>
            <img src={AboutHeroImgNoGlow} />
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
                Collectors are invited to join Foundation bv members of the
                community, Once you've received an invite you'll need to set up
                a MetaMask wallet with ETH before vou can create an artist
                profile and mint an NFT-which means uploading your JPG, PNG, or
                video file to IPFS, a decentrilized peer-tp-peer storage
                network. It will then be an NFT you can price in ETH and put up
                for auction on Foundation. Creators receive 85% of the final
                sale price. if the piece is resold on Foundation (or Opensea and
                Rarible), a 10% royalty goes back to the wallet that originally
                minted the NFT-in perpetuity
              </div>
            </div>
            <div className={styles.creatorsCollectorsCards}>
              <h1>For Collectors</h1>
              <div className={styles.creatorsCollectorsDiv}>
                Collectors are invited to join Foundation bv members of the
                community, Once you've received an invite you'll need to set up
                a MetaMask wallet with ETH before vou can create an artist
                profile and mint an NFT-which means uploading your JPG, PNG, or
                video file to IPFS, a decentrilized peer-tp-peer storage
                network. It will then be an NFT you can price in ETH and put up
                for auction on Foundation. Creators receive 85% of the final
                sale price. if the piece is resold on Foundation (or Opensea and
                Rarible), a 10% royalty goes back to the wallet that originally
                minted the NFT-in perpetuity
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
                Foundation is a platform that aims to build a new creative
                economy-a world where creators can use the Ethereum blockchain
                to value their work in entirely new ways.
              </div>
            </div>
            <div className={styles.earnGovVote}>
              <div className={styles.Icon}>
                <img src={GovIcon} />
              </div>
              <h1>Governace</h1>
              <div className={styles.earnGovVoteDiv}>
                Foundation is a platform that aims to build a new creative
                economy-a world where creators can use the Ethereum blockchain
                to value their work in entirely new ways.
              </div>
            </div>
            <div className={styles.earnGovVote}>
              <div className={styles.Icon}>
                <img src={VoteIcon} />
              </div>
              <h1>Vote</h1>
              <div className={styles.earnGovVoteDiv}>
                Foundation is a platform that aims to build a new creative
                economy-a world where creators can use the Ethereum blockchain
                to value their work in entirely new ways.
              </div>
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
            <div className={styles.distributionWords}>
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
            </div>
          </div>
        </div>
      </div>
      <FooterHero />
      <Footer />
    </div>
  );
};
export default About;
