import React from 'react'
import WorksCss from './Works.module.css'
import CardBgImg from '../../assets/work-card-bg1-1.png'

export default function Works() {
  return (
    <div className={WorksCss.our_work}>
      <div className={WorksCss.work_head}>
        <h1>NOSSOS TRABALHOS</h1>
      </div>

      <div className={WorksCss.work_container}>
        <div className={WorksCss.work_box}>
          <div className={WorksCss.work_text}>
            <h1>Próximo lançamento</h1>
            <span>/CyberSaga Chronicles</span>
          </div>
          <h2>Ação - Aventura</h2>
        </div>
      </div>
    </div>
  )
}
