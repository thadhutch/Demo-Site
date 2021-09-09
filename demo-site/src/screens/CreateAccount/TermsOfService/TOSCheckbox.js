import Checkbox from "../../../components/Checkbox/index";
import styles from "../CreateAccount.module.sass";
import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";


function TOSCheckbox () {
    const [conditions, setConditions] = useState(false);

    const Moralis = require('moralis');


    async function saveUser(){   
          
        const user = await Moralis.User.current();
        
        await user.save();
      };

        if (conditions) {
            return (
                <>
                    <div className={styles.variants}>
                        <Checkbox
                        className={styles.checkbox}
                        value={conditions}
                        onChange={() => setConditions(!conditions)}
                        content="I agree to SpacePaths Terms of Service and Privacy Policy"
                        />
                    </div>
                    <div className={styles.btns}>
                    <Link to='/'>
                        <button className={cn("button-stroke", styles.button)} id={styles.cancelbutton}>
                        Cancel
                        </button>
                    </Link>
                    <Link to='/'>
                        <button className={cn("button", styles.button)} onClick={saveUser}>
                            Create Profile
                        </button>
                    </Link>
                    </div>
                </>
            );
        }

        return (
            <>
                <div className={styles.variants}>
                    <Checkbox
                    className={styles.checkbox}
                    value={conditions}
                    onChange={() => setConditions(!conditions)}
                    content="I agree to SpacePaths Terms of Service and Privacy Policy"
                    />
                </div>
                <div className={styles.btns}>
                <Link to='/'>
                    <button className={cn("button-stroke", styles.button)} id={styles.cancelbutton}>
                    Cancel
                    </button>
                </Link>
                </div>
            </>
        );
}

export default TOSCheckbox;