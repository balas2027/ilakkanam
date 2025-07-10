import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './Button'
import useEmblaCarousel from 'embla-carousel-react'

// Images
import image1 from '../../assets/HomePageProducts/product1.jpeg'
import image2 from '../../assets/HomePageProducts/product2.jpeg'
import image3 from '../../assets/HomePageProducts/product3.png'
import image4 from '../../assets/HomePageProducts/product4.png'
import image5 from '../../assets/HomePageProducts/product5.png'
import image6 from '../../assets/HomePageProducts/product6.jpeg'

// Slide data
const slidesData = [
  { id: 1, title: "HYBRID SOLAR DESALINATION SYSTEM", description: "Description 1", image: image1 },
  { id: 2, title: "HANDICAP VEHICLE", description: "Description 2", image: image2 },
  { id: 3, title: "INTELLIGENT HEAD PROTECTING SAFETY HELMET", description: "Description 3", image: image3 },
  { id: 4, title: "ACTIVE VACUUM SUSPENSION SYSTEM", description: "Description 4", image: image4 },
  { id: 5, title: "KARTHAVYA (Data acquisition system)", description: "Description 5", image: image5 },
  { id: 6, title: "HAND-HELD BRAILLE DEVICE", description: "Description 6", image: image6 }
]

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="w-full">
      <div className="mx-3 sm:mx-5 lg:mx-25">
        {/* Navigation buttons */}
        <div className="w-full flex justify-end pr-5 sm:mt-0 mt-4 mb-3 gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom">
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                className="transform-gpu group md:flex-[0_0_80%] flex-[0_0_100%] xl:flex-[0_0_50%] min-w-0 pr-4"
              >
                <div className="relative overflow-hidden rounded-lg h-70 sm:h-100 lg:h-120 flex items-center justify-center select-none">
                  {/* Background Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute hover:scale-110 inset-0 w-full h-full object-cover brightness-50 transition-transform duration-500 ease-in-out z-0"
                  />

                  {/* Title Overlay */}
                  <div className="z-10 text-3xl text-white font-extrabold text-center px-4">
                    {slide.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
