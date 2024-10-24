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
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import h6 from "../assets/h6.jpg";
import h7 from "../assets/h7.jpg";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import Speakers from '../components/Speakers';


function Gallery() {
  return (
    <>
    <div className='text-white mt-32 flex flex-wrap justify-center items-center p-4'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text p-2'>Cyber Carnival</h1>
        <p className='text-center w-2/3'>The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation.</p>
      </div>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard,]}
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
        <img src={e1} alt="slide1" tabIndex={1} />
      </SwiperSlide>
      <SwiperSlide>
      <img src={e2} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h1} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a1} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a2} alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a3} alt="slide6" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a4} alt="slide7" />
      </SwiperSlide>

    </Swiper>
{/* next gallery */}
    <div className='flex flex-col justify-center items-center mt-8'>
        <h1 className='text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text p-2'>Cyber Awareness</h1>
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
        <img src={a1} alt="slide1" tabIndex={1} />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a2} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a3} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a4} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a5} alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a6} alt="slide6" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={a7} alt="slide7" />
      </SwiperSlide>

    </Swiper>
    
    {/* next gallery */}
    <div className='flex flex-col justify-center items-center mt-8'>
        <h1 className='text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text p-2'>Cyberthon</h1>
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
        <img src={h1} alt="slide1" tabIndex={1} />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h2} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h3} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h4} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h5} alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h6} alt="slide6" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h7} alt="slide7" />
      </SwiperSlide>

    </Swiper>

    {/* next gallery */}
    <div className='flex flex-col justify-center items-center mt-8'>
        <h1 className='text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text p-2'>Cyber Conclave</h1>
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
        <img src={h1} alt="slide1" tabIndex={1} />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h2} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h3} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h4} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h5} alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h6} alt="slide6" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={h7} alt="slide7" />
      </SwiperSlide>
    </Swiper>
    <Speakers/>
    </div>
    
    </>

    
  )
}

export default Gallery
