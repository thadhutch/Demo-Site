import React from "react";
import Slider from "react-slick";
import styles from "./Team.module.sass";
import Icon from "../../../components/Icon";


const items = [
    {
        image: "https://images.pexels.com/photos/3024625/pexels-photo-3024625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Thad",
        iconLink: "NFT Name",
        position: "Founder",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/jakepic.jpeg?alt=media&token=d9fc60b1-f4dd-4bfc-bc85-fd9a7f5a4ee3",
        name: "Jake",
        iconLink: "NFT Name",
        position: "Marketing",
    },
    {
        image: "https://images.pexels.com/photos/3024625/pexels-photo-3024625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Owen",
        iconLink: "NFT Name",
        position: "Coding",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/resume-pic.jpg?alt=media&token=8cfb388e-fb24-4526-8711-ce290744bed6",
        name: "Jones",
        iconLink: "NFT Name",
        position: "Web Development",
    },
];


function Team() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 500,
              settings: {
              slidesToShow: 1,
              },
            },
          ],
    }
    return (
        <div className={styles.carousel}>
            <h1 className={styles.slider_title}>Team</h1>
            <Slider {...settings}>
                {items.map((x, index) => (
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <img src={x.image} />
                            </div>
                            <ul className={styles.socialIcons}>
                                <li><a href={x.iconLink}><i id={styles.fa}></i></a></li>
                                <li><a href={x.iconLink}><i id={styles.fa}></i></a></li>
                            </ul>
                            <div className={styles.details}>
                                <h2>{x.name}</h2>
                                <h2>{x.position}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Team
