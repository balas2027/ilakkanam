import React, { useState } from "react";
import HeroCareer from "./HeroCareer";
import Highlight from './Highlight';
import Cform from './Cform'
import InternshipHero from './InternshipHero'
import IntershipHighlights from './InternshipHighlights';

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    
    <div className="mb-8  bg-white group hover:bg-gray-100 border border-gray-200 w-full  shadow-lg  p-4  lg:px-6 xl:px-8">
     
      <button
        className={`faq-btn flex w-full   cursor-pointer p-3 text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full border border-gray-300 max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-white bg-gray-100">
          <svg
            className={`fill-primary group-hover:animate-bounce stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 border-t border-gray-300  text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
const Accordion = () => {
  return (
    <>
    
   <div className="career sm:mt-25 mt-20">
     <HeroCareer />
   </div>
   <div>
    <Highlight />
   </div>
   <div>
    <Cform />
   </div>
   <div className="py-5 md:py-10">
    <InternshipHero />
   </div>
   <div>
    <IntershipHighlights />
   </div>


    <section className="relative z-20 overflow-hidden mx-2 bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[30px]">
      <div className="xl:max-w-7xl xl:mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[700px] text-center lg:mb-20">
              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-900 to-slate-950 sm:text-5xl">
                Learner's Supports
              </h1>
              <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
                Empowering You Through Every Stage
              </h2>
              <p className="text-md text-black">
                Your trusted partner for internships, hackathons, industrial
                collaborations, and startup support. Grow with confidence and
                guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="flex  w-[95%] mx-auto flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is Hackathon Guidance?"
              text="We help students and institutions prepare for hackathons by offering mentorship, resources, and strategy support to build impactful solutions."
            />
            <AccordionItem
              header="What is Students Internship / Inplant?"
              text="We provide internship and inplant training opportunities in collaboration with industry leaders to enhance students' real-world experience."
            />
            <AccordionItem
              header="Do you support Event Organizing?"
              text="Yes, we assist colleges and startups in organizing tech events, workshops, and innovation challenges with complete end-to-end support."
            />
            <AccordionItem
              header="What is Industrial Collaboration?"
              text="We enable partnerships between academic institutions and industries to work on live projects, skill development, and R&D initiatives."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What are MSME Projects?"
              text="We collaborate with Micro, Small, and Medium Enterprises to help execute innovative solutions, often involving student participation and support."
            />
            <AccordionItem
              header="What is Incubation Collaboration?"
              text="We support incubation centers by providing technical mentorship, prototype development, and startup readiness services."
            />
            <AccordionItem
              header="Do you work with Start-Up Projects?"
              text="Yes, we actively support government-backed startup initiatives through grant applications, technical guidance, and product development."
            />
            <AccordionItem
              header="How does Seed Funding work?"
              text="We connect early-stage startups with potential seed funding opportunities through government schemes, incubators, and investors."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        {/* Background SVG remains unchanged */}
      </div>
    </section>
    </>
  );
};

function Internship() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

export default Internship;
