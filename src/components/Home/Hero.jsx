"use client";
import React from "react";
// import { Boxes } from "../ui/backgroud-boxes";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import gridbg from '../../assets/gridbg.png'

function IlakkanamHero() {
return (

    <div className="min-h-screen relative w-full overflow-hidden flex flex-col items-center bg-slate-950 md:bg-transparent pt-20 justify-center px-4 py-8">
        <img src={gridbg}className="-z-50 absolute top-0 left-0 w-full  min-h-screen" alt="" />
        {/* <div className="absolute inset-0  h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
        {/* <Boxes /> */}
        
        <div className="relative z-20 max-w-4xl backdrop-blur-[3px] mx-auto text-center space-y-6">
            <h1
                className={cn(
                    "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4",
                    "bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
                )}
            >
                Welcome to ILAKKANAM
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-200 mb-6">
                Where Innovation Meets Purpose
            </h2>

            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed  max-w-3xl mx-auto mb-8">
                We are a research-driven company transforming ideas into real-world solutions.
                From engineering to emerging technologies, we collaborate, innovate, and create
                with passion and precision.
            </p>

            <div className="flex items-center justify-center space-x-3 mb-10">
                <p className="text-lg md:text-xl text-cyan-200 font-medium italic">
                    Empowering progress through creativity, trust, and world-class R&D
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="relative z-10">Explore Our Services</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <Link to="/contactus" className="group cursor-pointer relative px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="relative z-10">Get in Touch</span>
                </Link>
            </div>
        </div>
    </div>
);
}

export default IlakkanamHero;