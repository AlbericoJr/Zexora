import React from "react"
import GameCardsCss from "./GameCards.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import GameCardImg1 from "../../assets/game-card1.png"
import GameCardImg2 from "../../assets/game-card2.png"
import GameCardImg3 from "../../assets/game-card3.png"
import GameCardImg4 from "../../assets/game-card4.png"

export default function GameCards() {
  return (
    <Swiper
      className={GameCardsCss.GameSlider}
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      breakpoints={{
        500: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
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
        <div className={GameCardsCss.gameCard}>
          <img src={GameCardImg1} alt="Jogo 1" />
          <button>
          DOWNLOAD
          <i className={"ri-arrow-right-line"}></i>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </button>
        </div>
      </SwiperSlide>

      {/* slide2 */}
      <SwiperSlide>
        <div className={GameCardsCss.gameCard}>
          <img src={GameCardImg2} alt="Jogo 2" />
          <button>
            DOWNLOAD
            <i className={"ri-arrow-right-line"}></i>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </SwiperSlide>

      {/* slide3 */}
      <SwiperSlide>
        <div className={GameCardsCss.gameCard}>
          <img src={GameCardImg3} alt="Jogo 3" />
          <button>
          DOWNLOAD
          <i className={"ri-arrow-right-line"}></i>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </button>
        </div>
      </SwiperSlide>

      {/* slide4 */}
      <SwiperSlide>
        <div className={GameCardsCss.gameCard}>
          <img src={GameCardImg4} alt="Jogo 4" />
          <button>
          DOWNLOAD
          <i className={"ri-arrow-right-line"}></i>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          </button>
        </div>
      </SwiperSlide>

      {/* slide5 */}
      <SwiperSlide>
        <div className={GameCardsCss.gameCard}>
          <img src={GameCardImg2} alt="Jogo 5" />
          <button>
            DOWNLOAD
            <i className={"ri-arrow-right-line"}></i>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
