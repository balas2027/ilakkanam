import React from "react";
import carrer from "../../assets/bg.png";
import bgline from "../../assets/bg-line.png";
import carrer1 from "../../assets/bg-small.png";
import underlinein from '../../assets/underlineintern.png';
import useScrollAnimation from "../../scrollanimation";
import styles from '../../css/Internship.module.css';
function HeroCareer() {
 
 const [ref1, isVisible1] = useScrollAnimation();
const [ref2, isVisible2] = useScrollAnimation();

  return (
    <>
      <div className="flex relative h-full md:flex-row flex-col space-y-10 items-center xl:max-w-7xl w-full xl:mx-auto ">
        <div ref={ref1} className={`content   ${isVisible1 ? styles['side-animation-content-show'] : styles['side-animation-content']} pl-3 space-y-10 flex flex-col w-full  md:w-1/2`}>
          <div className="xl:space-y-10 space-y-5">
            <h1 className="xl:text-7xl lg:text-6xl text-5xl font-semibold text-slate-700">
              Shape Your Future with Our Internships
            </h1>

            <p className="sm:text-xl text-lg">
              At <strong>Ilakkanam</strong>, internships are your launchpad to
              real-world impact. Work with passionate teams, gain mentorship,
              and build projects that matter — with certificate, stipend, and
              PPO opportunities.
            </p>
          </div>
          <div className="cta">
            <a href="/internship_apply " className="text-white text-lg font-semibold bg-black p-3 sm:px-5 sm:py-3  rounded-xl">
              {" "}
              Apply Now{" "}
            </a>
          </div>
        </div>
        <div ref={ref2} className={`image ${isVisible2 ? styles['internship-side-animation-show'] : styles['internship-side-animation']} flex  relative w-[95%] md:w-1/2`}>
          <div className="absolute -z-10 md:block hidden lg:h-[70%] lg:w-[70%] xl:left-45 left-20 top-0">
            <img src={bgline} alt="" />
          </div>
          <img src={carrer} alt="" className="md:block hidden" />


        </div>
        <div className="bgline -z-20 sm:block absolute hidden lg:bottom-3 sm:-skew- sm:bottom-0 xl:bottom-10">
          <img src={underlinein} alt="" />
        </div>
      </div>
    </>
  );
}

export default HeroCareer;
