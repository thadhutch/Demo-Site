import { useMoralis } from "react-moralis";
import React, { useState, useEffect } from "react";
import styles from "../ConnectWallet.module.sass";
import cn from "classnames";


function ProfileAvatar() {

    const Moralis = require('moralis');

    const { isAuthenticated } = useMoralis();

    const [authCheck, setAuthCheck] = useState(false)

    useEffect(() => {
        if(isAuthenticated){
            setAuthCheck(true);
        } else {
            setAuthCheck(false);
        };

    }, [authCheck, isAuthenticated])

    const setProfileAvatar = async () => {

        const user = await Moralis.User.current();
    
        const userAvatarFile = document.getElementById("profileAvatar");
    
        if (userAvatarFile.files.length > 0) {
          const file = userAvatarFile.files[0];
          const name = "photo";
        
          const profilePicture = new Moralis.File(name, file);
    
          user.set("profile_picture", profilePicture);
    
          await user.save()
    
          const userAvatar = await user.get("profile_picture");
    
          const userAvatarImg = document.getElementById('imgAvatar');
    
          userAvatarImg.src = userAvatar.url();
    
        };
    
      }


    if(isAuthenticated) {
        return (
            <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src="" id="imgAvatar" alt="Profile Pic" />
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400. Gifs work too{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div>
                    <input className={cn(styles.button)} type="file" id="profileAvatar" onChange={setProfileAvatar}/>
                  </div>
                </div>
            </div>
        );
    }

    return (
        <>
        </>
    )
}

export default ProfileAvatar;