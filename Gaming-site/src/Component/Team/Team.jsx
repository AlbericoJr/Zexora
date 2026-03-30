import React from 'react'
import TeamCss from './Team.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import teamImg1 from '../../assets/team-2-1.jpg'
import teamImg2 from '../../assets/team-2-2.jpg'
import teamImg3 from '../../assets/team-2-3.jpg'
import teamImg4 from '../../assets/team-2-4.jpg'

export default function Team() {
  return (
    <section className={TeamCss.our_team}>
      <div className='Headings'>
        <h2>Nossa equipe</h2>
        <h1>NOSSOS VINGADORES</h1>
      </div>

      <Swiper
        className={TeamCss.TeamSlider}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {/* slide1 */}
        <SwiperSlide>
          <div className={TeamCss.TeamCard}>
            <div className={TeamCss.Team_img}>
              <img src={teamImg1} alt="Retrato de James Taylor, CEO" />
              <span>CEO</span>
            </div>
            <div className={TeamCss.team_det}>
              <div className={TeamCss.team_info}>
                <h2>James Taylor</h2>
                <p>Estratégia, visão de negócio e liderança da equipe.</p>
              </div>
              <div className={TeamCss.social}>
                <i className="ri-facebook-fill" aria-hidden="true"></i>
                <i className="ri-twitter-fill" aria-hidden="true"></i>
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide2 */}
        <SwiperSlide>
          <div className={TeamCss.TeamCard}>
            <div className={TeamCss.Team_img}>
              <img src={teamImg2} alt="Retrato de Katy Williams, designer" />
              <span>Designer</span>
            </div>
            <div className={TeamCss.team_det}>
              <div className={TeamCss.team_info}>
                <h2>Katy Williams</h2>
                <p>Identidade visual, UI e experiências imersivas.</p>
              </div>
              <div className={TeamCss.social}>
                <i className="ri-facebook-fill" aria-hidden="true"></i>
                <i className="ri-twitter-fill" aria-hidden="true"></i>
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide3 */}
        <SwiperSlide>
          <div className={TeamCss.TeamCard}>
            <div className={TeamCss.Team_img}>
              <img src={teamImg3} alt="Retrato de Harry Newman, desenvolvedor" />
              <span>Desenvolvedor</span>
            </div>
            <div className={TeamCss.team_det}>
              <div className={TeamCss.team_info}>
                <h2>Harry Newman</h2>
                <p>Arquitetura técnica, integrações e performance.</p>
              </div>
              <div className={TeamCss.social}>
                <i className="ri-facebook-fill" aria-hidden="true"></i>
                <i className="ri-twitter-fill" aria-hidden="true"></i>
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide4 */}
        <SwiperSlide>
          <div className={TeamCss.TeamCard}>
            <div className={TeamCss.Team_img}>
              <img src={teamImg4} alt="Retrato de Victor Mendes, fundador" />
              <span>Fundador</span>
            </div>
            <div className={TeamCss.team_det}>
              <div className={TeamCss.team_info}>
                <h2>Victor Mendes</h2>
                <p>Origem do projeto, cultura e direção criativa.</p>
              </div>
              <div className={TeamCss.social}>
                <i className="ri-facebook-fill" aria-hidden="true"></i>
                <i className="ri-twitter-fill" aria-hidden="true"></i>
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide5 */}
        <SwiperSlide>
          <div className={TeamCss.TeamCard}>
            <div className={TeamCss.Team_img}>
              <img src={teamImg2} alt="Retrato de Katy Williams, designer" />
              <span>Designer</span>
            </div>
            <div className={TeamCss.team_det}>
              <div className={TeamCss.team_info}>
                <h2>Katy Williams</h2>
                <p>Identidade visual, UI e experiências imersivas.</p>
              </div>
              <div className={TeamCss.social}>
                <i className="ri-facebook-fill" aria-hidden="true"></i>
                <i className="ri-twitter-fill" aria-hidden="true"></i>
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}
