// import React, { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Icons

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleScroll = (section) => {
//     setActiveSection(section);
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <nav className="w-full fixed top-0 left-0 bg-gray-900 text-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
//         {/* Left Side - Name */}
//         <div className="text-2xl font-bold">
//           <a href="#home" onClick={() => handleScroll("home")}>
//             ABHAY KUMAR
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           {[
//             "Home",
//             "About",
//             "Skills",
//             "Experience",
//             "Projects",
//             "Statistics",
//             "Contact",
//           ].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               onClick={() => handleScroll(item.toLowerCase())}
//               className={`text-lg font-medium transition ${
//                 activeSection === item.toLowerCase()
//                   ? "text-blue-400"
//                   : "text-white"
//               }`}
//             >
//               {item}
//             </a>
//           ))}
//           {/* Resume Download Link */}
//           <a
//             href="https://drive.google.com/uc?export=download&id=1YVrD1tPbf57u61yIycUBPIg1wxVdg0hq"
//             className="text-lg font-medium transition text-white hover:text-blue-400"
//             download
//           >
//             Resume
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? (
//               <XMarkIcon className="h-8 w-8 text-white" />
//             ) : (
//               <Bars3Icon className="h-8 w-8 text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 py-4">
//           <div className="flex flex-col items-center space-y-4">
//             {[
//               "Home",
//               "About",
//               "Skills",
//               "Experience",
//               "Projects",
//               "Statistics",
//               "Contact",
//             ].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => {
//                   handleScroll(item.toLowerCase());
//                   setIsOpen(false);
//                 }}
//                 className={`text-lg font-medium hover:text-blue-400 transition ${
//                   activeSection === item.toLowerCase()
//                     ? "text-blue-400"
//                     : "text-white"
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}
//             {/* Resume Download Link for Mobile */}
//             <a
//               href="https://drive.google.com/uc?export=download&id=1YVrD1tPbf57u61yIycUBPIg1wxVdg0hq"
//               className="text-lg font-medium transition text-white hover:text-blue-400"
//               download
//             >
//               Resume
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1Icw8kYOtMosmio9WZ66Au-1qTEvcoehd"; // Replace with your actual Google Drive File ID

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (section) => {
    console.log("Scrolling to:", section); // Debugging line
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Left Side - Name */}
        <div className="text-2xl font-bold">
          <a href="#home" onClick={() => handleScroll("home")}>
            ABHAY KUMAR
          </a>
        </div>

        {/* Desktop Menu - Show for screens larger than 990px */}
        <div className="hidden lg:flex space-x-6">
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Statistics",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleScroll(item.toLowerCase())}
              className={`text-lg font-medium transition ${
                activeSection === item.toLowerCase()
                  ? "text-blue-400"
                  : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
          {/* Resume Download Link */}
          <a
            href={resumeLink}
            className="text-lg font-medium transition text-white hover:text-blue-400"
            download
          >
            Resume
          </a>
        </div>

        {/* Mobile and Tablet Menu Button - Show for screens smaller than 990px */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Show only when menu is open */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 py-4">
          <div className="flex flex-col items-center space-y-4">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Statistics",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  handleScroll(item.toLowerCase());
                  setIsOpen(false);
                }}
                className={`text-lg font-medium hover:text-blue-400 transition ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
            {/* Resume Download Link for Mobile */}
            <a
              href={resumeLink}
              className="text-lg font-medium transition text-white hover:text-blue-400"
              download
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
