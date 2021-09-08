import React, {useEffect} from "react";
import cn from "classnames";
import styles from "./About.module.sass";
// data


const About = () => {
  let radius = 240;
  let autoRotate = true;
  let rotateSpeed = -60;
  let imgWidth = 120; 
  let imgHeight = 170;


  let bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
  let bgMusicControls = true;

  // setTimeout(init, 100);


  let obox;
  let ospin;
  let aImg;
  let aVid;
  let aEle;
  let ground;

  useEffect(() => {

    console.log(document.getElementById('spin-container'));

    // obox = document.getElementById('drag-container');
    // ospin = document.getElementById('spin-container');
    // aImg = document.getElementById('img');
    // aVid = document.getElementById('video');
    // aEle = [aImg, aVid];
  
    // ospin.style.width = imgWidth + "px";
    // ospin.style.height = imgHeight + "px";
  
  
    // ground = document.getElementById('ground');
    // ground.styles.width = radius * 3 + "px";
    // ground.styles.height = radius * 3 + "px";
    // init(100);


    // if (autoRotate) {
    //   let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    //   ospin.styles.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    // }
  
  
    // if (bgMusicURL) {
    //   document.getElementById('music-container').innerHTML += `
    // <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
    // <p>If you are reading this, it is because your browser does not support the audio element.</p>
    // </audio>
    // `;
    // }
  
  }, []);

  function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj) {

    if(tY > 180) tY = 180;
    if(tY < 0) tY = 0;

    obj.styles.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
  }

  function playSpin(yes) {
    ospin.styles.animationPlayState = (yes?'running':'paused');
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

  document.onmousewheel = function(e) {
    e = e || window.event;
    let d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };

  return (
    <div className={styles.aboutPageContainer}>
      <div className={styles.aboutPage}>
        <div id={styles.dragContainer}>
          <div id="spin-container">
            <img id={styles.img} src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img id={styles.img} src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img id={styles.img} src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img id={styles.img} src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img id={styles.img} src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <img id={styles.img} src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
              <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </a>
            <video id={styles.video} controls autoplay="autoplay" loop>
              <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <p>3D Tiktok Carousel</p>
          </div>
          <div id="ground"></div>
        </div>
      </div>

    </div>
  );
};

export default About;


