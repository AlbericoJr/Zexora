import MissionCss from './Mission.module.css'
import skullImg from '../../assets/skull-icon3.png'

export default function Mission() {
  return (
    <section className={MissionCss.our_mission}>
      <div className={MissionCss.mission_head}>
        <div className={MissionCss.skullImg}>
          <img src={skullImg} alt="" />
        </div>
        <h2>Nossa missão é criar uma comunidade gamer vibrante e inclusiva.</h2>
      </div>

        <div className={MissionCss.mission_infos}>
          <div className={MissionCss.info_box}>
            <h1>370+</h1>
            <h2>Criação e otimização de sites</h2>
          </div>

          <div className={MissionCss.info_box}>
            <h1>10+</h1>
            <h2>Consciência e reconhecimento da marca</h2>
          </div>
          
          <div className={MissionCss.info_box}>
            <h1>4X</h1>
            <h2>Medir e analisar o desempenho</h2>
          </div>
          
          <div className={MissionCss.info_box}>
            <h1>50%</h1>
            <h2>Aumente as conversões e as vendas</h2>
          </div>
        </div>
    </section>
  )
}
