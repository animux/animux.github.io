"use client";

import "swiper/css";

import SwiperCarousel from "@/app/_components/home/carousel";
import { TypewriterEffect } from "@/components/Typewriter";

const OPTIONS = { axis: "y", loop: true, watchDrag: false };

const reviews = [
  {
    name: "Muiz Shahab Uddin",
    picture: "/image1.jpg",
    text: "Aminul brought our vision to life with incredible precision. Our new site is stunning, optimized for search engines and mobile devices. We're thrilled with the results and look forward to future collaborations!",
    designation: "Co-Founder of TezzFeed",
  },
  {
    name: "Maliha Rahham",
    picture: "/image2.jpg",
    text: "Working with Aminul was a game-changer. The site is visually appealing, fast, and easy to navigate. Our clients have given us overwhelmingly positive feedback. Fantastic job!",
    designation: "Founder of LegalX",
  },
  {
    name: "Syed Reehan Mahmud",
    picture: "/image3.jpg",
    text: "I’ve worked with Aminul for ages, and let me tell you. He's not just efficient, he’s a precision machine wrapped in a friendly human. Doesn’t matter if it’s work hours or some ungodly time, he’s always just a call away, ready to drop some tech wisdom like it’s nothing. If something’s broken, he’s already halfway through fixing it before you even finish explaining.",
    designation: "Founder of 14AGAIN",
  },
  {
    name: "Muiz Shahab Uddin",
    picture: "/image1.jpg",
    text: "Aminul brought our vision to life with incredible precision. Our new site is stunning, optimized for search engines and mobile devices. We're thrilled with the results and look forward to future collaborations!",
    designation: "Co-Founder of TezzFeed",
  },
  {
    name: "Maliha Rahham",
    picture: "/image2.jpg",
    text: "Working with Aminul was a game-changer. The site is visually appealing, fast, and easy to navigate. Our clients have given us overwhelmingly positive feedback. Fantastic job!",
    designation: "Founder of LegalX",
  },
  {
    name: "Syed Reehan Mahmud",
    picture: "/image3.jpg",
    text: "I’ve worked with Aminul for ages, and let me tell you. He's not just efficient, he’s a precision machine wrapped in a friendly human. Doesn’t matter if it’s work hours or some ungodly time, he’s always just a call away, ready to drop some tech wisdom like it’s nothing. If something’s broken, he’s already halfway through fixing it before you even finish explaining.",
    designation: "Founder of 14AGAIN",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-10 w-full bg-white dark:bg-zinc-900">
      <div className="flex flex-col md:gap-4 gap-2 px-5 text-left">
        <TypewriterEffect
          className="md:text-8xl text-6xl font-bold"
          text={"They said it, not me ;)"}
        />
        <TypewriterEffect
          className="md:text-4xl text-2xl font-medium tracking-wide whitespace-pre-line"
          text={"No cap, they said it better than I ever could."}
        />
      </div>

      <div className="relative h-[1273px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[236px] before:bg-gradient-to-r before:from-white dark:before:from-zinc-900 before:to-transparent before:-translate-x-14 md:before:translate-x-0 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[236px] after:bg-gradient-to-l after:from-white dark:after:from-zinc-900 after:to-transparent after:translate-x-14 md:after:translate-x-0 visible opacity-100">
        <div className="absolute left-1/2 flex h-full origin-top -translate-x-1/2 justify-center gap-6">
          <SwiperCarousel
            slides={reviews}
            direction="forward"
            options={OPTIONS}
          />
          <SwiperCarousel
            slides={reviews}
            direction="backward"
            options={OPTIONS}
          />
          <SwiperCarousel
            slides={reviews}
            direction="forward"
            options={OPTIONS}
          />
          <SwiperCarousel
            slides={reviews}
            direction="backward"
            options={OPTIONS}
          />
          <SwiperCarousel
            slides={reviews}
            direction="forward"
            options={OPTIONS}
          />
        </div>
        <div className="pointers-event-none absolute -top-1 md:h-72 h-24 w-full bg-gradient-to-b from-white dark:from-zinc-900 to-transparent"></div>
        <div className="pointers-event-none absolute bottom-0 md:h-72 h-24 w-full bg-gradient-to-t from-white dark:from-zinc-900 to-transparent"></div>
      </div>
    </div>
  );
  // return (
  //   <div
  //     className="dark:text-white bg-no-repeat bg-center bg-cover bg-fixed"
  //     style={{ backgroundImage: "url('/about-us.jpg')" }}
  //   >
  //     <div className="py-20 backdrop-filter backdrop-blur-lg bg-opacity-50 bg-white dark:bg-zinc-900 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10 text-white">
  //       <div className="container mx-auto md:px-0 px-5">
  //         <Swiper
  //           loop={true}
  //           slidesPerView={1}
  //           autoplay={{ delay: 5000, disableOnInteraction: true }}
  //           modules={[Autoplay]}
  //         >
  //           {reviews.map((review, index) => (
  //             <SwiperSlide key={index}>
  //               <div className="bg-white dark:bg-zinc-900 py-10 px-2 md:px-20 rounded-lg text-zinc-800 dark:text-white mx-2 shadow-2xl">
  //                 <div className="text-center">
  //                   <FontAwesomeIcon
  //                     icon={faQuoteLeft}
  //                     size="6x"
  //                     className="text-zinc-800 opacity-10 dark:text-white dark:opacity-90"
  //                   ></FontAwesomeIcon>
  //                   <h1 className="md:text-3xl text-2xl py-10">
  //                     "{review.text}"
  //                   </h1>
  //                   <div className="flex flex-row items-center justify-center md:text-lg text-xs gap-2">
  //                     <div className="flex flex-row items-center gap-2">
  //                       <Image
  //                         src={review.picture}
  //                         alt={review.name}
  //                         className="w-16 rounded-full"
  //                       />
  //                       <div className="border-zinc-400 border-r-2 pr-2">
  //                         {review.name}
  //                       </div>
  //                     </div>
  //                     <div>{review.designation}</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </SwiperSlide>
  //           ))}
  //         </Swiper>

  //         <div className="flex justify-end pt-10">
  //           <TypewriterEffect
  //             className="md:text-6xl text-4xl uppercase text-right font-extrabold whitespace-pre-line"
  //             text={"- They said it,\nnot me ;)"}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Testimonials;
