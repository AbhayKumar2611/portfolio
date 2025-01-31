// import React from "react";
// import profileImage from "../assets/profile.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// const Home = () => {
//   const resumeDownloadLink =
//     "https://drive.google.com/uc?export=download&id=1YVrD1tPbf57u61yIycUBPIg1wxVdg0hq";

//   return (
//     <section
//       id="home"
//       className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 md:px-20 text-center md:text-left"
//     >
//       {/* Right Section - Profile Image */}
//       <div className="w-full md:w-1/2 flex justify-center md:justify-start px-24 py-10 mb-6 md:mb-0">
//         <img
//           src={profileImage}
//           alt="Abhay Kumar"
//           className="w-40 md:w-100 h-40 md:h-100 rounded-full shadow-lg"
//         />
//       </div>

//       {/* Left Section */}
//       <div className="w-full md:w-1/2 space-y-4">
//         <h1 className="text-4xl md:text-5xl font-bold pl-10">
//           Hi, <br /> I'm <span className="text-blue-600">Abhay Kumar</span>
//         </h1>
//         <h2 className="text-2xl md:text-3xl font-semibold pl-10">
//           Full Stack Developer
//         </h2>

//         {/* Resume Button */}
//         <a
//           href={resumeDownloadLink}
//           download
//           className="inline-block mt-4 px-6 py-3 ml-10 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//         >
//           Resume
//         </a>

//         {/* Social Media Icons */}
//         <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl ml-10">
//           <a
//             href="mailto:kumarabhay26111996@gmail.com"
//             className="text-gray-600 hover:text-blue-600 transition duration-300"
//           >
//             <FontAwesomeIcon icon={faEnvelope} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/abhay-kumar-96663096/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-blue-600 transition duration-300"
//           >
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a
//             href="https://github.com/AbhayKumar2611"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-black transition duration-300"
//           >
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import profileImage from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1Icw8kYOtMosmio9WZ66Au-1qTEvcoehd";

  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 md:px-20 text-center md:text-left"
    >
      {/* Right Section - Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start px-24 py-10 mb-6 md:mb-0">
        <img
          src={profileImage}
          alt="Abhay Kumar"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full shadow-lg object-top"
        />
      </div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold pl-10">
          Hi, <br /> I'm <span className="text-blue-600">Abhay Kumar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold pl-10">
          Full Stack Developer
        </h2>

        {/* Resume Button */}
        <a
          href={resumeDownloadLink}
          download
          className="inline-block mt-4 px-6 py-3 ml-10 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Resume
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl ml-10">
          <a
            href="mailto:kumarabhay26111996@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-kumar-96663096/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/AbhayKumar2611"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

// import React from "react";
// import profileImage from "../assets/profile.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// const Home = () => {
//   const resumeDownloadLink =
//     "https://drive.google.com/uc?export=download&id=1YVrD1tPbf57u61yIycUBPIg1wxVdg0hq";

//   return (
//     <section
//       id="home"
//       className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-6 md:px-20 text-center md:text-left"
//     >
//       {/* Right Section - Profile Image */}
//       <div className="w-full md:w-1/2 flex justify-center md:justify-start py-12 mb-6 md:mb-0 ml-4">
//         {" "}
//         {/* Added ml-4 to move the image slightly to the right */}
//         <img
//           src={profileImage}
//           alt="Abhay Kumar"
//           className="w-40 md:w-80 h-40 md:h-85 rounded-full shadow-lg"
//         />
//       </div>

//       {/* Left Section */}
//       <div className="w-full md:w-1/2 space-y-4 ml-4">
//         {" "}
//         {/* Added ml-4 to move the text slightly to the right */}
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Hi, <br /> I'm <span className="text-blue-600">Abhay Kumar</span>
//         </h1>
//         <h2 className="text-2xl md:text-3xl font-semibold">
//           Full Stack Developer
//         </h2>
//         {/* Resume Button */}
//         <a
//           href={resumeDownloadLink}
//           download
//           className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//         >
//           Resume
//         </a>
//         {/* Social Media Icons */}
//         <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl">
//           <a
//             href="mailto:kumarabhay26111996@gmail.com"
//             className="text-gray-600 hover:text-blue-600 transition duration-300"
//           >
//             <FontAwesomeIcon icon={faEnvelope} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/abhay-kumar-96663096/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-blue-600 transition duration-300"
//           >
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//           <a
//             href="https://github.com/AbhayKumar2611"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-black transition duration-300"
//           >
//             <FontAwesomeIcon icon={faGithub} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
