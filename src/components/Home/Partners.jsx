import React, { useEffect, useRef, useState } from "react";
import partner1 from "../../assets/Partners/partner1.png";
import partner2 from "../../assets/Partners/partner2.png";
import partner3 from "../../assets/Partners/partner3.png";
import partner4 from "../../assets/Partners/partner4.png";

const LogoCarousel = () => {
  const carouselRef = useRef(null);
  const [centerLogo, setCenterLogo] = useState(0);

  const logos = [
    {
      name: "Facebook",
      colorSrc: partner1,
    },
    {
      name: "Disney",
      colorSrc: partner2,
    },
    {
      name: "Airbnb",
      colorSrc: partner3,
    },
    {
      name: "Apple",
      colorSrc: partner4,
    },
  ];

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateCenterLogo = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;

      const logoElements = carousel.querySelectorAll(".logo-item");
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
      <main className="relative h-60 bg-black flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <h2 className="md:text-6xl sm:text-5xl text-shadow-amber-300 text-shadow-2xs  text-3xl sm:mb-15 font-bold text-white/90 mb-6">
              Our Partners
            </h2>
            {/* Logo Carousel animation */}
            <div
              ref={carouselRef}
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <div className="flex items-center justify-center md:justify-start gap-10 animate-infinite-scroll">
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
                            ? "scale-110 opacity-100 filter-none"
                            : "scale-100 opacity-60 grayscale"
                        }`}
                        style={{
                          filter: isCenter
                            ? "none"
                            : "grayscale(100%) brightness(0.7)",
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
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default LogoCarousel;
