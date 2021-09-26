import styles from './PrivacyPolicy.module.sass'
import cn from "classnames";
import Image from '../../components/Image';



const PrivacyPolicy = () => {


        return (
            <>
                <div className={cn("section-pt80", styles.section)}>
                    <div className={cn("container", styles.container)}>
                        <div className={styles.head}>
                            <Image 
                                src="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-dark.png?alt=media&token=0dc78010-319d-426b-9dc0-c17db0479ec4"
                                srcDark="https://firebasestorage.googleapis.com/v0/b/spacepath-demo.appspot.com/o/logo-light.png?alt=media&token=af5f3049-b42b-4094-956d-f8377f8986bf"
                                alt="SpacePath Logo"
                            />
                            <div className={cn("h2", styles.stage)}>Privacy & Cookies Policy</div>
                            <div className={styles.note}>Updated June 8th, 2021</div>
                        </div>
                        <div className={styles.body}>
                        <div className={styles.content}>
                            We SpacePath (spacepath.net), are committed to protecting any data that we collect concerning you. By using our services, you agree to the use of the data that we collect in accordance with this Privacy Policy.

                            We are committed to protecting your privacy.

                            We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy is to enable you to understand which personal identifying information ("PI", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.</div>
                        <div className={cn("h4", styles.subtitle)}>Information Collected</div>
                        <div className={styles.content}>We may collect any or all of the information via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred.</div>
                        <div className={cn("h4", styles.subtitle)}>Information Use</div>
                        <div className={styles.content}>This information is used for billing and to provide service, information and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details.

                            We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications.</div>
                        <div className={cn("h4", styles.subtitle)}>Cookies</div>
                        <div className={styles.content}>Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the SpacePath website. </div>
                        </div>
                    </div>
                </div>
            </>

        );
};

export default PrivacyPolicy;