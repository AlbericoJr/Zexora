import React from 'react'
import InstaCss from './Insta.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import InstImg1 from '../../assets/insta-1.png'
import InstImg2 from '../../assets/insta-2.png'
import InstImg3 from '../../assets/insta-3.png'
import InstImg4 from '../../assets/insta-4.png'
import InstImg5 from '../../assets/insta-5.png'
import InstImg6 from '../../assets/insta-6.png'

export default function Insta() {
  return (
    <Swiper
        className={InstaCss.InstaSlider}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          380: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {/* slide1 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg1} alt="Insta 1" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>

        {/* slide2 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg2} alt="Insta 2" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>

        {/* slide3 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg3} alt="Insta 3" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>

        {/* slide4 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg4} alt="Insta 4" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>

        {/* slide5 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg5} alt="Insta 5" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>

        {/* slide6 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg6} alt="Insta 6" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>
        
        {/* slide7 */}
        <SwiperSlide>
          <div className={InstaCss.insta_img}>
            <img src={InstImg2} alt="Insta 7" />
            <i className='ri-instagram-line'></i>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}
