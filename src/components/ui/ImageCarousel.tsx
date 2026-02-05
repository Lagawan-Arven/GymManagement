import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = () => {
  const images = [
    "/workout/workout1.jpg",
    "/workout/workout2.jpg",
    "/workout/workout3.jpg",
    "/workout/workout4.jpg",
    "/workout/workout5.jpg",
    "/workout/workout6.jpg",
    "/workout/workout7.jpg",
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-150 w-100 bg-black"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
