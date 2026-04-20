import React from "react"
import FooterCss from "./Footer.module.css"

export default function Footer() {
  return (
    <section className={FooterCss.footer}>
      <div className={FooterCss.footer_logo}>
        <a href="#">
          Zex<span>ora</span>
        </a>
      </div>

      <div className={FooterCss.footer_menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Equipe</a>
        </li>
        <li>
          <a href="#">Depoimento</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </div>

      <div className={FooterCss.footer_inputs}>
        <input type="text" placeholder="Seu e-mail" />
        <i className="ri-mail-line"></i>
      </div>

      <div className={FooterCss.footer_social}>
          <i className="ri-facebook-fill"></i>
          <i className="ri-twitter-fill"></i>
          <i className="ri-linkedin-fill"></i>
          <i className="ri-google-fill"></i>
          <i className="ri-youtube-fill"></i>
      </div>
    </section>
  )
}
