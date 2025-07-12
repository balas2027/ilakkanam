import React from "react";
import SaasProductGallery from "./SaasProductGallery";
import projectsData from "./ProjectsData";
import Phero from "./Phero";
import Pdevstage from "./Pdevstage";
import Whywe from "./Whywe";
function Projects() {
  return (
    <div>
      <Phero />
      <Whywe />
      <div id="contact">
      <SaasProductGallery projects={projectsData} />
      </div>
      <Pdevstage />

      {/*cta */}
      <section className="bg-white text-black pb-20 sm:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black sm:p-16 p-5 rounded-3xl text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
            <div className="relative">
              <h2 className="text-3xl  md:text-6xl font-bold mb-8">
                Ready to Build the
                <br />
                Future with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you're scaling your business, integrating smarter
                solutions, or launching a bold new product — Ilakkanam is here
                to power your innovation.
                <br />
                <p>
                  Let’s co-create technology that transforms industries and
                  impacts lives.
                </p>
              </p>
              <a href="contactus" className="bg-white text-black  sm:px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-200 shadow-2xl hover:bg-black cursor-pointer hover:text-white">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
