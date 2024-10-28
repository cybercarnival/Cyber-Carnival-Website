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
import Background from "../components/Background/Background";
import BlobBubble from "../components/AboutUs/AboutBlob";

function Gallery() {
  const galleries = [
    {
      title: "Cyber Carnival",
      images: [e1, e2, h1, a1, a2, a3, a4],
    },
    {
      title: "Cyber Awareness",
      images: [a1, a2, a3, a4, a5, a6, a7],
    },
    {
      title: "Cyberthon",
      images: [h1, h2, h3, h4, h5, h6, h7],
    },
    {
      title: "Cyber Conclave",
      images: [h1, h2, h3, h4, h5, h6, h7],
    },
  ];
  return (
    <>
      <div className="text-white mt-32 p-4 z-10 relative">
        <Background />
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
                    className="w-auto h-auto z-50 object-cover"
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
