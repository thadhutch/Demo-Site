import React, { useState, useEffect } from "react";
import "./animation.css";

const items = [
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/cevenova3.jpeg?alt=media&token=3366586e-fc37-4d6f-a9cc-43feabbbf26f",
        NFTname: "NFT",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/homeCard2.jpeg?alt=media&token=cf84406a-292e-4fa0-a602-271fd6729312",
        NFTname: "NFT",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/cevenova1.jpeg?alt=media&token=c2a6941b-c78d-4a19-8bab-ceb826f8230d",
        NFTname: "NFT",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/homeCard3.gif?alt=media&token=5398c957-3da4-41a1-976b-545a61d36324",
        NFTname: "NFT",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/cevenova1.jpeg?alt=media&token=c2a6941b-c78d-4a19-8bab-ceb826f8230d",
        NFTname: "NFT",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/card2.gif?alt=media&token=52936dc1-3c09-48c7-8f1d-6a14fe706b6c",
        NFTname: "NFT",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/card2.gif?alt=media&token=52936dc1-3c09-48c7-8f1d-6a14fe706b6c",
        NFTname: "NFT",
    },
];

const Carousel = () => {
    let radius = 250;
    let radius2 = 150;
    let autoRotate = true;
    let autoRotateX = false;
    let rotateSpeed = -60;
    let rotateSpeedX = -20;
    let imgWidth = 150;
    let imgHeight = 225;
    let imgWidth2 = 50;
    let imgHeight2 = 125;
    let screenSize;

    let obox;
    let ospin;
    let aImg;
    let aVid;
    let aEle;
    let ground;
    useEffect(() => {
        screenSize = window.screen.width;
        obox = document.getElementById('drag-container');
        ospin = document.getElementById('spin-container');
        aImg = document.getElementsByClassName('aboutImg');
        aVid = document.getElementsByClassName('aboutVideo');
        ground = document.getElementById('ground');
        aEle = [...aImg, ...aVid];
        setTimeout(init, 1000);
        
        if (screenSize <= 525) {
            ground.style.width = radius2 * 3 + "px";
            ground.style.height = radius2 * 3 + "px";
            ospin.style.width = imgWidth2 + "px";
            ospin.style.height = imgHeight2 + "px";
          } 
        if (screenSize >= 625){
            ground.style.width = radius * 3 + "px";
            ground.style.height = radius * 3 + "px";
            ospin.style.width = imgWidth + "px";
            ospin.style.height = imgHeight + "px";
        }

        // if (autoRotateX) {
        //   let animationNameX = (rotateSpeedX > 0 ? 'Xspin' : 'XspinRevert');
        //   ospin.style.animation = `${animationNameX} ${Math.abs(rotateSpeedX)}s infinite linear`;
        // }


        if (autoRotate) {
            let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
            ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }
    }, []);
    
    // function groundRadius() {
    //     return screenSize ?  ground.style.width = radius2 * 3 + "px"
    //     : screenSize ?  ground.style.width = radius * 3 + "px"
    //     : ground.style.width = radius * 3 + "px"
    // }
    function init(delayTime) {
        for (let i = 0; i < aEle.length; i++) {
            aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
            aEle[i].style.transition = "transform 1s";
            aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
        }
    }

    function applyTranform(obj) {

        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;

        obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
    }

    function playSpin(yes) {
        ospin.style.animationPlayState = (yes ? 'running' : 'paused');
    }

    let sX, sY, nX, nY, desX = 0,
        desY = 0,
        tX = 0,
        tY = 10;
    document.onpointerdown = function (e) {
        clearInterval(obox.timer);
        e = e || window.event;
        let sX = e.clientX,
            sY = e.clientY;

        this.onpointermove = function (e) {
            e = e || window.event;
            let nX = e.clientX,
                nY = e.clientY;
            desX = nX - sX;
            desY = nY - sY;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTranform(obox);
            sX = nX;
            sY = nY;
        };

        this.onpointerup = function (e) {
            obox.timer = setInterval(function () {
                desX *= 0.95;
                desY *= 0.95;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(obox);
                playSpin(false);
                if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                    clearInterval(obox.timer);
                    playSpin(true);
                }
            }, 17);
            this.onpointermove = this.onpointerup = null;
        };
        return false;
    };
    return (
        <div id="carousel-container">
            <div className="dragContainer" id="drag-container">
                <div className="spinContainer" id="spin-container">
                    {items.map((x, index) => (
                        <div id="aboutImg" className="aboutImg">
                            <img src={x.image}></img>
                            <h2>{x.NFTname}</h2>
                        </div>
                    ))}
                    <p>Cevenova</p>
                </div>
                <div className="ground" id="ground"></div>
            </div>
        </div>
    );
};

export default Carousel;
