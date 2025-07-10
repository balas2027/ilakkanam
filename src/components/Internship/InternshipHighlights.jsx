import React from "react";
import image1 from "../../assets/Internship/feedback/image1.jpg";
import image2 from "../../assets/Internship/feedback/image2.jpg";
import image3 from "../../assets/Internship/feedback/image3.jpg";
import image4 from "../../assets/Internship/feedback/image4.jpg";
import image5 from "../../assets/Internship/feedback/image5.jpg";
import image6 from "../../assets/Internship/feedback/image6.jpg";
import image7 from "../../assets/Internship/feedback/image7.jpg";
import feed1 from "../../assets/Internship/certificate_distribution/image1.jpg";
import feed2 from "../../assets/Internship/certificate_distribution/image2.jpg";
import feed3 from "../../assets/Internship/certificate_distribution/image3.jpg";
import feed4 from "../../assets/Internship/certificate_distribution/image4.jpg";
import feed5 from "../../assets/Internship/certificate_distribution/image5.jpg";
import feed6 from "../../assets/Internship/certificate_distribution/image6.jpg";
import feed7 from "../../assets/Internship/certificate_distribution/image7.jpg";
import feed8 from "../../assets/Internship/certificate_distribution/image8.jpg";
import feed11 from "../../assets/Internship/certificate_distribution/image12.jpg";
import styles from "../../css/Internship.module.css";

function InternshipHighlights() {
  const arr = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
  ];
  const arr1 = [
    { url: feed1 },
    { url: feed3 },
    { url: feed4 },
    { url: feed2 },
    { url: feed5 },
    { url: feed6 },
    { url: feed11 },
    { url: feed3 },
    { url: feed7 },
    { url: feed8 },

    { url: feed2 },
  ];

  return (
    <div>
      <div className="xl:max-w-7xl mx-3 xl:mx-auto">
        <h1 className="mb-4 mt-20 text-center text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-900 to-slate-950 sm:text-5xl">
          Internship Program Highlights
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          Discover our hands-on internship experiences designed to empower
          students with real-world skills and industry exposure.
        </p>

        <h1 className="text-3xl sm:text-4xl pt-5 font-bold">
          Intership Feedback
        </h1>

        <div className="max-w-7xl mx-auto py-3 sm:py-10 overflow-hidden">
          <div className={`flex space-x-6 ${styles['loop']} ${styles['animate-scroll']} px-4`}>
            {arr.map((images, index) => (
              <div
                key={index}
                className="hover:scale-102 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={images.url}
                  alt="feedback"
                  className="rounded-xl object-cover h-50 sm:h-75 xl:h-90 shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-3xl mt-5 sm:text-4xl font-bold">
          Certificate Distribution
        </h1>
        <div className="max-w-7xl mx-auto py-3 sm:py-10 overflow-hidden">
          <div className={`flex space-x-6 ${styles['loop']} ${styles['animate-scroll1']} px-4`}>
            {arr1.map((images, index) => (
              <div
                key={index}
                className="hover:scale-102 transition-transform duration-300 ease-in-out"
              >
                <img
                  src={images.url}
                  alt="feedback"
                  className="rounded-xl object-cover h-50 sm:h-75 xl:h-90 shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipHighlights;
