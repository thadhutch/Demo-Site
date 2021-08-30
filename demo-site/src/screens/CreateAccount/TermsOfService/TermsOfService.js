import TOSCheckbox from "./TOSCheckboxW/Buttons/Buttons/TOSCheckbox";
import styles from "../ConnectWallet.module.sass";
import { useMoralis } from "react-moralis";
import cn from "classnames";


function TermsOfService() {
    const { isAuthenticated } = useMoralis();

    if (isAuthenticated) {
        return(
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>Terms of service</div>
              <div className={styles.text}>
                Please take a few minutes to read and understand{" "}
                <span>SpacePaths <a href="/#">Terms of Service</a> {" "} and {" "} <a href="/#">Privacy Policy</a></span>. To continue, you’ll need
                to accept the terms of services by checking the box.
              </div>
              <TOSCheckbox />
            </div>
       
        );
    };

    return (
        <>

        </>
    );
}

export default TermsOfService;
