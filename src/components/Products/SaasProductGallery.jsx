import React, {useState,useRef} from "react";

function SaasProductGallery({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  
  // Ref for the main showcase section
  const showcaseRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    
    // Smooth scroll to showcase section
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalProject(null);
  };

  const currentProject = projects[activeIndex];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-white/8 via-black to-white/5 bg-black">
    <div className="text-transparent  bg-clip-text bg-gradient-to-l from-white to-white/60 text-4xl sm:text-5xl text-center font-bold">Explore Our Solutions</div>
      {/* Main Product Showcase */}
      <div ref={showcaseRef} className="max-w-7xl  mx-auto px-6 py-22">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentProject.url}
                alt={currentProject.title}
                className="w-full hover:scale-120  h-full object-cover transition-all duration-1000"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Stage Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 text-white text-sm font-medium rounded-full">
                  {currentProject.stage}
                </span>
              </div>

              {/* Counter */}
              <div className="absolute bottom-6 right-6 bg-black/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                {activeIndex + 1} of {projects.length}
              </div>
            </div>
          </div>

          {/* Right Side - Project Details */}
          <div className="space-y-8">
            <div>
            
              
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                {currentProject.title}
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {currentProject.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <div className="space-y-3">
                {currentProject.keyFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-400 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

         

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => openModal(currentProject)}
                className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                View Details
              </button>
            
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? 'ring-4 ring-black shadow-2xl scale-105'
                    : 'hover:ring-2 hover:ring-gray-300 hover:scale-102 shadow-lg'
                }`}
              >
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full group-hover:scale-135 h-full object-cover transition-all duration-1000 group-hover:brightness-110"
                />
                
                <div className={`absolute inset-0 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-black/20' 
                    : 'bg-black/0 group-hover:bg-black/10'
                }`}></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-xs font-semibold leading-tight line-clamp-2">
                    {project.title}
                  </h4>
                </div>

                {index === activeIndex && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}

                {/* Visual feedback for scroll action */}
                <div className={`absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  index !== activeIndex ? 'block' : 'hidden'
                }`}>
                  <div className="bg-white/90 rounded-full p-1">
                    <svg className="w-3 h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Scroll indicator text */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Click any thumbnail to view project details above
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && modalProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{modalProject.title}</h2>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {modalProject.category}
                    </span>

                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-black/40 flex items-center justify-center p-1 sm:rounded-full hover:bg-black hover:text-white transition-colors  duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={modalProject.url}
                    alt={modalProject.title}
                    className="w-full   aspect-[4/3] object-cover rounded-xl mb-6"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Description</h3>
                    <p className="text-gray-600 leading-relaxed">{modalProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {modalProject.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Specifications</h3>
                    <div className="space-y-2">
                      {modalProject.technicalSpecs.map((spec, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Statement</h3>
                <p className="text-gray-700">{modalProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default SaasProductGallery;