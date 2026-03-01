import React from 'react'
import NavCss from "./Nav.module.css"

export default function Nav() {
  return (
    <div className={NavCss.nav}>
      <div className={NavCss.menu}>
        <li>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
          <a href="#">Equipe</a>
          <a href="#">Depoimento</a>
          <a href="#">Contato</a>
        </li>
      </div>

      <div className={NavCss.bars}>
        <i className={`${NavCss.nav_icon} ri-menu-2-fill`}></i>
      </div>
    </div>
  )
}
