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
              className="mb-6 min-h-fit w-[416ox]"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
              key={index}
            >
              <div
                className="border dark:border-neutral-700 rounded-2xl w-[416px] p-8 flex flex-col gap-16 justify-between"
                onMouseOver={() => emblaApi?.plugins().autoScroll.stop()}
                onMouseOut={() => emblaApi?.plugins().autoScroll.play()}
              >
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                ></div>
                <div className="flex flex-row gap-2 items-center text-xs">
                  <img
                    src={slide.picture}
                    alt={slide.name}
                    className="w-[50px] rounded-full"
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
