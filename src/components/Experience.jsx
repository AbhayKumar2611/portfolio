// import React from "react";

// const experiences = [
//   {
//     company: "AM Infoweb",
//     jobTitle: "Case Processing Executive",
//     description:
//       "I was hired as a case processing executive. It was a telecalling job. We had to connect with US clients. It was a desk job.",
//     duration: "September 2023 - November 2023",
//     industry: "BPO",
//   },
//   {
//     company: "ITWorks Infotech",
//     jobTitle: "Software Engineer Intern",
//     description:
//       "I was hired as a full stack intern. I worked on frontend technologies like HTML, CSS, Bootstrap, Javascript, JQuery and in Backend technologies like MySQL, PHP, Laravel.",
//     duration: "Feb 2024 - April 2024",
//     industry: "IT Services",
//   },
// ];

// const Experience = () => {
//   return (
//     <section className="bg-gray-100 pt-12">
//       <div className="max-w-6xl mx-auto px-6 py-12 ">
//         <h2 className="text-center text-4xl font-bold text-blue-600 underline mb-8">
//           Experience
//         </h2>
//         <div className="relative border-l-4 border-purple-500 pl-6">
//           {experiences.map((exp, index) => (
//             <div key={index} className="mb-8">
//               <div className="absolute -left-2.5 w-5 h-5 bg-purple-500 rounded-full"></div>
//               <div className="bg-white p-6 shadow-lg rounded-lg">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {exp.company}
//                 </h3>
//                 <p className="text-purple-600 text-sm font-medium">
//                   {exp.industry}
//                 </p>
//                 <p className="text-gray-700 mt-2">{exp.description}</p>
//                 <span className="inline-block mt-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
//                   {exp.duration}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";

const experiences = [
  {
    company: "AM Infoweb",
    jobTitle: "Case Processing Executive",
    description:
      "I was hired as a case processing executive. It was a telecalling job. We had to connect with US clients. It was a desk job.",
    duration: "September 2023 - November 2023",
    industry: "BPO",
  },
  {
    company: "ITWorks Infotech",
    jobTitle: "Software Engineer Intern",
    description:
      "I was hired as a full stack intern. I worked on frontend technologies like HTML, CSS, Bootstrap, Javascript, JQuery and in Backend technologies like MySQL, PHP, Laravel.",
    duration: "Feb 2024 - April 2024",
    industry: "IT Services",
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-100 pt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 ">
        <h2 className="text-center text-4xl font-bold text-blue-600 underline mb-8">
          Experience
        </h2>
        <div className="relative border-l-4 border-purple-500 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="absolute -left-2.5 w-5 h-5 bg-purple-500 rounded-full"></div>
              <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-103">
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-purple-600 text-sm font-medium">
                  {exp.industry}
                </p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
                <span className="inline-block mt-4 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
