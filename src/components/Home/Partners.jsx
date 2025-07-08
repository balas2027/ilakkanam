import React, { useEffect, useRef, useState } from 'react';

const LogoCarousel = () => {
  const carouselRef = useRef(null);
  const [centerLogo, setCenterLogo] = useState(0);

  const logos = [
    {
      name: "Facebook",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
    },
    {
      name: "Disney",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
    },
    {
      name: "Airbnb",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
    },
    {
      name: "Apple",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
    },
    {
      name: "Spark",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg"
    },
    {
      name: "Samsung",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
    },
    {
      name: "Quora",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
    },
    {
      name: "Sass",
      colorSrc: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg",
      bwSrc: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg"
    }
  ];

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateCenterLogo = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      
      const logoElements = carousel.querySelectorAll('.logo-item');
      let closestIndex = 0;
      let closestDistance = Infinity;

      logoElements.forEach((logo, index) => {
        const logoRect = logo.getBoundingClientRect();
        const logoCenter = logoRect.left + logoRect.width / 2;
        const distance = Math.abs(logoCenter - carouselCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index % logos.length;
        }
      });

      setCenterLogo(closestIndex);
    };

    const interval = setInterval(updateCenterLogo, 100);
    
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative h-50 bg-black flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            
            {/* Logo Carousel animation */}
            <div
              ref={carouselRef}
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
                {duplicatedLogos.map((logo, index) => {
                  const originalIndex = index % logos.length;
                  const isCenter = originalIndex === centerLogo;
                  
                  return (
                    <div
                      key={`${logo.name}-${index}`}
                      className="logo-item mx-8 transition-all duration-500 ease-in-out flex-shrink-0"
                    >
                      <img
                        src={logo.colorSrc}
                        alt={logo.name}
                        className={`max-w-none transition-all duration-500 transform ${
                          isCenter 
                            ? 'scale-110 opacity-100 filter-none' 
                            : 'scale-100 opacity-60 grayscale'
                        }`}
                        style={{
                          filter: isCenter ? 'none' : 'grayscale(100%) brightness(0.7)'
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* End: Logo Carousel animation */}
            
          </div>
        </div>
      </main>
    </div>
  );
};

// Add the required CSS animation
const styles = `
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 30s linear infinite;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default LogoCarousel;