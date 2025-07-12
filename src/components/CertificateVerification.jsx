// import React from "react";

// function Certificate() {
//   const interns = [
//     {
//       name: "Aarthi M",
//       internId: "ILK2024INT001",
//       college: "Anna University, Chennai",
//       role: "Frontend Developer",
//       duration: "2 months",
//       startDate: "2024-05-01",
//       endDate: "2024-06-30",
//       performance: "Excellent",
//       title:
//         "Contributed to the development of Ilakkanam’s official website by designing and implementing responsive UI components using React.js and Tailwind CSS. Ensured mobile-first design, improved performance scores by optimizing rendering logic, and collaborated with the design team for seamless user experience.",
//     },
//   ];

//   return (
//     <div className="xl:max-w-5xl mx-auto px-4 py-10">
//       {interns.map((intern) => (
//         <div
//           key={intern.internId}
//           className="bg-white border-4 border-yellow-400 shadow-2xl rounded-3xl px-10 py-12 text-center relative font-serif"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
//             Certificate of Internship
//           </h2>
//           <p className="text-gray-600 text-lg mb-6">
//             This is to certify that
//           </p>
//           <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
//             {intern.name}
//           </h1>
//           <p className="text-gray-700 text-lg italic mb-4">{intern.college}</p>

//           <p className="text-gray-700 text-lg mb-6">
//             has successfully completed an internship as a{" "}
//             <span className="font-semibold">{intern.role}</span> at{" "}
//             <span className="font-semibold text-black">Ilakkanam Private Limited</span> for a duration of{" "}
//             <span className="font-semibold">{intern.duration}</span> from{" "}
//             <span className="font-semibold">{intern.startDate}</span> to{" "}
//             <span className="font-semibold">{intern.endDate}</span>.
//           </p>

//           <div className="border border-dashed border-gray-300 p-5 mb-6 rounded-xl bg-slate-50">
//             <p className="text-md text-gray-800">{intern.title}</p>
//           </div>

//           <p className="text-gray-700 text-lg mb-4">
//             Performance:{" "}
//             <span className="font-semibold text-green-600">{intern.performance}</span>
//           </p>

//           <p className="text-sm text-gray-500 mt-8">Intern ID: {intern.internId}</p>

//           <div className="absolute bottom-6 right-10 text-right">
//             <p className="text-sm text-gray-600">Authorized Signatory</p>
//             <div className="mt-2 w-32 h-[1px] bg-gray-400 mx-auto"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Certificate;

import React, { useState } from "react";

function Certificate() {
  const interns = [
    {
  name: "Balaskanthan A K",
  internId: "ILK2025INT002",
  college: "RMK College of Engineering and Technology, Tamil Nadu",
  duration: "1 month",
  startDate: "2025-07-05",
  endDate: "2025-08-05",
  performance: "Excellent",
  title:
    "Successfully completed a 1-month internship at Ilakkanam Private Limited from 05 July 2025 to 05 August 2025. During this period, he exhibited strong technical and creative skills while contributing significantly to the company's web development efforts. His key responsibilities and contributions included:\n\n" +
    "- Designing and developing the official company website (www.ilakkanam.in) using React.js.\n" +
    "- Writing clean, modular, and responsive code optimized for performance and scalability.\n" +
    "- Implementing modern UI/UX best practices to ensure a smooth and intuitive user experience.\n" +
    "- Deploying the website to a live server with a focus on cross-platform compatibility and performance.\n\n" +
    "We acknowledge his excellent performance and wish him continued success in his future endeavors."
    },
  ];
 
  function handle() {
    var Id = document.getElementById("Id").value;
    for(let j = 0; j < interns.length ;j++)
    {
      if( Id === interns[j].internId)
      {
        var i = j;
       
        setShowtrue(true);
        setShowfalse(false);
        break;
        
      }
      
    }
    

if(i >= 0 )
{
    setdata([
      {
        name: interns[i].name,
        internId: interns[i].internId,
        college: interns[i].college,
        role: interns[i].role,
        duration: interns[i].duration,
        startDate: interns[i].startDate,
        endDate: interns[i].endDate,
        performance: interns[i].performance,
        title: interns[i].title,
      },
    ]);
  }
  else{
 
    setShowtrue(false);
  setShowfalse(true);


}
}


  const [data, setdata] = useState([
    {
      name: "",
      internId: "",
      college: "",
      role: "",
      duration: "",
      startDate: "",
      endDate: "",
      performance: "",
      title: "",
    },
  ]);
  const [showtrue, setShowtrue] = useState(false);
  const [showfalse, setShowfalse] = useState(false);

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Certificate Verification System
          </h1>
          <p className="text-gray-600 text-lg">
            Enter certificate ID to verify internship credentials
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex flex-col sm:flex-row gap-6 items-end">
            <div className="flex-1">
              <label htmlFor="Id" className="block text-sm font-semibold text-black mb-3">
                Certificate ID
              </label>
              <input
                type="text"
                id="Id"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none text-black font-medium"
                placeholder="Enter certificate identification number"
              />
            </div>
            <button
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              onClick={handle}
            >
              Verify Certificate
            </button>
          </div>
        </div>

        {/* Results Section */}
        {showtrue && (
          <div className="space-y-8">
            {data.map((intern) => (
              <div
                key={intern.internId}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-black text-white px-8 py-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {intern.name}
                  </h2>
                  <p className="text-gray-300 text-base">
                    {intern.college}
                  </p>
                </div>

                {/* Content */}
                <div className="px-8 py-8">
                  {/* Certificate Details Grid */}
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2">
                          Certificate ID
                        </h3>
                        <p className="text-gray-700 font-medium">{intern.internId}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2">
                          Role
                        </h3>
                        <p className="text-gray-700 font-medium">{intern.role}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2">
                          Duration
                        </h3>
                        <p className="text-gray-700 font-medium">{intern.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2">
                          Performance Rating
                        </h3>
                        <p className="text-gray-700 font-medium">{intern.performance}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2">
                          Start Date
                        </h3>
                        <p className="text-gray-700 font-medium">{intern.startDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-black uppercase tracking-wide mb-2">
                          End Date
                        </h3>
                        <p className="text-gray-700 font-medium">{intern.endDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-gray-200 my-8"></div>

                  {/* Contribution Section */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">
                      Internship Contribution & Performance Summary
                    </h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {intern.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    This certificate has been verified and is authentic as of the date of verification.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}


                {showfalse && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-black text-white px-8 py-6">
              <h2 className="text-2xl font-bold">
                Certificate Not Found
              </h2>
            </div>

            {/* Content */}
            <div className="px-8 py-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-16 h-16 border-4 border-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400">?</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  No Certificate Found
                </h3>
                <p className="text-gray-600 text-base max-w-md mx-auto leading-relaxed">
                  The certificate ID you entered could not be found in our verification system. 
                  Please check the ID and try again.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
                <h4 className="text-sm font-bold text-black uppercase tracking-wide mb-3">
                  Verification Guidelines
                </h4>
                <div className="text-left space-y-2 text-sm text-gray-700">
                  <p>• Ensure the certificate ID is entered exactly as provided</p>
                  <p>• Check for any typos or missing characters</p>
                  <p>• Certificate IDs are case-sensitive</p>
                  <p>• Contact the issuing organization if you believe this is an error</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                If you continue to experience issues, please contact our support team for assistance.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
