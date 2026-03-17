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
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Equipe</a></li>
        <li><a href="#">Depoimento</a></li>
        <li><a href="#">Contato</a></li>
      </div>

      <div className={NavCss.bars}>
        <i className={`${NavCss.nav_icon} ri-menu-2-fill`} onClick={openMenu}></i>
      </div>

      <div className={NavCss.logo}>
        <a href="#">Zex<span>ora</span></a>
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
