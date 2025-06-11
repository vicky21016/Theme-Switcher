'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './slider.module.css' 

export default function Slider() {
  const images = [
    '/3.jpg',
    '/fatek.webp',
    '/yaskawa.png',
    '/yokogawa.png',
    '/acro.jpg',
    '/weintek.webp',
  ]

  return (
    <div className="mt-5">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageWrapper}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
