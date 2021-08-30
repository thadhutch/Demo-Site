import styles from '../../ProfileEdit/ProfileEdit.module.sass';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';



function AccountInfo() {

        const Moralis = require('moralis');
        Moralis.initialize("5BQEzo7yhMp4zrM9RIdJ7S6leAkE5BFDtLMp3QPv"); 

        const { isAuthenticated } = useMoralis(); 

        const user = Moralis.User.current(); 


        const [username, setUsername] = useState();
        const [displayname, setDisplayname] = useState();
        const [bio, setBio] = useState();

        async function setUsernameval(usernameval){
            const user = await Moralis.User.current();

            setUsername(usernameval.target.value);

            user.set("username", usernameval.target.value);

        };

        async function setBioval(bioval){
            const user = await Moralis.User.current();

            setBio(bioval.target.value);

            user.set("bio", bioval.target.value);

        };

        async function setDisplayNameval(displaynameval){
            const user = await Moralis.User.current();

            setDisplayname(displaynameval.target.value);

            user.set("displayName", displaynameval.target.value);

        };
        
      
       
      

        if (isAuthenticated) {
            return(
                <div className={styles.col}>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.category} id={styles.AccountInfo}>Account info</div>
                            <div className={styles.fieldset}>
                                <div className={styles.subcategory}>Enter Your Username</div>
                                <input className={styles.input} type='text' required placeholder='Username' onChange={setUsernameval}/>
                                <div className={styles.subcategory}>Enter Your Display Name</div>
                                <input className={styles.input} type='text' required placeholder='Display Name' onChange={setDisplayNameval}/>
                                <div className={styles.subcategory}>Enter Your Bio</div>
                                <textarea className={styles.textarea} type='textarea' placeholder='Bio' onChange={setBioval}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <>
                </>
            );
        }
    };
export default AccountInfo;