import React from "react";
import { Settings, Rocket, Brain, Shield, Activity } from "lucide-react";

const WhyWeStandOut = () => {
  const features = [
    {
      icon: Settings,
      title: "Engineering Excellence",
      description:
        "Precision-crafted solutions built with industry-leading practices and cutting-edge methodologies.",
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description:
        "Future-proof systems designed to grow with your business needs and handle enterprise-level demands.",
    },
    {
      icon: Brain,
      title: "AI & Automation Embedded",
      description:
        "Intelligent automation and machine learning capabilities integrated at the core of every solution.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Military-grade encryption and security protocols protecting your data and operations.",
    },
    {
      icon: Activity,
      title: "Real-Time Data & Insights",
      description:
        "Live analytics and actionable intelligence to drive informed decision-making.",
    },
  ];

  return (
    <section className="bg-black group bg-gradient-to-bl from-white/5 via-black to-white/8 relative  text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Why Our Products
                <span className="block text-gray-400">Stand Out</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Innovation isn't just a goal — it's our foundation. Every
                product in our portfolio is designed with scalability,
                performance, and future-readiness in mind.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200">
                What You Can Expect:
              </h3>
              <div className="w-16 h-1 bg-white"></div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors ${
                      index === 0 || index === 3 ? "md:col-span-1" : ""
                    } ${index === 1 ? "md:col-span-1" : ""} ${
                      index === 2 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="space-y-4 hover:bg-gradient-to-br from-white/20 via-black  to-white/20">
                      <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" />
                      </div>

                      <h3 className="text-xl font-semibold">{feature.title}</h3>

                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;
