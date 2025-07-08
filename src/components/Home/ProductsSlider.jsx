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
    <div className="mx-30">
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
                {slidesData.map((slide) => (
                    <div className="transform-gpu flex-[0_0_45%] min-w-0 pl-4" key={slide.id}>
                        <div className="bg-black text-white shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-6xl font-semibold flex items-center justify-center h-130 select-none">
                            {slide.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-end mt-3 gap-4">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
    </div>
</section>
)
}

export default EmblaCarousel
