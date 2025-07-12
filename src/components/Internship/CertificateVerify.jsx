import React, { useRef } from "react";
import carrer from "../../assets/png-confident-professional-woman-white_53876-524455.jpg";

import useScrollAnimation from "../../scrollanimation";
import { ArrowRight } from "lucide-react";
import styles from "../../css/Internship.module.css";

function Verify() {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  return (
    <div className="flex md:flex-row flex-col space-y-10 items-center xl:max-w-7xl w-full  xl:mx-auto ">
      <div
        ref={ref2}
        className={`image  flex xl:justify-start justify-center relative w-full h-100 lg:h-150 md:w-1/2 ${
          isVisible2 ? styles["side-animation-show"] : styles["side-animation"]
        }`}
      >
        <img src={carrer} className="object-coover" alt="" />
      </div>
      <div
        ref={ref1}
        className={`content space-y-10 flex text-justify flex-col w-full md:w-1/2 ${
          isVisible1
            ? styles["side-animation-content-show"]
            : styles["side-animation-content"]
        }`}
      >
        <div className="xl:space-y-10 mx-2 space-y-5">
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-semibold text-slate-700">
            Certificate Verification <br /> System
          </h1>
          <h2 className="lg:text-4xl text-2xl font-medium">
            Ensure Authenticity with One Click
          </h2>
          <p className="sm:text-lg text-sm">
            We’ve implemented a dedicated system to verify internship
            certificates issued by Ilakkanam. Each certificate comes with a
            unique ID that can be entered into our portal to instantly verify
            its authenticity. This adds credibility for interns and trust for
            recruiters and institutions.
          </p>
        </div>
        <div className="cta pl-2 flex space-x-3 md:space-x-10">
          <a href="verify_certificate"
            className={`text-white text-lg ${styles["group"]} hover:bg-white hover:text-black hover:border transition-all duration-700 border-black font-medium bg-black p-3 sm:px-6 sm:py-4 rounded-xl`}
          >
            Verify a Certificate{" "}
            <ArrowRight className={`inline ml-2 ${styles["arrow-icon"]}`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Verify;
