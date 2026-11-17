import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ slides, options, direction }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      direction,
      speed: 0.5,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      startDelay: 0,
    }),
  ]);

  return (
    <section className="h-full overflow-hidden">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex h-full flex-col will-change-transform">
          {slides.map((slide, index) => (
            <div
              className="mb-6 min-h-fit w-full"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
              key={index}
            >
              <div
                className="group relative overflow-hidden border border-neutral-200 bg-white/70 backdrop-blur-sm transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.203)] dark:border-neutral-700 dark:bg-neutral-900/60 rounded-2xl w-[88vw] max-w-[26rem] p-5 md:w-[416px] md:p-8 flex flex-col gap-8 md:gap-16 justify-between"
                onMouseOver={() => emblaApi?.plugins().autoScroll.stop()}
                onMouseOut={() => emblaApi?.plugins().autoScroll.play()}
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-linear-to-r from-neutral-900 to-emerald-500 dark:from-white dark:to-emerald-400 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="pointer-events-none absolute right-5 top-2 select-none font-serif text-7xl leading-none text-neutral-200 transition-colors duration-500 group-hover:text-emerald-300/50 dark:text-neutral-800">
                  &ldquo;
                </span>
                <div
                  className="relative"
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                ></div>
                <div className="flex flex-row gap-2 items-center text-xs">
                  <img
                    src={slide.picture}
                    alt={slide.name}
                    className="w-[50px] rounded-full ring-2 ring-transparent transition-all duration-500 group-hover:ring-emerald-400/70"
                  />
                  <div>
                    <div>{slide.name}</div>
                    <div>{slide.designation}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
