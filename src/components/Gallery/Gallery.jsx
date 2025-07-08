import React from "react";
import Gallery1 from "./Gallery1";
import images from "./Gallery1data"
function Gallery() {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
        Gallery of Growth & Community
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
        Dive into the experiences, events, and collaborations that empower our
        students, mentors, and startups alike.
      </p>
      <Gallery1 images={images}/>
     
      </div>
  
  );
}

export default Gallery;
