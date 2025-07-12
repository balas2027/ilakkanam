"use client";
import React from "react";
// import { Boxes } from "../ui/backgroud-boxes";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import gridbg from "../../../public/gridbg.webp";
import styles from "../../css/home.module.css";

function IlakkanamHero() {
  return (
    <>
      <div className=" min-h-screen bg-slate-950 md:bg-transparent space-y-10 flex flex-col justify-center items-center relative py-20 ">
        <img
          src={gridbg}
          className="-z-50 absolute  md:block hidden top-0 left-0 w-full h-full object-cover brightness-70"
          alt=""
        />
        <div className="xl:max-w-7xl backdrop-blur-[2px] text-center  xl:mx-auto sm:mx-20 mx-3">
          <h1
            className={`text-4xl ${styles["heading-animation"]}  md:text-6xl lg:text-7xl text-4xl font-bold text-white mb-4`}
          >
            Welcome to ILAKKANAM
          </h1>
          <h2
            className={`text-2xl ${styles["heading-animation"]} md:text-4xl font-semibold text-blue-200 mb-6`}
          >
            Where Innovation Meets Purpose
          </h2>
          <p
            className={`text-lg pt-5  ${styles["subheading-animation"]} md:text-xl text-neutral-300 leading-relaxed  max-w-3xl mx-auto mb-8`}
          >
            We are a research-driven company transforming ideas into real-world
            solutions. From engineering to emerging technologies, we
            collaborate, innovate, and create with passion and precision.
          </p>
        </div>
        <div
          className={`flex ${styles["para-animation"]} flex-col sm:flex-row gap-4 justify-center items-center`}
        >
          <a href="services" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="relative z-10">Explore Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <Link
            to="/contactus"
            className="group cursor-pointer relative px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default IlakkanamHero;
