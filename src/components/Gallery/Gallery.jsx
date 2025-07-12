import React from "react";
import Gallery1 from "./Gallery1";
import images from "./Gallery1data";
import images1 from "./Gallery2data";
import hero from "../../assets/Gallery/hero.png";
import { ArrowRight } from "lucide-react";
function Gallery() {
  return (
    <div className="mt-20 xl:max-w-7xl w-full xl:mx-auto sm:mx-10 mx-3 ">
      <div className=" md:flex-row flex-col flex space-y-5 py-5 sm:py-20">
        <div className="content md:w-1/2 flex flex-col justify-center md:items-start items-center">
          <h1 className="lg:text-7xl sm:text-5xl  text-3xl font-extrabold md:text-left text-center text-gray-900 mb-4 sm:mb-8">
            Gallery of Growth & Community
          </h1>
          <p className="text-lg sm:text-2xl md:text-left text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Dive into the experiences, events, and collaborations that empower
            our students, mentors, and startups alike.
          </p>
          <a
            href="https://www.linkedin.com/company/ilakkanam-private-limited/"
            className={`text-white max-w-fit text-lg group hover:bg-white hover:text-black hover:border transition-all duration-700 border-black font-medium bg-black p-3 sm:px-6 sm:py-4 rounded-xl`}
          >
            Join Ilakkanam Community
            <ArrowRight className={`inline ml-2 arrow-icon`} />
          </a>
        </div>
        <div className="image lg:h-130 md:h-120 h-100 flex justify-end md:w-1/2">
          {<img src={hero} className="h-full w-full object-cover" alt="" />}
        </div>
      </div>
      <Gallery1 images={images} />
      <Gallery1 images={images1} />
    </div>
  );
}

export default Gallery;
