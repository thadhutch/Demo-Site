import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, config } from 'react-spring';
import {animated} from 'react-spring'
import styles from "./HomeHeroCards.module.sass";


const slides = [
  { id: 0, url: "card1.gif?alt=media&token=aacd5a97-db04-405a-b3bf-110a508128f8"},
  { id: 1, url: "card2.gif?alt=media&token=52936dc1-3c09-48c7-8f1d-6a14fe706b6c" },
  { id: 2, url: "homeCard3.gif?alt=media&token=5398c957-3da4-41a1-976b-545a61d36324" },
  { id: 3, url: "homeCard4.gif?alt=media&token=a6c715f2-efc7-4bd0-9faf-464134f0a09f" },
]

const HomeHeroCards = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => slides[index].id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      className={styles.bg}
      style={{ ...props, backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/spacepath-94248.appspot.com/o/${slides[index].url})`,    transition: "ease-in-out 2s"}}
    />
  ))
}

export default HomeHeroCards;
