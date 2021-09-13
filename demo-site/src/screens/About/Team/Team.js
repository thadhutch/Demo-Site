import React from 'react';
import Slider from "react-slick";
import cn from "classnames";
import styles from "./Team.module.sass";



function Team() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div className={styles.carousel}>
            <h1 className={styles.slider_title}>Team</h1>
            <Slider {...settings}>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="https://images.pexels.com/photos/3024625/pexels-photo-3024625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <ul className={styles.socialIcons}>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                        </ul>
                        <div className={styles.details}>
                            <h2>Thad</h2>
                            <h2>Founder</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="https://images.pexels.com/photos/3024625/pexels-photo-3024625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <ul className={styles.socialIcons}>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                        </ul>
                        <div className={styles.details}>
                            <h2>Jake</h2>
                            <h2>UI Developer</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="https://images.pexels.com/photos/3024625/pexels-photo-3024625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <ul className={styles.socialIcons}>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                        </ul>
                        <div className={styles.details}>
                            <h2>Owen</h2>
                            <h2>UI Developer</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="https://images.pexels.com/photos/3024625/pexels-photo-3024625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <ul className={styles.socialIcons}>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                            <li><a href="#"><i id={styles.fa}></i></a></li>
                        </ul>
                        <div className={styles.details}>
                            <h2>Jones</h2>
                            <h2>Web Developer</h2>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Team
