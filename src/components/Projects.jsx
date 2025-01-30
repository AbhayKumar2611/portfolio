// import React from "react";

// const ProjectCard = ({
//   title,
//   description,
//   techStacks,
//   image,
//   githubLink,
//   deployLink,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover object-center"
//       />
//       <div className="p-6 flex-1 flex flex-col">
//         <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
//         <p className="text-gray-600 mb-4 flex-1">{description}</p>
//         <div className="mb-4">
//           <div className="flex flex-wrap gap-2">
//             {techStacks.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 bg-gray-800 text-white py-2 px-4 rounded text-center hover:bg-gray-700 transition-colors duration-300"
//           >
//             GitHub
//           </a>
//           <a
//             href={deployLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition-colors duration-300"
//           >
//             Live Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   const projects = [
//     {
//       title: "Happy Calories",
//       description:
//         "A comprehensive calorie tracking application that helps users manage their diet through QR code scanning and meal tracking. Features include inventory management and detailed profile settings.",
//       techStacks: ["React", "Tailwind CSS"],
//       image: "/src/assets/happy-calories.png", // Adjust path based on your project structure
//       githubLink: "https://github.com/AbhayKumar2611/4198_Project5",
//       deployLink: "https://happycalories.netlify.app",
//     },
//     {
//       title: "Happy Quizzes",
//       description:
//         "Real-time weather monitoring application featuring current conditions, forecasts, and interactive maps. Includes temperature tracking and precipitation predictions.",
//       techStacks: ["React", "Node.js", "OpenWeather API", "Chart.js"],
//       image: "/src/assets/quiz-apps.png",
//       githubLink: "https://github.com/AbhayKumar2611/NewQuizApp",
//       deployLink: "https://happynewquiz.netlify.app/",
//     },
//     {
//       title: "Image Slider",
//       description:
//         "A feature-rich task management system with team collaboration tools, deadline tracking, and progress monitoring capabilities.",
//       techStacks: ["React", "Firebase", "Material-UI", "Redux"],
//       image: "/src/assets/image-sliders.png",
//       githubLink: "https://github.com/AbhayKumar2611/carousel",
//       deployLink: "https://happycarousel.netlify.app/",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-100" id="projects">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";

const ProjectCard = ({
  title,
  description,
  techStacks,
  image,
  githubLink,
  deployLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white py-2 px-4 rounded text-center hover:bg-gray-700 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition-colors duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Happy Calories",
      description:
        "A comprehensive calorie tracking application that helps users manage their diet through QR code scanning and meal tracking. Features include inventory management and detailed profile settings.",
      techStacks: ["HTML", "Tailwind CSS", "React", "Firebase"],
      image: "/src/assets/happy-calories.png",
      githubLink: "https://github.com/AbhayKumar2611/4198_Project5",
      deployLink: "https://happycalories.netlify.app",
    },
    {
      title: "Happy Quizzes",
      description:
        "A dynamic and interactive quiz application. This app features a sleek user interface, real-time score tracking, and seamless navigation between questions. It offers an engaging experience with instant feedback and customizable quiz options",
      techStacks: ["HTML", "Tailwind CSS", "React"],
      image: "/src/assets/quiz-apps.png",
      githubLink: "https://github.com/AbhayKumar2611/NewQuizApp",
      deployLink: "https://happynewquiz.netlify.app/",
    },
    {
      title: "Image Slider",
      description:
        "A sleek and responsive image slider. It features smooth transitions, autoplay functionality, having indicators and navigation controls for an engaging user experience.",
      techStacks: ["HTML", "CSS", "Tailwind CSS", "React"],
      image: "/src/assets/image-sliders.png",
      githubLink: "https://github.com/AbhayKumar2611/carousel",
      deployLink: "https://happycarousel.netlify.app/",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 underline">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
