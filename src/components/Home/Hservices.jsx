import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import image1 from "../../assets/HomePageServices/innovation.png";
import image2 from "../../assets/HomePageServices/engineering.png";
import image3 from "../../assets/HomePageServices/rd.webp";
import image4 from "../../assets/HomePageServices/startup.png";
import image5 from "../../assets/HomePageServices/website.png";
import images from "../../assets/bg.png";

function ServicesCarousel() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Student Innovation & Engagement Services",
      description:
        "Empowering young innovators through guided mentorship, real-time prototyping, and active participation in hackathons, internships, and industry collaborations. We bridge the gap between academics and innovation by helping students turn their ideas into impactful solutions.",

      image: image1,
    },
    {
      id: 2,
      title: "Engineering & Technology Services",
      description:
        "From design to deployment, we develop scalable, robust solutions in embedded systems, IoT, and automation. Our expert team transforms technical concepts into real-world applications, helping clients across domains build next-gen tech products.",

      image: image2,
    },
    {
      id: 3,
      title: "Consulting, R&D & Business Enablement",
      description:
        "We offer expert consulting, market-aligned R&D, and business support to accelerate innovation. From concept validation to execution strategy, we help startups and enterprises unlock growth with tailored guidance and technical expertise.",
      image: image3,
    },
    {
      id: 4,
      title: "Start-Up & Project Enablement",
      description:
        "We empower startups and MSMEs to thrive with the right ecosystem—offering end-to-end project support, funding assistance, and execution frameworks to help you go from concept to company.",
      image: image4,
    },
    {
      id: 5,
      title: "Reliable Digital Solutions & Web Services",
      description:
        "We craft reliable, scalable, and modern web solutions. From PHP and MERN development to complete e-commerce platforms and hosting services, Ilakkanam helps you bring your digital ideas to life.",
      image: image5,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);

  const onclick = (value) => {
    if (value > services.length) {
      value = 1;
    } else if (value < 1) {
      value = services.length;
    }
    setCurrentSlide(value);
    console.log(value);
  };

  return (
    <div className=" group relative bg-gray-100/50 py-10 md:py-20">
      <div className="absolute h-52 z-10 bottom-0 w-full rounded-t-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-100/1 via-blue-100/10 to-blue-200 pointer-events-none"></div>
      <div className="absolute h-52 z-10 top-0 w-full rounded-b-full transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 bg-gradient-to-b from-blue-200 via-blue-100/10 to-blue-100/1 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your business and drive
            digital transformation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-16 items-center">
          {/* Vertical Carousel */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Carousel Container */}
              <div className="h-96 overflow-hidden">
                <div
                  className="flex flex-col transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateY(-${currentSlide * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="min-h-full flex-shrink-0 p-2 sm:p-8"
                    >
                      <div className="h-full flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="w-12 sm:flex hidden h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full items-center justify-center text-white font-bold text-lg mr-4">
                            {service.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="xl:text-4xl text-3xl text-white text-shadow-md text-shadow-cyan-900 text-center font-bold">
                  {service.title}
                </h2>
                <p className=" text-xl  text-shadow-md  text-shadow-cyan-950  text-center  text-gray-100">
                  {service.description}
                </p>
              </div>
            ))}
            <div className="flex z-10 flex-row sm:gap-5 gap-10 absolute bottom-5 w-full justify-center items-center">
              <button
                className="cursor-pointer flex items-center justify-center  h-10 w-10 bg-gray-300 text-black rounded-full"
                onClick={() => onclick(currentSlide - 1)}
              >
                <ChevronUp />
              </button>
              <button
                className="cursor-pointer flex items-center justify-center  h-10 w-10 bg-gray-300 text-black rounded-full"
                onClick={() => onclick(currentSlide + 1)}
              >
                <ChevronDown />
              </button>
            </div>
          </div>
          <div className="image mx-5 hidden lg:w-1/2 lg:h-150 md:h-130 h-100 lg:flex items-center justify-center">
            <img src={images} className="object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCarousel;
