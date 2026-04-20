import { useRef } from "react"
import NavCss from "./Nav.module.css"

export default function Nav() {

  const menubar = useRef();

  const openMenu = () => {
    menubar.current.classList.toggle(NavCss.openMenu);
  }

  return (
    <div className={NavCss.nav}>
      <div className={NavCss.menu} ref={menubar}>
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#equipe">Equipe</a></li>
        <li><a href="#depoimento">Depoimento</a></li>
        <li><a href="#contato">Contato</a></li>
      </div>

      <div className={NavCss.bars}>
        <i className={`${NavCss.nav_icon} ri-menu-2-fill`} onClick={openMenu}></i>
      </div>

      <div className={NavCss.logo}>
        <a href="#home">Zex<span>ora</span></a>
      </div>
      
      <div className={NavCss.right_menu}>
        <h2>INFO@EXAMPLE.COM</h2>
        <div className={NavCss.nav_icon}>
          <i className={`${NavCss.nav_icon} ri-search-2-line`}></i>
        </div>
      </div>
    </div>
  )
}
