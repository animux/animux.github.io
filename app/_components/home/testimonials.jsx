"use client";

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
    name: "Asif Mostafa Hussain",
    picture: "/image4.jpg",
    text: "Aminul delivered a high-caliber website aligned with our brand and business objectives. His expertise in design and user experience resulted in a polished, functional platform that has driven measurable growth in online engagement. We highly recommend his services.",
    designation: "Founder of Fractal",
  },
  {
    name: "Mohammad Salman",
    picture: "/image5.jpg",
    text: "Working with Aminul Islam was a fantastic experience, his professionalism, creativity, and attention to detail elevated our project. He delivered exceptional results on time, making them a pleasure to collaborate with. Highly recommend for any web development needs!",
    designation: "Managing Partner at Augmenta",
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
  {
    name: "Asif Mostafa Hussain",
    picture: "/image4.jpg",
    text: "Aminul delivered a high-caliber website aligned with our brand and business objectives. His expertise in design and user experience resulted in a polished, functional platform that has driven measurable growth in online engagement. We highly recommend his services.",
    designation: "Founder of Fractal",
  },
  {
    name: "Mohammad Salman",
    picture: "/image5.jpg",
    text: "Working with Aminul Islam was a fantastic experience, his professionalism, creativity, and attention to detail elevated our project. He delivered exceptional results on time, making them a pleasure to collaborate with. Highly recommend for any web development needs!",
    designation: "Managing Partner at Augmenta",
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

      <div className="relative h-[1273px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:md:w-[236px] before:w-[150px] before:bg-gradient-to-r before:from-white dark:before:from-zinc-900 before:to-transparent before:-translate-x-14 md:before:translate-x-0 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:md:w-[210px] after:w-[150px] after:bg-gradient-to-l after:from-white dark:after:from-zinc-900 after:to-transparent after:translate-x-14 md:after:translate-x-0 visible opacity-100">
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
        <div className="pointers-event-none absolute -top-1 md:h-72 h-20 w-full bg-gradient-to-b from-white dark:from-zinc-900 to-transparent"></div>
        <div className="pointers-event-none absolute bottom-0 md:h-72 h-20 w-full bg-gradient-to-t from-white dark:from-zinc-900 to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonials;
