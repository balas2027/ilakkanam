import React from "react";
import carrer from "../../assets/career.png";
import bgline from "../../assets/bg-line.png";

function HeroCareer() {
  return (
    <div className="flex md:flex-row flex-col space-y-10 items-end xl:max-w-7xl w-full xl:mx-auto ">
      <div className="content side-animation-content pl-3 space-y-10 flex flex-col w-full md:w-1/2">
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
          <button className="text-white  bg-black p-3 sm:p-5 rounded-xl">
            Explore Opportunities
          </button>
          <button className="text-white  bg-black p-3 sm:p-5 rounded-xl">
            Apply Now
          </button>
        </div>
      </div>
      <div className="image side-animation  flex xl:justify-end justify-center relative w-full md:w-1/2">
        <div className="absolute -z-10 h-[70%] w-[70%] xl:left-45 left-20 top-0">
          <img src={bgline} alt="" />
        </div>
        <img src={carrer} alt="" />
      </div>
    </div>
  );
}

export default HeroCareer;
