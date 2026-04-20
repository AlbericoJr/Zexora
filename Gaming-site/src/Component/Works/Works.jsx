import React from "react"
import WorksCss from "./Works.module.css"
import CardBgImg from "../../assets/work-card-bg1-1.png"

export default function Works() {
  return (
    <div id="projetos" className={WorksCss.our_work}>
      <div className={WorksCss.work_head}>
        <h1>NOSSOS PROJETOS</h1>
      </div>

      <div className={WorksCss.work_container}>
        {/* card 1 */}
        <div className={WorksCss.work_card}>
          <div className={WorksCss.work_box}>
            <div className={WorksCss.work_text}>
              <h1>Próximo lançamento</h1>
              <span>/CyberSaga Chronicles</span>
            </div>
            <h2>Ação - Aventura</h2>
          </div>

          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Próximo lançamento</h1>
              <span>/</span>
              <h1>Próximo lançamento</h1>
              <span>/</span>
              <h1>Próximo lançamento</h1>
              <span>/</span>
              <h1>Próximo lançamento</h1>
              <span>/</span>
              <h1>Próximo lançamento</h1>
              <span>/</span>
              <h1>Próximo lançamento</h1>
              <span>/</span>
            </div>
          </marquee>
        </div>

        {/* card 2 */}
        <div className={WorksCss.work_card}>
          <div className={WorksCss.work_box}>
            <div className={WorksCss.work_text}>
              <h1>Modo competitivo</h1>
              <span>/Ascensão Online</span>
            </div>
            <h2>Aventura - PvP</h2>
          </div>

          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Modo competitivo</h1>
              <span>/</span>
              <h1>Modo competitivo</h1>
              <span>/</span>
              <h1>Modo competitivo</h1>
              <span>/</span>
              <h1>Modo competitivo</h1>
              <span>/</span>
              <h1>Modo competitivo</h1>
              <span>/</span>
              <h1>Modo competitivo</h1>
              <span>/</span>
            </div>
          </marquee>
        </div>

        {/* card 3 */}
        <div className={WorksCss.work_card}>
          <div className={WorksCss.work_box}>
            <div className={WorksCss.work_text}>
              <h1>Nos bastidores</h1>
              <span>/Forja Infinita</span>
            </div>
            <h2>Estratégia em tempo real</h2>
          </div>

          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Nos bastidores</h1>
              <span>/</span>
              <h1>Nos bastidores</h1>
              <span>/</span>
              <h1>Nos bastidores</h1>
              <span>/</span>
              <h1>Nos bastidores</h1>
              <span>/</span>
              <h1>Nos bastidores</h1>
              <span>/</span>
              <h1>Nos bastidores</h1>
              <span>/</span>
            </div>
          </marquee>
        </div>
        
        {/* card 4 */}
        <div className={WorksCss.work_card}>
          <div className={WorksCss.work_box}>
            <div className={WorksCss.work_text}>
              <h1>Evento de destaque</h1>
              <span>/Retrospectiva 2026</span>
            </div>
            <h2>Esportes e corridas</h2>
          </div>

          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Evento de destaque</h1>
              <span>/</span>
              <h1>Evento de destaque</h1>
              <span>/</span>
              <h1>Evento de destaque</h1>
              <span>/</span>
              <h1>Evento de destaque</h1>
              <span>/</span>
              <h1>Evento de destaque</h1>
              <span>/</span>
              <h1>Evento de destaque</h1>
              <span>/</span>
            </div>
          </marquee>
        </div>
        
        {/* card 5 */}
        <div className={WorksCss.work_card}>
          <div className={WorksCss.work_box}>
            <div className={WorksCss.work_text}>
              <h1>Jogando por uma causa</h1>
              <span>/Destaque da Comunidade</span>
            </div>
            <h2>Ação - Battle Royale</h2>
          </div>

          <marquee behavior="alternate" direction="">
            <div className={WorksCss.marquee_text}>
              <h1>Jogando por uma causa</h1>
              <span>/</span>
              <h1>Jogando por uma causa</h1>
              <span>/</span>
              <h1>Jogando por uma causa</h1>
              <span>/</span>
              <h1>Jogando por uma causa</h1>
              <span>/</span>
              <h1>Jogando por uma causa</h1>
              <span>/</span>
              <h1>Jogando por uma causa</h1>
              <span>/</span>
            </div>
          </marquee>
        </div>

      </div>
    </div>
  )
}
