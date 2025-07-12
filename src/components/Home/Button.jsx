import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ children, ...restProps }) => (
  <button
    type="button"
    className="appearance-none text-white touch-manipulation  cursor-pointer border-0 p-0 m-0 bg-black sm:w-14 sm:h-14 w-10 h-10 z-[1] rounded-full flex items-center justify-center disabled:text-[--detail-high-contrast]"
    {...restProps}
  >
    <ArrowLeft size={24} />
    {children}
  </button>
)

export const NextButton = ({ children, ...restProps }) => (
  <button
    type="button"
    className="appearance-none touch-manipulation bg-black text-white cursor-pointer border-0 p-0 m-0  shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] sm:w-14 sm:h-14 h-10 w-10 z-[1] rounded-full flex items-center justify-center disabled:text-[--detail-high-contrast]"
    {...restProps}
  >
    <ArrowRight size={24}/>
    {children}
  </button>
)
