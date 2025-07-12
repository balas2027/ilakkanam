import React from "react";
import { Link } from "react-router-dom";
import ah from "../../assets/About/ah.jpeg";
import aw from "../../assets/About/aw.jpg";
import domain from "../../assets/About/domain.jpg";
import domain1 from "../../assets/About/domain1.jpeg";
import domain2 from "../../assets/About/domain2.jpeg";
import domain3 from "../../assets/About/domain3.jpeg";
import contact from "../../assets/About/contact.jpeg";
import { ArrowRight } from "lucide-react";
function About() {
  return (
    <div className="mt-20 lg:mt-30 sm:mx-10 mx-3 lg:space-y-30 md:space-y-10 space-y-10  md:w-190 lg:w-250 xl:w-315 md:mx-auto">
      <div className="hero flex md:flex-row flex-col justify-center md:space-x-5  lg:space-x-10 lg:h-120 xl:h-150 md:h-100 ">
        <div className=" flex flex-col justify-between content xl:w-150 lg:w-130 md:w-80">
          <h1 className=" lg:text-6xl xl:text-7xl  text-4xl font-bold">
            Innovating with Purpose
          </h1>
          <p className="   lg:text-xl text-sm mt-5 md:mt-0  w-full mb-10 md:mb-0 font-medium text-gray-500 text-justify">
            We are a research-first innovation company empowering industries
            through advanced engineering and R&D. Our team of passionate
            researchers, developers, and creators turn complex challenges into
            scalable solutions.
              <a href='contactus' className="bg-black group max-w-fit mt-5  cursor-pointer text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-white hover:text-black border duration-500 transition-colors">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5  arrow-icon" />
              </a>
          </p>
        </div>
        <div className="image lg:w-125 xl:w-150 md:w-100">
          <img src={ah} alt="" className="rounded-3xl  md:w-auto" />
        </div>
      </div>

      <div>
        <div id="who-we-are" className="lg:text-6xl xl:text-7xl  text-4xl  mb-5 font-bold">
           Who we are?
        </div>
        <div className="who flex space-y-5 md:space-y-0 md:flex-row flex-col w-full space-x-3 justify-between">
          <div className="image w-full lg:w-125 xl:w-150 md:w-100">
            <img src={aw} alt="" className="rounded-3xl" />
          </div>
          <div className="content w-full flex flex-col space-y-4  md:justify-between  lg:w-125 xl:w-150 md:w-100 ">
            <div className="box1 w-full p-3  flex flex-col justify-center   border  border-gray-500 bg-gray-200/80 rounded-2xl">
              <h1 className="xl:text-4xl text-3xl font-semibold">
                Our Mission
              </h1>
              <p className="lg:text-lg md:text-sm  sm:text-xl mt-3 lg:mt-0">
                At Ilakkanam, our mission is to empower industries through
                breakthrough engineering and research. We are dedicated to
                delivering innovative, reliable, and scalable solutions that
                drive real-world impact and long-term growth.
              </p>
            </div>

            <div className="box2 w-full p-3 flex flex-col justify-center   border-gray-500 border  bg-gray-200/80 rounded-2xl">
              <h1 className="xl:text-4xl text-3xl font-semibold">Our Vision</h1>
              <p className="lg:text-lg md:text-sm  sm:text-xl mt-3 lg:mt-0">
                Our vision is to be a global leader in research and development,
                fostering innovation across industries. We strive to shape the
                future by building technology that’s sustainable, intelligent,
                and purpose-driven.
              </p>
            </div>
            <div className="box3  w-full flex flex-col justify-center border border-gray-500   p-3 bg-gray-200/80 rounded-2xl">
              <h1 className="xl:text-4xl text-3xl font-semibold">Our Values</h1>
              <p className="lg:text-lg  md:text-sm sm:text-xl mt-3 lg:mt-0">
                Our core values guide every project we undertake. We are built
                on trust, fueled by creativity, and committed to excellence.
                Through innovation, collaboration, and integrity, we help our
                clients stay ahead in an ever-evolving world.
              </p>
            </div>
          </div>
        </div>
      </div>


<div>
 <div className="lg:text-6xl xl:text-7xl  text-4xl  mb-5 font-bold">
            Why choose us?
          </div>
          <div className="flex-col flex w-full items-center  space-y-10  mt-10 h-600 md:h-500">
            <div className="bg-gray-100 md:h-100   sticky border border-gray-400  top-20 flex md:flex-row md:space-y-0 space-y-5 flex-col md:justify-between  sm:w-140 md:w-190 lg:w-250  w-95 p-3 rounded-2xl animation-small">
              <div className="lg:w-140 md:w-100  flex-col flex  justify-center space-y-10">
                <h1 className="heading sm:text-5xl text-3xl text-slate-950 font-semibold">
                  Deep Domain Expertise
                </h1>
                <p className="sm:text-xl font-medium text-justify">
                  With extensive experience across engineering, research, and
                  technology domains, we bring a deep understanding of
                  industrial challenges and emerging opportunities. From product
                  innovation to R&D consulting, we tailor solutions that make a
                  difference.
                </p>
              </div>
              <div className="image flex justify-center items-center">
                <img
                  src={domain}
                  alt=""
                  className="rounded-3xl  md:w-80 lg:w-90 md:h-80 lg:h-90 h-70 w-full "
                />
              </div>
            </div>
            <div className="bg-white  md:h-100   sticky border border-gray-400  top-35 flex md:flex-row md:space-y-0 space-y-5 flex-col md:justify-between  sm:w-140 md:w-190 lg:w-250  w-95 p-3 rounded-2xl animation-small">
              <div className="lg:w-140 md:w-100  flex-col flex  justify-center space-y-10">
                <h1 className="heading sm:text-5xl text-3xl text-slate-950 font-semibold">
                  End-to-End Collaboration
                </h1>
                <p className="sm:text-xl font-medium text-justify">
                  We believe in strong partnerships. From idea to execution, we
                  work closely with clients, institutions, and stakeholders to
                  ensure transparency, agility, and success at every stage of
                  the process.
                </p>
              </div>
              <div className="image flex justify-center items-center">
                <img
                  src={domain1}
                  alt=""
                  className="rounded-3xl  md:w-80 lg:w-90 md:h-80 lg:h-90 h-70 w-full "
                />
              </div>
            </div>
            <div className="bg-gray-100  md:h-100   sticky border border-gray-400  top-50 flex md:flex-row md:space-y-0 space-y-5 flex-col md:justify-between  sm:w-140 md:w-190 lg:w-250  w-95 p-3 rounded-2xl animation-small">
              <div className="lg:w-140 md:w-100  flex-col flex  justify-center space-y-10">
                <h1 className="heading sm:text-5xl text-3xl text-slate-950 font-semibold">
                  Reliable & Long-Term Support
                </h1>
                <p className="sm:text-xl font-medium text-justify">
                  Our commitment doesn’t end with project delivery. We provide
                  ongoing support, performance optimization, and innovation
                  updates to ensure your solutions remain effective and
                  future-ready.
                </p>
              </div>
              <div className="image flex justify-center items-center">
                <img
                  src={domain2}
                  alt=""
                  className="rounded-3xl  md:w-80 lg:w-90 md:h-80 lg:h-90 h-70 w-full "
                />
              </div>
            </div>
            <div className="bg-white  md:h-100   sticky border border-gray-400  top-65 flex md:flex-row md:space-y-0 space-y-5 flex-col md:justify-between  sm:w-140 md:w-190 lg:w-250  w-95 p-3 rounded-2xl animation-small">
              <div className="lg:w-140 md:w-100  flex-col flex  justify-center space-y-10">
                <h1 className="heading sm:text-5xl text-3xl text-slate-950 font-semibold">
                   Innovation That Delivers
                </h1>
                <p className="sm:text-xl font-medium text-justify">
                   We don’t just explore new ideas — we engineer them into actionable, scalable results. Our forward-thinking approach is rooted in research and designed to help you stay ahead of the curve.
                </p>
              </div>
              <div className="image flex justify-center items-center">
                <img
                  src={domain3}
                  alt=""
                  className="rounded-3xl  md:w-80 lg:w-90 md:h-80 lg:h-90 h-70 w-full "
                />
              </div>
            </div>
          </div>
        </div>





  <div className="mx-auto px-4 py-20">
          <div
            className="rounded-3xl p-10 md:px-16 md:py-40 text-center shadow-2xl"
            style={{
              background: `url(${contact}) center/cover no-repeat`,

            }}
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white  font-bold mb-8  transform transition duration-700 ease-out hover:scale-105">
              Let’s turn your ideas into impactful realities.
            </h2>

            {/* Button */}
            <a
              href="contactus"
              className="inline-flex items-center gap-2 text-lg md:text-xl bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-black hover:text-white border-2 border-white group"
            >
              Contact Now
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.4766 6.1664L6.00665 1.6964L7.18498 0.518066L13.6666 6.99973L7.18498 13.4814L6.00665 12.3031L10.4766 7.83307H0.333313V6.1664H10.4766Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>


    </div>
  );
}

export default About;
