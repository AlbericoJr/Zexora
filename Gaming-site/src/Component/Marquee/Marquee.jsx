import React from 'react'
import MarqueeCss from './Marquee.module.css'
import skullImg from '../../assets/skull-icon.png'

export default function Marquee() {
  return (
    <marquee behavior="alternate" direction="">
      <div className={MarqueeCss.marquee_text}>
        <h1>Comunidade Game</h1>
        <img src={skullImg} alt="skull"  className={MarqueeCss.skullImg}/>
        <h1>Jogos inclusivos</h1>
        <img src={skullImg} alt="skull"  className={MarqueeCss.skullImg}/>
        <h1>Comunidade Game</h1>
        <img src={skullImg} alt="skull"  className={MarqueeCss.skullImg}/>
        <h1>Jogos inclusivos</h1>
        <img src={skullImg} alt="skull"  className={MarqueeCss.skullImg}/>
        <h1>Comunidade Game</h1>
        <img src={skullImg} alt="skull"  className={MarqueeCss.skullImg}/>
        <h1>Jogos inclusivos</h1>
        <img src={skullImg} alt="skull"  className={MarqueeCss.skullImg}/>
      </div>
    </marquee>
  )
}
