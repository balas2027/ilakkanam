import React from "react";
import {
  Search,
  Lightbulb,
  Code2,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";

const DevelopmentStages = () => {
  const stages = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description:
        "Deep-dive research into market needs, technical requirements, and user pain points to establish project foundations.",
      phase: "Phase 01",
    },
    {
      icon: Lightbulb,
      title: "Concept & Strategy",
      description:
        "Strategic planning and conceptual design to align technical solutions with business objectives and user needs.",
      phase: "Phase 02",
    },
    {
      icon: Code2,
      title: "Development & Engineering",
      description:
        "Agile development process utilizing cutting-edge technologies and best practices for robust solution creation.",
      phase: "Phase 03",
    },
    {
      icon: TestTube,
      title: "Testing & Optimization",
      description:
        "Comprehensive quality assurance, performance testing, and iterative optimization for maximum reliability.",
      phase: "Phase 04",
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description:
        "Seamless deployment strategies with minimal downtime and comprehensive launch support systems.",
      phase: "Phase 05",
    },
    {
      icon: Headphones,
      title: "Support & Evolution",
      description:
        "Ongoing maintenance, feature enhancements, and continuous improvement based on real-world feedback.",
      phase: "Phase 06",
    },
  ];

  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              How We Develop
              <span className="block text-gray-700">Your Solutions</span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our proven development methodology ensures every project delivers
              exceptional results through systematic planning, execution, and
              continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 bg-white lg:hover:z-10 lg:hover:scale-135 lg:hover:shadow-2xl rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-2 ${
                    index === 0 || index === 3 ? "lg:col-span-1" : ""
                  } ${index === 1 || index === 4 ? "md:col-span-1" : ""}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-black/20 bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                        <Icon className="w-7 h-7 text-black" />
                      </div>

                      <span className="text-sm font-mono text-gray-900">
                        {stage.phase}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-gray-800 transition-colors">
                        {stage.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="w-full h-1 bg-white border border-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black transition-all duration-1000 group-hover:w-full"
                        style={{
                          width: `${((index + 1) / stages.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStages;
