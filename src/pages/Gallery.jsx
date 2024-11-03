import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./styles.css";
import img1 from "../assets/img1.png";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import a8 from "../assets/a8.jpg";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import h6 from "../assets/h6.jpg";
import h7 from "../assets/h7.jpg";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import Speakers from "../components/Speakers";
// import Background from "../components/Background/Background";
import BlobBubble from "../components/AboutUs/AboutBlob";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";
import b7 from "../assets/b7.jpg";
import b8 from "../assets/b8.jpg";
import b9 from "../assets/b9.jpg";
import b10 from "../assets/b10.jpg";
import b11 from "../assets/b11.jpg";
import b12 from "../assets/b12.jpg";
import b13 from "../assets/b13.jpg";
import b14 from "../assets/b14.jpg";
import b15 from "../assets/b15.jpg";
import b16 from "../assets/b16.jpg";
import b17 from "../assets/b17.jpg";
import b18 from "../assets/b18.jpg";
import b19 from "../assets/b19.jpg";
import b20 from "../assets/b20.jpg";
import b21 from "../assets/b21.jpg";
import b22 from "../assets/b22.jpg";
import b23 from "../assets/b23.jpg";
import b24 from "../assets/b24.jpg";
import b25 from "../assets/b25.jpg";
import b26 from "../assets/b26.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";
import c7 from "../assets/c7.jpg";
import c8 from "../assets/c8.jpg";
import c9 from "../assets/c9.jpg";
import c10 from "../assets/c10.jpg";
import c11 from "../assets/c11.jpg";
import c12 from "../assets/c12.jpg";
import c13 from "../assets/c13.jpg";
import c14 from "../assets/c14.jpg";
import c15 from "../assets/c15.jpg";
import c16 from "../assets/c16.jpg";  
import c17 from "../assets/c17.jpg";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";


function Gallery() {
  const galleries = [
    {
      title: "Cyber Carnival",
      images: [i1,c5, c2,i2,i3,i4,i5, c3, c4,a1, c6, c7, c8, c11,c1],
    },
    {
      title: "Cyber Awareness",
      images: [a8, a2,b25, a3, a4, b24, b23, b22],
    },
    {
      title: "Cyberthon",
      images: [h1, h2, h3, h4, h5, h6, h7],
    },
    {
      title: "Cyber Conclave",
      images: [c9, c6,c7,c8, b2, b3, b4, b5, b6, ],
    },
  ];
  return (
    <>

      <div className="text-white mt-32 p-4 z-10 relative">
        {/* <Background /> */}
        <BlobBubble />

        {galleries.map((gallery, index) => (
          <div key={index} className="mb-16">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text p-2 text-center font-audiowide">
              {gallery.title}
            </h1>

            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectCoverflow,
                Keyboard,
              ]}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
                setWrapperSize: true,
              }}
              keyboard={{
                enabled: true,
              }}
              spaceBetween={15}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                200: {
                  slidesPerView: 2,
                },
                360: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {gallery.images.map((img, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <img
                    src={img}
                    alt={`slide ${imgIndex + 1}`}
                    className="w-[4.5rem] h-[25rem] z-50 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}

        <Speakers />
      </div>
    </>
  );
}

export default Gallery;
