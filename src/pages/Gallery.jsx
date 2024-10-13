import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import './styles.css';
import img1 from "../assets/img1.png";
function Gallery() {
  return (
    <div className='text-white mt-32 flex flex-wrap justify-center items-center '>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard]}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        setWrapperSize: true,
      }}
      keyboard={{
        enabled: true,
      }}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={img1} alt="slide1" tabIndex={1} />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} alt="slide6" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img1} alt="slide7" />
      </SwiperSlide>

    </Swiper>


    </div>
  )
}

export default Gallery
