import React from "react"
import TestimonialCss from "./Testimonial.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import clientImg1 from "../../assets/testimonial-1.png"
import clientImg2 from "../../assets/testimonial-2.png"
import clientImg3 from "../../assets/testimonial-3.png"

export default function Testimonial() {
  return (
    <section id="depoimento" className={TestimonialCss.testimonial}>
      <div className="Headings">
        <h2>Depoimentos</h2>
        <h1>O QUE AS PESSOAS ESTÃO DIZENDO SOBRE NÓS</h1>
      </div>

      <Swiper
        className={TestimonialCss.testSlider}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        breakpoints={{
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
          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* slide1 */}
        <SwiperSlide>
          <div className={TestimonialCss.test_box}>
            <div className={TestimonialCss.test_card}>
              <div className={TestimonialCss.test_info}>
                <h2>Nick David</h2>
                <h5>Designer UI/UX</h5>
              </div>
              <p>
                Impulsionados pela inovação e criatividade, estamos em constante
                evolução e expansão da nossa plataforma para trazer a você o que
                há de mais recente e melhor no mundo dos jogos.
              </p>
            </div>
            <div className={TestimonialCss.client_img}>
              <img src={clientImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        
        {/* slide2 */}
        <SwiperSlide>
          <div className={TestimonialCss.test_box}>
            <div className={TestimonialCss.test_card}>
              <div className={TestimonialCss.test_info}>
                <h2>Miranda Smith</h2>
                <h5>Fundadora</h5>
              </div>
              <p>
                Impulsionados pela inovação e criatividade, estamos em constante
                evolução e expansão da nossa plataforma para trazer a você o que
                há de mais recente e melhor no mundo dos jogos.
              </p>
            </div>
            <div className={TestimonialCss.client_img}>
              <img src={clientImg2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        
        {/* slide3 */}
        <SwiperSlide>
          <div className={TestimonialCss.test_box}>
            <div className={TestimonialCss.test_card}>
              <div className={TestimonialCss.test_info}>
                <h2>Alonso Perez</h2>
                <h5>CEO</h5>
              </div>
              <p>
                Impulsionados pela inovação e criatividade, estamos em constante
                evolução e expansão da nossa plataforma para trazer a você o que
                há de mais recente e melhor no mundo dos jogos.
              </p>
            </div>
            <div className={TestimonialCss.client_img}>
              <img src={clientImg3} alt="" />
            </div>
          </div>
        </SwiperSlide>
        
        {/* slide4 */}
        <SwiperSlide>
          <div className={TestimonialCss.test_box}>
            <div className={TestimonialCss.test_card}>
              <div className={TestimonialCss.test_info}>
                <h2>Amanda Lee</h2>
                <h5>Desenvolvedora</h5>
              </div>
              <p>
                Impulsionados pela inovação e criatividade, estamos em constante
                evolução e expansão da nossa plataforma para trazer a você o que
                há de mais recente e melhor no mundo dos jogos.
              </p>
            </div>
            <div className={TestimonialCss.client_img}>
              <img src={clientImg2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
