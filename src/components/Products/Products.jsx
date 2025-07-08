// import React, { useState, useRef } from 'react';

// function SaasProductGallery() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [modalProject, setModalProject] = useState(null);

//   // Ref for the main showcase section
//   const showcaseRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
//       title: "Hand-Held Braille Device",
//       category: "Assistive Technology",
//       stage: "Patent Filed",
//       overview: "Revolutionary handheld device translating media and text content into Braille characters in real-time.",
//       description: "This innovative project focuses on developing a portable Braille translation device that bridges the gap between digital content and accessibility. Our solution features a specialized character display with six raising dot matrix pellets based on spherical ball bearings, capable of rendering a single Braille character at a time with exceptional precision.",
//       keyFeatures: [
//         "Real-time text-to-Braille translation",
//         "Spherical ball bearing dot matrix system",
//         "Portable handheld design",
//         "Multi-format content support",
//         "Advanced character recognition"
//       ],
//       technicalSpecs: [
//         "Six-dot Braille cell display",
//         "Tactile feedback mechanism",
//         "Battery life: 12+ hours",
//         "USB-C connectivity",
//         "Weight: 280g"
//       ],
//       impact: "Empowering visually impaired individuals with instant access to digital content"
//     },
//     {
//       id: 2,
//       url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
//       title: "Intelligent Head Protecting Safety Helmet",
//       category: "IoT & Safety",
//       stage: "Production Ready",
//       overview: "Smart helmet with 360° recording, environmental sensors, and AI-powered safety features for enhanced workplace safety.",
//       description: "An advanced safety helmet engineered for vehicle riders, industrial workers, and outdoor professionals. This intelligent system integrates sophisticated safety features with real-time monitoring capabilities, powered by a central microcontroller with embedded AI algorithms and photo-voltaic cells for continuous operation.",
//       keyFeatures: [
//         "360° camera recording system",
//         "Voice-controlled interface",
//         "Integrated cooling fans",
//         "Photo-voltaic power system",
//         "Multi-sensor environmental monitoring"
//       ],
//       technicalSpecs: [
//         "4K recording capability",
//         "Voice recognition accuracy: 95%",
//         "Solar charging efficiency: 22%",
//         "Operating temperature: -20°C to 60°C",
//         "Impact resistance: DOT certified"
//       ],
//       impact: "Reducing workplace accidents by 45% through predictive safety measures"
//     },
//     {
//       id: 3,
//       url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
//       title: "Active Vacuum Suspension System",
//       category: "Automotive Innovation",
//       stage: "Testing Phase",
//       overview: "Affordable active suspension system using pneumatic cylinders and vacuum technology for superior ride quality.",
//       description: "Revolutionary suspension system that combines comfort and handling at an affordable cost. Our solution utilizes four double-acting pneumatic cylinders with compressed air and high vacuum pump technology to provide superior ride quality previously available only in luxury vehicles, making advanced suspension accessible to mainstream automotive market.",
//       keyFeatures: [
//         "Double-acting pneumatic cylinders",
//         "High vacuum pump integration",
//         "Real-time pressure adjustment",
//         "Relay-controlled adaptive system",
//         "Cost-effective manufacturing design"
//       ],
//       technicalSpecs: [
//         "Response time: <50ms",
//         "Pressure range: 0-15 bar",
//         "Vacuum level: -0.9 bar",
//         "Load capacity: 2000kg",
//         "Power consumption: 180W"
//       ],
//       impact: "Making advanced suspension technology accessible to mainstream automotive market"
//     },
//     {
//       id: 4,
//       url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
//       title: "KARTHAVYA - Data Acquisition System",
//       category: "AI & Workforce Management",
//       stage: "Deployed",
//       overview: "Comprehensive facial recognition attendance system with health monitoring and AR-powered virtual assistance.",
//       description: "Advanced workforce management solution featuring facial recognition-based attendance tracking, real-time health monitoring through IR temperature sensors, and cloud-based HRM dashboard. The system includes an augmented reality virtual assistant that guides employees through daily tasks and provides COVID-19 compliance monitoring.",
//       keyFeatures: [
//         "Facial recognition attendance (3sec detection)",
//         "IR-based temperature monitoring",
//         "Cloud-based HRM dashboard",
//         "COVID-19 compliance tracking",
//         "AR virtual assistant integration"
//       ],
//       technicalSpecs: [
//         "Recognition accuracy: 99.7%",
//         "Detection time: <3 seconds",
//         "Temperature accuracy: ±0.3°C",
//         "Cloud storage: Unlimited",
//         "Multi-device synchronization"
//       ],
//       impact: "Streamlining workforce management while ensuring health and safety compliance"
//     },
//     {
//       id: 5,
//       url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
//       title: "Hybrid Solar Desalination System",
//       category: "Renewable Energy",
//       stage: "Prototype Testing",
//       overview: "Innovative solar-powered water purification system producing both fresh water and electricity simultaneously.",
//       description: "Revolutionary desalination system that couples solar panels with water purification technology. Our hybrid approach produces fresh water at 5L/M²/day while simultaneously generating electricity. Enhanced with nano fluids, PCM, pebbles, and pre-heaters for optimal performance, this system represents a sustainable solution for water-scarce regions.",
//       keyFeatures: [
//         "Dual output: Water + Electricity",
//         "Nano fluid enhancement technology",
//         "PCM thermal storage integration",
//         "Pebble bed heat recovery",
//         "Integrated solar panel design"
//       ],
//       technicalSpecs: [
//         "Water production: 5L/M²/day",
//         "Solar efficiency: 18%",
//         "Desalination rate: 95%",
//         "Power output: 250W/m²",
//         "Operating temperature: 60-80°C"
//       ],
//       impact: "Providing sustainable water and energy solutions for remote communities"
//     },
//     {
//       id: 6,
//       url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
//       title: "Adaptive Handicap Vehicle",
//       category: "Mobility Solutions",
//       stage: "Production Ready",
//       overview: "Three-wheeled vehicle with adaptive controls designed specifically for individuals with mobility challenges.",
//       description: "Specially designed three-wheeled vehicle featuring innovative steering mechanisms that can be operated with legs or handlebars, depending on the user's abilities. The ergonomic seat design provides superior comfort and control, while the three-wheel configuration ensures optimal balance and stability for users with different mobility needs.",
//       keyFeatures: [
//         "Adaptive steering system (leg/hand control)",
//         "Ergonomic seat design",
//         "Three-wheel stability configuration",
//         "Safety-focused structural design",
//         "Customizable control interfaces"
//       ],
//       technicalSpecs: [
//         "Max speed: 45 km/h",
//         "Range: 80km per charge",
//         "Weight capacity: 150kg",
//         "Turning radius: 2.5m",
//         "Ground clearance: 180mm"
//       ],
//       impact: "Enabling independent mobility for individuals with physical disabilities"
//     }
//   ];

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const goToSlide = (index) => {
//     setActiveIndex(index);

//     // Smooth scroll to showcase section
//     if (showcaseRef.current) {
//       showcaseRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   const openModal = (project) => {
//     setModalProject(project);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setModalProject(null);
//   };

//   const currentProject = projects[activeIndex];

//   return (
//     <div className="min-h-screen my-25 bg-white">
//       {/* Header */}
//       <div className="border-b border-gray-200 bg-white">
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">Innovation Portfolio</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Cutting-edge engineering solutions addressing real-world challenges through innovative technology and design
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Product Showcase */}
//       <div ref={showcaseRef} className="max-w-7xl  mx-auto px-6 py-22">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Side - Image */}
//           <div className="relative">
//             <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src={currentProject.url}
//                 alt={currentProject.title}
//                 className="w-full h-full object-cover transition-all duration-500"
//               />

