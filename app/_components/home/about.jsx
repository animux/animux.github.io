"use client";

// import Particles from "@tsparticles/react";
// import config from "./particlesjs-config";

const AboutUs = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: "url('/about-us.jpg')" }}
    >
      <div className="py-32 backdrop-filter backdrop-blur-md bg-opacity-30 bg-neutral-200 dark:bg-white-900 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10 text-white">
        <div className="container mx-auto">
          <h1 className="text-6xl opacity-80 font-extrabold mb-5 ">About</h1>
          <div className="flex flex-row text-xl text-pretty gap-5">
            <p className="px-10 border-t-4 border-zinc-900 dark:border-white mt-3"></p>
            <p>
              As a dedicated Full Stack Web Developer with over seven years of
              professional experience, I am committed to delivering
              high-quality, innovative solutions for my clients. My expertise
              spans both front-end and back-end development, ensuring seamless
              integration and functionality. I pride myself on my ability to
              communicate effectively, understand client needs, and translate
              them into efficient, user-friendly applications. Constantly driven
              by a passion for learning, I stay abreast of the latest industry
              trends and technologies to provide cutting-edge services that meet
              and exceed expectations. Whether working on a complex project or
              offering consultative insights, my goal is to enhance client
              success through technical excellence and unwavering
              professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
