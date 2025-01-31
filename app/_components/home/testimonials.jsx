"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import Image1 from "@/public/image1.jpg";

const reviews = [
  {
    name: "Muiz Shahab Uddin",
    picture: Image1,
    text: "Aminul delivered an exceptional website that perfectly matches our brand and business goals. The user experience is seamless, and we've seen a significant increase in online engagement. Highly recommend!",
    designation: "Founder of LegalX",
  },
  {
    name: "Muiz Shahab Uddin",
    picture: Image1,
    text: "Working with Aminul was a game-changer. The site is visually appealing, fast, and easy to navigate. Our clients have given us overwhelmingly positive feedback. Fantastic job!",
    designation: "Founder of LegalX",
  },
  {
    name: "Muiz Shahab Uddin",
    picture: Image1,
    text: "Aminul brought our vision to life with incredible precision. Our new site is stunning, optimized for search engines and mobile devices. We're thrilled with the results and look forward to future collaborations!",
    designation: "Founder of LegalX",
  },
];

const Testimonials = () => {
  return (
    <div
      className="dark:text-white bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/about-us.jpg')" }}
    >
      <div className="py-32 backdrop-filter backdrop-blur-md bg-opacity-10 bg-white dark:bg-zinc-900 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl uppercase text-center font-bold mb-20">
            Testimonials
          </h1>
          <Swiper
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            modules={[Autoplay]}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-zinc-900 py-10 px-2 md:px-20 rounded-lg text-zinc-800 dark:text-white mx-2 md:mx-32 shadow-2xl">
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      size="6x"
                      className="text-zinc-800 opacity-10 dark:text-white dark:opacity-90"
                    ></FontAwesomeIcon>
                    <h1 className="text-3xl py-10">"{review.text}"</h1>
                    <div className="flex flex-row items-center justify-center text-lg gap-2">
                      <div className="flex flex-row items-center gap-2">
                        <Image
                          src={review.picture}
                          alt={review.name}
                          className="w-16 rounded-full"
                        />
                        <div className="border-zinc-400 border-r-2 pr-2">
                          {review.name}
                        </div>
                      </div>
                      <div>{review.designation}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
