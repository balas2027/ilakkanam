import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './Button'
import useEmblaCarousel from 'embla-carousel-react'
const slidesData = [
    { id: 1, title: "Product 1", description: "Description 1" },
    { id: 2, title: "Product 2", description: "Description 2" },
    { id: 3, title: "Product 3", description: "Description 3" },
    { id: 4, title: "Product 4", description: "Description 4" }
];

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

return (
 <section className="w-full">
    <div className=" mx-3 sm:mx-5 lg:mx-25">
         <div className="w-full flex justify-end pr-5 mb-3 gap-4">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
             
            <div className="flex touch-pan-y touch-pinch-zoom">
                {slidesData.map((slide) => (
                    <div className="transform-gpu md:flex-[0_0_80%] flex-[0_0_100%] xl:flex-[0_0_50%] min-w-0 pr-4" key={slide.id}>
                        <div className="bg-black text-white shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-6xl font-semibold flex items-center justify-center h-70 sm:h-100 lg:h-120 select-none">
                            {slide.title}
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
