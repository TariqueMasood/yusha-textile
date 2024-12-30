"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./hero-slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import sliderImg1 from "../../../public/images/slider-img1.jpg";
import sliderImg2 from "../../../public/images/slider-img2.jpg";
import sliderImg3 from "../../../public/images/slider-img3.jpg";

const slides = [
  {
    id: 1,
    title: "Slide 1 Title",
    description: "This is the description for Slide 1.",
    image: sliderImg1,
  },
  {
    id: 2,
    title: "Slide 2 Title",
    description: "This is the description for Slide 2.",
    image: sliderImg2,
  },
  {
    id: 3,
    title: "Slide 3 Title",
    description: "This is the description for Slide 3.",
    image: sliderImg3,
  },
];

const HeroSlider = () => {
  return (
    <div className={styles.heroSlider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideContainer}>
              {/* Use the Next.js Image Component for Background */}
              <Image
                className={styles.sliderImg}
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority // Ensures images load quickly
              />
              {/* Overlay for Text */}
              <div className={styles.textOverlay}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
