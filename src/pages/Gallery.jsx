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
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text'>Cyber Carnival'23</h1>
        <p className='text-center w-2/3'>The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation.</p>
      </div>
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
{/* next gallery */}
    <div className='flex flex-col justify-center items-center mt-8'>
        <h1 className='text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text'>Cyber Carnival'23</h1>
        <p className='text-center w-2/3'>The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation.</p>
      </div>
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
