import React, { useState } from "react";
import Shero from "./Shero";
import TechServices from "./TechServices";
import StudentInnovation from "./StudentInnovation";
import Consulting from "./Consulting";
import StartUp from "./StartUp";
import WebDevelopment from "./WebDevelopment";
import {ArrowRight } from "lucide-react";



const Ilakkanam = () => {
  const [active, setactive] = useState(0);
 
  function click(num) {
    const value = num;

    setactive(value);
  }

  console.log(active);
 
  
   

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - White Background */}
      <Shero />
      <h2 className="text-5xl text-center mt-10 text-white md:text-6xl font-bold mb-8">
        Explore Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
          Core Services
        </span>
      </h2>

      {/* tabs */}
      <div id="servicescore" className="text-white grid grid-cols-2 sm:grid-cols-4 pb-5 gap-5 sm:max-w-7xl mx-auto border-b-blue-400/15 border-b-1 text-xl sm:font-bold sm:text-2xl justify-center w-full sm:gap-10 mt-10">
        <button
          style={{
            color: active === 0 ? "rgba(240, 0, 120, 1)" : "white",
            borderBottom:
              active === 0 ? "1px solid rgba(221, 66, 120, 1)" : "none",
          }}
          className={`transition-all cursor-pointer p-3 justify-self-center max-w-fit duration-200 ${
            active === 0 ? "" : ""
          } flex items-center gap-2`}
          onClick={() => click(0)}
        >
          Student Innovation
          {active !== 0 && (
            <span className="ml-1">
              <ArrowRight className="inline w-5 h-5" />
            </span>
          )}
        </button>

        <button
          style={{
            color: active === 1 ? "rgba(240, 0, 120, 1)" : "white",
            borderBottom:
              active === 1 ? "1px solid rgba(221, 66, 120, 1)" : "none",
          }}
          className={`transition-all cursor-pointer p-3 justify-self-center max-w-fit duration-200 ${
            active === 1 ? "" : ""
          } flex items-center gap-2`}
          onClick={() => click(1)}
        >
          Tech Services
          {active !== 1 && (
            <span className="ml-1">
              <ArrowRight className="inline w-5 h-5" />
            </span>
          )}
        </button>

        <button
          style={{
            color: active === 2 ? "rgba(240, 0, 120, 1)" : "white",
            borderBottom:
              active === 2 ? "1px solid rgba(221, 66, 120, 1)" : "none",
          }}
          className={`transition-all cursor-pointer p-3 justify-self-center max-w-fit duration-200 ${
            active === 2 ? "" : ""
          } flex items-center gap-2`}
          onClick={() => click(2)}
        >
          Consulting Services
          {active !== 2 && (
            <span className="ml-1">
              <ArrowRight className="inline w-5 h-5" />
            </span>
          )}
        </button>

        <button
          style={{
            color: active === 3 ? "rgba(240, 0, 120, 1)" : "white",
            borderBottom:
              active === 3 ? "1px solid rgba(221, 66, 120, 1)" : "none",
          }}
          className={`transition-all cursor-pointer p-3 justify-self-center max-w-fit duration-200 ${
            active === 3 ? "" : ""
          } flex items-center gap-2`}
          onClick={() => click(3)}
        >
          Startup Support
          {active !== 3 && (
            <span className="ml-1">
              <ArrowRight className="inline w-5 h-5" />
            </span>
          )}
        </button>
      </div>

      {/*Student Innovation */}

      <section
        className="bg-black text-white pt-10 pb-20 "
        style={{
          display: active === 0 ? "block" : "none",
        }}
      >
        <StudentInnovation />
      </section>

      {/* tech services  */}
      <section
        className="bg-black text-white pt-10 pb-20"
        style={{
          display: active === 1 ? "block" : "none",
        }}
      >
        <TechServices />
      </section>

      {/*consulting*/}

      <section
        className="bg-black text-white pt-10 pb-20"
        style={{
          display: active === 2 ? "block" : "none",
        }}
      >
        <Consulting />
      </section>

      {/*StartUp*/}

      <section
        className="bg-black text-white pt-10 pb-20"
        style={{
          display: active === 3 ? "block" : "none",
        }}
      >
        <StartUp />
      </section>

      {/* Web Development */}

      <section className="bg-white  text-black py-20">
        <WebDevelopment />
      </section>

      {/* Call to Action */}

      <section className="bg-white text-black pb-20 sm:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black sm:p-16 p-5 rounded-3xl text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
            <div className="relative">
              <h2 className="text-3xl  md:text-6xl font-bold mb-8">
                Let's Start Your
                <br />
                Innovation Journey Today
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you're just starting or ready to launch your idea,
                Ilakkanam is your innovation partner. Reach out for mentorship,
                explore our idea bank, or collaborate with like-minded creators.
              </p>
              <a href="https://www.linkedin.com/company/ilakkanam-private-limited/" className="bg-white text-black  sm:px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-200 shadow-2xl hover:bg-gray-800 cursor-pointer hover:text-white">
                Join the Ilakkanam Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ilakkanam;
