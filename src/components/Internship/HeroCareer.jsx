import React, { useRef } from "react";
import carrer from "../../assets/career.png";
import bgline from "../../assets/bg-line.png";
import useScrollAnimation from "../../scrollanimation";
import {ArrowRight} from 'lucide-react';
import styles from '../../css/Internship.module.css';

 function HeroCareer() {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  return (
    <div className="flex md:flex-row flex-col space-y-10 items-end xl:max-w-7xl w-full xl:mx-auto ">
      <div ref={ref1} className={`content pl-3 space-y-10 flex flex-col w-full md:w-1/2 ${isVisible1 ? styles['side-animation-content-show'] : styles['side-animation-content']}`}>
        <div className="xl:space-y-10 space-y-5">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-semibold text-slate-700">
            Join Our Journey <br /> at Ilakkanam
          </h1>
          <h2 className="lg:text-4xl text-2xl font-medium">
            Empowering innovation, creativity, and growth — together, we build
            meaningful digital experiences.
          </h2>
          <p className="sm:text-lg text-sm">
            At Ilakkanam, we believe in nurturing passionate minds and enabling
            people to unlock their full potential. Whether you're a seasoned
            professional or just starting your career, your journey to making a
            difference starts here.
          </p>
        </div>
        <div className="cta  flex space-x-3 md:space-x-10">
          <a href="#internshipavailable" className={`text-white text-lg ${styles['group']} hover:bg-white hover:text-black hover:border transition-all duration-700 border-black font-medium bg-black p-3 sm:px-6 sm:py-4 rounded-xl`}>
            Explore Opportunities <ArrowRight className={`inline ml-2 ${styles['arrow-icon']}`} />
          </a>
          <a href="#careerform" className={`text-white text-lg ${styles['group']} hover:bg-white hover:text-black hover:border transition-all duration-700 border-black font-medium bg-black p-3 sm:px-6 sm:py-4 rounded-xl`}>
            Apply Now <ArrowRight className={`inline ml-2 ${styles['arrow-icon']}`} />
          </a>
        </div>
      </div>
      <div ref={ref2} className={`image  flex xl:justify-end justify-center relative w-full md:w-1/2 ${isVisible2 ? styles['side-animation-show'] : styles['side-animation']}`}>
        <div className="absolute -z-10 h-[70%] w-[70%] xl:left-45 left-20 top-0">
          <img src={bgline} alt="" />
        </div>
        <img src={carrer} alt="" />
      </div>
    </div>
  );
}

export default HeroCareer;