//               {/* Navigation Arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>

//               {/* Stage Badge */}
//               <div className="absolute top-6 left-6">
//                 <span className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
//                   {currentProject.stage}
//                 </span>
//               </div>

//               {/* Counter */}
//               <div className="absolute bottom-6 right-6 bg-black/90 text-white px-4 py-2 rounded-full text-sm font-medium">
//                 {activeIndex + 1} of {projects.length}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Project Details */}
//           <div className="space-y-8">
//             <div>

//               <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
//                 {currentProject.title}
//               </h2>

//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 {currentProject.overview}
//               </p>
//             </div>

//             {/* Key Features */}
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
//               <div className="space-y-3">
//                 {currentProject.keyFeatures.slice(0, 4).map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
//                     <span className="text-gray-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex gap-4 pt-4">
//               <button
//                 onClick={() => openModal(currentProject)}
//                 className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
//               >
//                 View Details
//               </button>

//             </div>
//           </div>
//         </div>

//         {/* Project Thumbnails */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Projects</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {projects.map((project, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
//                   index === activeIndex
//                     ? 'ring-4 ring-black shadow-2xl scale-105'
//                     : 'hover:ring-2 hover:ring-gray-300 hover:scale-102 shadow-lg'
//                 }`}
//               >
//                 <img
//                   src={project.url}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
//                 />

//                 <div className={`absolute inset-0 transition-all duration-300 ${
//                   index === activeIndex
//                     ? 'bg-black/20'
//                     : 'bg-black/0 group-hover:bg-black/10'
//                 }`}></div>

//                 <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
//                   <h4 className="text-white text-xs font-semibold leading-tight line-clamp-2">
//                     {project.title}
//                   </h4>
//                 </div>

//                 {index === activeIndex && (
//                   <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
//                 )}

//                 {/* Visual feedback for scroll action */}
//                 <div className={`absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
//                   index !== activeIndex ? 'block' : 'hidden'
//                 }`}>
//                   <div className="bg-white/90 rounded-full p-1">
//                     <svg className="w-3 h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//                     </svg>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Scroll indicator text */}
//           <div className="text-center mt-6">
//             <p className="text-sm text-gray-500">
//               Click any thumbnail to view project details above
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && modalProject && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-8">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalProject.title}</h2>
//                   <div className="flex items-center gap-4">
//                     <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
//                       {modalProject.category}
//                     </span>
//                     <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
//                       {modalProject.stage}
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <img
//                     src={modalProject.url}
//                     alt={modalProject.title}
//                     className="w-full aspect-[4/3] object-cover rounded-xl mb-6"
//                   />
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Description</h3>
//                     <p className="text-gray-600 leading-relaxed">{modalProject.description}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
//                     <div className="space-y-2">
//                       {modalProject.keyFeatures.map((feature, index) => (
//                         <div key={index} className="flex items-center space-x-3">
//                           <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Specifications</h3>
//                     <div className="space-y-2">
//                       {modalProject.technicalSpecs.map((spec, index) => (
//                         <div key={index} className="flex items-center space-x-3">
//                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
//                           <span className="text-gray-600 text-sm">{spec}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 p-6 bg-gray-50 rounded-xl">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Statement</h3>
//                 <p className="text-gray-700">{modalProject.impact}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default SaasProductGallery;

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
              <button className="bg-white text-black  sm:px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-200 shadow-2xl hover:bg-black cursor-pointer hover:text-white">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
