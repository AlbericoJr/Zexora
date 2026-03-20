import React from 'react'
import ServiceCss from './Service.module.css'
import serviceImg1 from '../../assets/service-icon1.png'
import serviceImg2 from '../../assets/service-icon2.png'

export default function Service() {
  return (
    <section className={ServiceCss.services}>
      <div className={ServiceCss.service_head}>
        <h2>O que fazemos</h2>
      </div>

      <img src={serviceImg1} alt="" className={ServiceCss.service_shape}/>
      <img src={serviceImg2} alt="" className={`${ServiceCss.service_shape} ${ServiceCss.service_shape2}`}/>
      
      <div className={ServiceCss.service_content}>
        <div className={ServiceCss.service_item}>
          <span>01</span>
          <h1>Servidor de Jogos</h1>
        </div>
        <div className={ServiceCss.service_item}>
          <span>02</span>
          <h1>Teste de jogos</h1>
        </div>
        <div className={ServiceCss.service_item}>
          <span>03</span>
          <h1>Integração de AR/VR</h1>
        </div>
        <div className={ServiceCss.service_item}>
          <span>04</span>
          <h1>Designe de Jogos</h1>
        </div>
        <div className={ServiceCss.service_item}>
          <span>05</span>
          <h1>Desenvolvimento de Jogos</h1>
        </div>
      </div>
    </section>
  )
}
