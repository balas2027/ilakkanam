import React, { useState, useRef } from 'react';
import image1 from '../../assets/HomePageProducts/product1.jpeg'
import image2 from '../../assets/HomePageProducts/product2.jpeg'
import image3 from '../../assets/HomePageProducts/product3.png'
import image4 from '../../assets/HomePageProducts/product4.png'
import image5 from '../../assets/HomePageProducts/product5.png'
import image6 from '../../assets/HomePageProducts/product6.jpeg'

// Data Component - Contains all project data
const projectsData = [
  {
    id: 1,
    url: image6 ,
    title: "Hand-Held Braille Device",
    category: "Assistive Technology",
    stage: "Patent Filed",
    overview: "Revolutionary handheld device translating media and text content into Braille characters in real-time.",
    description: "This innovative project focuses on developing a portable Braille translation device that bridges the gap between digital content and accessibility. Our solution features a specialized character display with six raising dot matrix pellets based on spherical ball bearings, capable of rendering a single Braille character at a time with exceptional precision.",
    keyFeatures: [
      "Real-time text-to-Braille translation",
      "Spherical ball bearing dot matrix system", 
      "Portable handheld design",
      "Multi-format content support",
      "Advanced character recognition"
    ],
    technicalSpecs: [
      "Six-dot Braille cell display",
      "Tactile feedback mechanism",
      "Battery life: 12+ hours",
      "USB-C connectivity",
      "Weight: 280g"
    ],
    impact: "Empowering visually impaired individuals with instant access to digital content"
  },
  {
    id: 2,
    url: image3,
    title: "Intelligent Head Protecting Safety Helmet",
    category: "IoT & Safety",
    stage: "Production Ready",
    overview: "Smart helmet with 360° recording, environmental sensors, and AI-powered safety features for enhanced workplace safety.",
    description: "An advanced safety helmet engineered for vehicle riders, industrial workers, and outdoor professionals. This intelligent system integrates sophisticated safety features with real-time monitoring capabilities, powered by a central microcontroller with embedded AI algorithms and photo-voltaic cells for continuous operation.",
    keyFeatures: [
      "360° camera recording system",
      "Voice-controlled interface", 
      "Integrated cooling fans",
      "Photo-voltaic power system",
      "Multi-sensor environmental monitoring"
    ],
    technicalSpecs: [
      "4K recording capability",
      "Voice recognition accuracy: 95%",
      "Solar charging efficiency: 22%",
      "Operating temperature: -20°C to 60°C",
      "Impact resistance: DOT certified"
    ],
    impact: "Reducing workplace accidents by 45% through predictive safety measures"
  },
  {
    id: 3,
    url: image4,
    title: "Active Vacuum Suspension System",
    category: "Automotive Innovation", 
    stage: "Testing Phase",
    overview: "Affordable active suspension system using pneumatic cylinders and vacuum technology for superior ride quality.",
    description: "Revolutionary suspension system that combines comfort and handling at an affordable cost. Our solution utilizes four double-acting pneumatic cylinders with compressed air and high vacuum pump technology to provide superior ride quality previously available only in luxury vehicles, making advanced suspension accessible to mainstream automotive market.",
    keyFeatures: [
      "Double-acting pneumatic cylinders",
      "High vacuum pump integration",
      "Real-time pressure adjustment",
      "Relay-controlled adaptive system",
      "Cost-effective manufacturing design"
    ],
    technicalSpecs: [
      "Response time: <50ms",
      "Pressure range: 0-15 bar", 
      "Vacuum level: -0.9 bar",
      "Load capacity: 2000kg",
      "Power consumption: 180W"
    ],
    impact: "Making advanced suspension technology accessible to mainstream automotive market"
  },
  {
    id: 4,
    url: image5,
    title: "KARTHAVYA - Data Acquisition System",
    category: "AI & Workforce Management",
    stage: "Deployed",
    overview: "Comprehensive facial recognition attendance system with health monitoring and AR-powered virtual assistance.",
    description: "Advanced workforce management solution featuring facial recognition-based attendance tracking, real-time health monitoring through IR temperature sensors, and cloud-based HRM dashboard. The system includes an augmented reality virtual assistant that guides employees through daily tasks and provides COVID-19 compliance monitoring.",
    keyFeatures: [
      "Facial recognition attendance (3sec detection)",
      "IR-based temperature monitoring",
      "Cloud-based HRM dashboard",
      "COVID-19 compliance tracking",
      "AR virtual assistant integration"
    ],
    technicalSpecs: [
      "Recognition accuracy: 99.7%",
      "Detection time: <3 seconds",
      "Temperature accuracy: ±0.3°C",
      "Cloud storage: Unlimited",
      "Multi-device synchronization"
    ],
    impact: "Streamlining workforce management while ensuring health and safety compliance"
  },
  {
    id: 5,
    url:image1,
    title: "Hybrid Solar Desalination System",
    category: "Renewable Energy",
    stage: "Prototype Testing",
    overview: "Innovative solar-powered water purification system producing both fresh water and electricity simultaneously.",
    description: "Revolutionary desalination system that couples solar panels with water purification technology. Our hybrid approach produces fresh water at 5L/M²/day while simultaneously generating electricity. Enhanced with nano fluids, PCM, pebbles, and pre-heaters for optimal performance, this system represents a sustainable solution for water-scarce regions.",
    keyFeatures: [
      "Dual output: Water + Electricity",
      "Nano fluid enhancement technology",
      "PCM thermal storage integration",
      "Pebble bed heat recovery",
      "Integrated solar panel design"
    ],
    technicalSpecs: [
      "Water production: 5L/M²/day",
      "Solar efficiency: 18%",
      "Desalination rate: 95%",
      "Power output: 250W/m²",
      "Operating temperature: 60-80°C"
    ],
    impact: "Providing sustainable water and energy solutions for remote communities"
  },
  {
    id: 6,
    url: image2,
    title: "Adaptive Handicap Vehicle",
    category: "Mobility Solutions",
    stage: "Production Ready",
    overview: "Three-wheeled vehicle with adaptive controls designed specifically for individuals with mobility challenges.",
    description: "Specially designed three-wheeled vehicle featuring innovative steering mechanisms that can be operated with legs or handlebars, depending on the user's abilities. The ergonomic seat design provides superior comfort and control, while the three-wheel configuration ensures optimal balance and stability for users with different mobility needs.",
    keyFeatures: [
      "Adaptive steering system (leg/hand control)",
      "Ergonomic seat design",
      "Three-wheel stability configuration", 
      "Safety-focused structural design",
      "Customizable control interfaces"
    ],
    technicalSpecs: [
      "Max speed: 45 km/h",
      "Range: 80km per charge",
      "Weight capacity: 150kg",
      "Turning radius: 2.5m",
      "Ground clearance: 180mm"
    ],
    impact: "Enabling independent mobility for individuals with physical disabilities"
  }
];


export default projectsData;