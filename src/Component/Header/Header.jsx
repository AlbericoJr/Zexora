import React from "react"
import HeaderCss from "./Header.module.css"
import heroImg from "../../assets/hero.png"

export default function Header() {
  return (
    <header id="home">
      <div className={HeaderCss.hero_content}>
        <h1 className={HeaderCss.hero_title}>
          NEXORA <span>GAMING</span>
        </h1>
        <div className={HeaderCss.hero_boxs}>
          <p>*Com sede em Paris, disponível em todo o mundo.</p>
          <div className={HeaderCss.hero_social}>
            <i className={`${HeaderCss.hero_icon} ri-facebook-fill`}></i>
            <i className={`${HeaderCss.hero_icon} ri-twitter-fill`}></i>
            <i className={`${HeaderCss.hero_icon} ri-behance-fill`}></i>
            <i className={`${HeaderCss.hero_icon} ri-instagram-line`}></i>
            <i className={`${HeaderCss.hero_icon} ri-youtube-fill`}></i>
          </div>
        </div>

        <div className={HeaderCss.hero_bottom}>
          <div className={HeaderCss.hero_bottom_content}>
            <h2>ALGUNS PERSONAGENS LEGAIS E DESCARTÁVEIS</h2>
            <p>
              Impulsionados pela inovação e criatividade, estamos em constante
              evolução e expansão da nossa plataforma para trazer a você o
              melhor e mais recente do mundo dos jogos. De lançamentos
              empolgantes a clássicos favoritos.
            </p>
            <button>
              O próximo pode ser você.
              <i className={`${HeaderCss.hero_icon} ri-arrow-right-line`}></i>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={HeaderCss.hero_img}>
            <img src={heroImg} alt="hero" />
          </div>

          <div className={HeaderCss.shape}></div>
          <div className={HeaderCss.shape2}></div>
        </div>
      </div>
    </header>
  )
}
