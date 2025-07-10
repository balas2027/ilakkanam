import React from "react";
import image1 from "../../assets/HomePageServices/innovation.png";
import image2 from "../../assets/HomePageServices/engineering.png";
import image3 from "../../assets/HomePageServices/rd.png";
import image4 from "../../assets/HomePageServices/startup.png";
import image5 from "../../assets/HomePageServices/website.png";

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
export default services;
