import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./UploadDetails.module.sass";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Modal from "../../components/Modal";
import Image from "../../components/Image";
import Error from "../../components/Error";

function Upload() {

  const Moralis = require('moralis'); 
  Moralis.initialize("7Ku6X8CPeLsTB1hNuxKbkK3zsNXRW9GrRid3wCnD"); 

  const user =  Moralis.User.current();

  const profileAvatar =  user.get("profile_picture");
  const profileUsername = user.get("username");

  const [visibleModal, setVisibleModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [ isAvatar, setAvatar] = useState(false);


  const [fixedPrice, setFixedPrice] = useState(true);
  const [timedAuction, setTimedAuction] = useState(false);

  const [NFTTitleData, setNFTTitleData] = useState("");
  const [NumberOfCopies, setNumberOfCopies] = useState(1);
  const [price, setPrice] = useState(1);
  const [NFTRoyaltyPercentage, setNFTRoyaltyPercentage] = useState(1);


  const NFTName = document.getElementById("NFTTitle");
  const amountOfCopies = document.getElementById("#copies");
  const NFTMinimumBidVal = document.getElementById("minimumbidval");
  const NFTFixedPriceVal = document.getElementById("fixedpriceval");
  
    const handleToggle = () => {
        setFixedPrice(true);
        setTimedAuction(false);
    };

    const handleToggle1 = () => {
      setTimedAuction(true);
      setFixedPrice(false);
  };

  async function setPreview(){


    const createNFTItemFile = document.getElementById("createNFTFile");

    if(createNFTItemFile.files.length){
      
      const user = await Moralis.User.current();

        const name = "nftFile";
        const file = createNFTItemFile.files[0];
        
        const NFTFile = new Moralis.File(name, file);
        
        await user.set("nftPreview", NFTFile);

        await user.save();

        const NFTSample = await user.get("nftPreview");

        const check = NFTSample.url();

        console.log(check);

        const NFTPreview = document.getElementById("imgpreview");

        NFTPreview.src = check;
    }; 
  };
  

    

      




useEffect(() => {

    if(user){
      const avatarStatus = user.get("profilePictureChecker");
      setAvatar(avatarStatus);
    } else {
      setAvatar(false);
    }
  
    if(fixedPrice === true){   
      if(price.length > 0){
        NFTFixedPriceVal.innerHTML = price;
      } else if(price.length === 0){
        NFTFixedPriceVal.innerText = 0;
      }};
      if(fixedPrice !== true){
      if(price.length > 0){
        NFTMinimumBidVal.innerHTML = price;
      } else if(price.length === 0){
        NFTMinimumBidVal.innerText = 0;
      }};
      if(NFTTitleData.length > 0){
        NFTName.innerHTML = NFTTitleData;
      };
      if(NFTRoyaltyPercentage > 10){
        setErrorMessage("Please select a number under 10");
        return; 
      };
      if(NumberOfCopies > 10){
        setErrorMessage("Please select a number under 10");
        return; 
      } else if(NumberOfCopies.length > 0){
        amountOfCopies.innerHTML = NumberOfCopies;
      };
  }, [NumberOfCopies, NFTTitleData, price, NFTRoyaltyPercentage]);
     


  const createNFT = async () => {

    const createNFTItemFile = document.getElementById("createNFTFile");
    const NFTName = document.getElementById("itemName");
    const NFTDescription = document.getElementById("itemDescription");
    const royaltyPercentage = document.getElementById("royaltyPercentage");
    const amountOfCopies = document.getElementById("copies#");
    const NFTMinimumBid = document.getElementById("minbid");
    const NFTFixedPrice = document.getElementById("buyNowAmount");


      if (createNFTItemFile.files.length === 0){
        setVisibleModal(true);
        setErrorMessage("Please upload a file!")
        return;
      } else if (NFTName.value.length === 0){
        setVisibleModal(true);
        setErrorMessage("Please enter a name!");
        return;
      } else if (royaltyPercentage.value.length === 0){
        setVisibleModal(true);
        setErrorMessage("Please specify a royalty percentage!");
        return;
      } else if (amountOfCopies.value.length === 0){
        setVisibleModal(true);
        setErrorMessage("Please specify how many items will be minted!");
        return;
      } else if (fixedPrice === true){
          if(NFTFixedPrice.value.length === 0){
            setVisibleModal(true);
            setErrorMessage("Please specify the nft price!");
          return;
          };
      } else if (fixedPrice !== true){
        if(NFTMinimumBid.value.length === 0){
          setVisibleModal(true);
          setErrorMessage("Please specify the minimum bid!");
          return;
          };
      };

      const NFTPreview = await user.get("nftPreview");

      await NFTPreview.saveIPFS();

      const nftFilePath = NFTPreview.ipfs();
      const nftFileHash = NFTPreview.hash();

      const metadata = {
          name: NFTName.value,
          description: NFTDescription.value,
          royaltyPercent: NFTRoyaltyPercentage,
          copiesAmount: NumberOfCopies,
          price: price,
          buyNowChecker: fixedPrice,
          nftFilePath: nftFilePath,
          nftFileHash: nftFileHash
      };

      const nftMetadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
      await nftMetadataFile.saveIPFS();

      const nftMetadataFilePath = nftMetadataFile.ipfs();
      const nftMetadataFileHash = nftMetadataFile.hash();

      const NFT = Moralis.Object.extend("NFT");

      const nft = new NFT();
      nft.set('name', NFTName.value);
      nft.set('description', NFTDescription.value);
      nft.set('royaltyPercent', NFTRoyaltyPercentage);
      nft.set('copiesAmount', NumberOfCopies);
      nft.set('price', price);
      nft.set('buyNowChecker', fixedPrice);
      nft.set('nftFilePath', nftFilePath);
      nft.set('nftFileHash', nftFileHash);
      nft.set('MetadataFilePath', nftMetadataFilePath);
      nft.set('MetadataFileHash', nftMetadataFileHash);

      await nft.save();
    };



  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.pagetitle)}>
                Create NFTs
              </div>
            </div>
            <form className={styles.form} action="">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.pagecategory}>Upload file</div>
                  <div className={styles.note}>
                    Drag or choose your file to upload
                  </div>
                  <div className={styles.file}>
                    <input className={styles.load} type="file" id="createNFTFile" onChange={setPreview}/>
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                      PNG, GIF, WEBP, MP4 or MP3. Max 100Mb.
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.pagecategory}>NFT Details</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="NFT name"
                      name="Item"
                      type="text"
                      placeholder="Enter NFT title "  
                      id="itemName"  
                      onChange={e => setNFTTitleData(e.target.value)}
                    />
                    <TextInput
                      className={styles.field}
                      label="Description"
                      name="Description"
                      type="text"
                      placeholder="Enter NFT description (optional) "  
                      id="itemDescription"
                      
                    />
                    <TextInput
                      className={styles.field}
                      label="Copies (1-10)"
                      name="amount"
                      type="number"
                      placeholder="# of copies "
                      id="copies#"
                      min="1"
                      max="10"
                      step="1"
                      pattern="[0-9]{10}"
                      onChange={e => setNumberOfCopies(e.target.value)}
                    />
                    <div className={styles.row}>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pagefoot}>
                <button
                  className={cn("button", styles.button)}
                  onClick={createNFT}
                  // type="button" hide after form customization
                  type="button"
                >
                  <span>Create item</span>
                  <Icon name="arrow-next" size="10" />
                </button>
              </div>
            </form>
          </div>
            <div className={styles.previewcontainer}>
            <div className={cn(styles.wrap)}>
                  <div className={styles.inner}>
                    <div className={styles.info}>Preview</div>
                    <div className={cn(styles.card)}>
                    <div className={styles.preview}>
                      <img src="" alt="Card" id="imgpreview"/>
                    </div>
                    <div className={styles.bodyContent}>
                      <div className={styles.body}>
                        <div className={styles.line}>
                          <div className={styles.title} id="NFTTitle">Sample Name</div>
                          <div className={styles.price} >1 of <span id="#copies">1</span></div>
                        </div>
                        <div className={styles.line}>
                          <div className={styles.users}>
                              <div className={styles.creator}>
                                <div className={styles.avatar} >
                                  {isAvatar ? (
                                    <img src={profileAvatar.url()} alt="Avatar" id="userAvatar"/>
                                  ) : (
                                    <img src={"https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo.png?alt=media&token=be8595a7-f66f-452e-8adc-0628bf912c1a"} alt="Avatar" id="userAvatar"/>
                                  )}
                                </div>
                                <span className={styles.username}>
                                @<span id="profileUsername">{profileUsername}</span>
                                </span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.foot}>
                        {fixedPrice ? (
                          <div className={styles.biddingInfo}>
                                <div className={styles.currentBidHeader}>
                                  Buy Now
                                </div>
                                <div className={styles.currentBid}>
                                  <span id="fixedpriceval"></span>Eth ($<span className={styles.currentBidConversion} id="priceConversion">{price*3000}</span><span>)</span>
                                </div>
                          </div> 
                        ) : (
                          <div className={styles.biddingInfo}>
                                <div className={styles.currentBidHeader}>
                                  Current Bid
                                </div>
                                <div className={styles.auctionTimeHeader}>
                                  Ends In
                                </div>
                                <div className={styles.currentBid}>
                                <span id="minimumbidval"></span>Eth ($<span className={styles.currentBidConversion} id="priceConversion1">{price*3000}</span><span>)</span>
                                </div>
                                <div className={styles.auctionTime}>
                                  24H 0M 0S
                                </div>
                          </div> 
                        )} 
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <Error 
          errorMessage={errorMessage}
        />
      </Modal>
    </>
  );
};

export default Upload;
