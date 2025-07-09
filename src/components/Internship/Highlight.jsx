import React from "react";
import { Users, Laptop, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "100+ Interns Trained",
  },
  {
    icon: <Laptop className="w-8 h-8 text-green-500" />,
    title: "Remote + Hybrid Roles",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
    title: "Certificate & PPO Opportunities",
  },
];

const HighlightBoxes = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto mx-10 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border border-gray-300 bg-gray-100/10 hover:-translate-y-2 transition-all duration-500 rounded-lg shadow-md p-6  h-40"
          >
            <div className="h-5 w-5 lg:h-10 lg:w-10">{item.icon}</div>
            <p className="mt-4 text-xl font-bold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightBoxes;
