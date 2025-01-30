// import React from "react";
// import GitHubCalendar from "react-github-calendar";

// const Statistics = () => {
//   return (
//     <section className="py-16 px-4 bg-gray-100" id="statistics">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-20 text-blue-600 underline">
//           My GitHub Activity
//         </h2>
//         <div className="flex justify-center overflow-x-auto">
//           <GitHubCalendar
//             username="AbhayKumar2611"
//             blockSize={15}
//             blockMargin={5}
//             fontSize={15}
//             showWeekdayLabels
//             colorScheme="light"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Statistics;

// import React from "react";
// import GitHubCalendar from "react-github-calendar";

// const Statistics = () => {
//   return (
//     <section className="py-16 px-4 bg-gray-100" id="statistics">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-20 text-blue-600 underline">
//           My GitHub Activity
//         </h2>

//         {/* GitHub Calendar */}
//         <div className="flex justify-center overflow-x-auto mb-12">
//           <GitHubCalendar
//             username="AbhayKumar2611"
//             blockSize={15}
//             blockMargin={5}
//             fontSize={15}
//             showWeekdayLabels
//             colorScheme="light"
//           />
//         </div>

//         {/* Stats and Languages - Horizontal Layout */}
//         <div className="flex flex-col md:flex-row justify-center gap-8">
//           {/* Abhay GitHub Stats */}
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
//             <h3 className="text-xl font-semibold text-blue-600 mb-4">
//               Abhay's GitHub Stats
//             </h3>
//             <ul className="text-left text-gray-700">
//               <li>
//                 <strong>Total Stars Earned:</strong> 15
//               </li>
//               <li>
//                 <strong>Total Commits (2025):</strong> 225
//               </li>
//               <li>
//                 <strong>Total PRs:</strong> 53
//               </li>
//               <li>
//                 <strong>Total Issues:</strong> 20
//               </li>
//               <li>
//                 <strong>Contributed to (last year):</strong> 0
//               </li>
//             </ul>
//           </div>

//           {/* Most Used Languages */}
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
//             <h3 className="text-xl font-semibold text-blue-600 mb-4">
//               Most Used Languages
//             </h3>
//             <ul className="text-left text-gray-700">
//               <li>
//                 <strong>JavaScript:</strong> 96.38%
//               </li>
//               <li>
//                 <strong>HTML:</strong> 2.2%
//               </li>
//               <li>
//                 <strong>CSS:</strong> 1.32%
//               </li>
//               <li>
//                 <strong>Python:</strong> 0.05%
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Statistics;

// import React from "react";
// import GitHubCalendar from "react-github-calendar";

// const Statistics = () => {
//   return (
//     <section className="py-16 px-4 bg-gray-100" id="statistics">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-20 text-blue-600 underline">
//           My GitHub Activity
//         </h2>

//         {/* GitHub Calendar */}
//         <div className="flex justify-center overflow-x-auto mb-12">
//           <GitHubCalendar
//             username="AbhayKumar2611"
//             blockSize={15}
//             blockMargin={5}
//             fontSize={15}
//             showWeekdayLabels
//             colorScheme="light"
//           />
//         </div>

//         {/* Stats and Languages - Horizontal Layout */}
//         <div className="flex flex-col md:flex-row justify-center gap-8">
//           {/* Abhay GitHub Stats */}
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
//             <h3 className="text-xl font-semibold text-blue-600 mb-4">
//               Abhay's GitHub Stats
//             </h3>
//             <ul className="text-left text-gray-700">
//               <li>
//                 <strong>Total Stars Earned:</strong> 15
//               </li>
//               <li>
//                 <strong>Total Commits (2025):</strong> 225
//               </li>
//               <li>
//                 <strong>Total PRs:</strong> 53
//               </li>
//               <li>
//                 <strong>Total Issues:</strong> 20
//               </li>
//               <li>
//                 <strong>Contributed to (last year):</strong> 0
//               </li>
//             </ul>
//           </div>

//           {/* Most Used Languages with Progress Bars */}
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
//             <h3 className="text-xl font-semibold text-blue-600 mb-4">
//               Most Used Languages
//             </h3>
//             <ul className="text-left text-gray-700 space-y-2">
//               <li>
//                 <span className="font-medium">JavaScript</span>
//                 <div className="flex justify-between w-full bg-gray-200 rounded-full h-3">
//                   <div
//                     className="bg-yellow-400 h-3 rounded-full"
//                     style={{ width: "70%" }}
//                   ></div>
//                   <span>80%</span>
//                 </div>
//               </li>
//               <li>
//                 <span className="font-medium">HTML</span>
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div
//                     className="bg-red-400 h-3 rounded-full"
//                     style={{ width: "10%" }}
//                   ></div>
//                 </div>
//               </li>
//               <li>
//                 <span className="font-medium">CSS</span>
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div
//                     className="bg-purple-400 h-3 rounded-full"
//                     style={{ width: "10%" }}
//                   ></div>
//                 </div>
//               </li>
//               <li>
//                 <span className="font-medium">Python</span>
//                 <div className="w-full bg-gray-200 rounded-full h-3">
//                   <div
//                     className="bg-blue-400 h-3 rounded-full"
//                     style={{ width: "5%" }}
//                   ></div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Statistics;

import React from "react";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <section className="py-16 px-4 bg-gray-100" id="statistics">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20 text-blue-600 underline">
          My GitHub Activity
        </h2>

        {/* GitHub Calendar */}
        <div className="flex justify-center overflow-x-auto mb-12">
          <GitHubCalendar
            username="AbhayKumar2611"
            blockSize={15}
            blockMargin={5}
            fontSize={15}
            showWeekdayLabels
            colorScheme="light"
          />
        </div>

        {/* Stats and Languages - Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Abhay GitHub Stats */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Abhay's GitHub Stats
            </h3>
            <ul className="text-left text-gray-700">
              <li className="text-xl font-bold flex justify-between">
                <strong>Total Stars Earned:</strong>{" "}
                <span className="mr-[92px]">15</span>
              </li>
              <li className="text-xl font-bold flex justify-between">
                <strong>Total Commits (till 2025):</strong>{" "}
                <span className="mr-[80px]">150</span>
              </li>
              <li className="text-xl font-bold flex justify-between">
                <strong>Total PRs:</strong>{" "}
                <span className="mr-[90px]">53</span>
              </li>
              <li className="text-xl font-bold flex justify-between">
                <strong>Total Issues:</strong>{" "}
                <span className="mr-[90px]">20</span>
              </li>
              <li className="text-xl font-bold flex justify-between">
                <strong>Contributed to (last year):</strong>{" "}
                <span className="mr-[90px]">23</span>
              </li>
            </ul>
          </div>

          {/* Most Used Languages with Progress Bars */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Most Used Languages
            </h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li>
                <span className="font-bold">JavaScript</span>
                <div className="w-full bg-gray-200 rounded-full h-3 flex items-center relative">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                  {/* <span className="absolute right-1 text-sm text-gray-700 font-bold">
                    80%
                  </span> */}
                </div>
              </li>
              <li>
                <span className="font-bold">HTML</span>
                <div className="w-full bg-gray-200 rounded-full h-3 relative flex items-center">
                  <div
                    className="bg-red-400 h-3 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                  {/* <span className="absolute right-1 text-sm text-gray-700 font-bold">
                    10%
                  </span> */}
                </div>
              </li>
              <li>
                <span className="font-bold">CSS</span>
                <div className="w-full bg-gray-200 rounded-full h-3 relative flex items-center">
                  <div
                    className="bg-purple-400 h-3 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                  {/* <span className="absolute right-1 text-sm text-gray-700 font-bold">
                    10%
                  </span> */}
                </div>
              </li>
              <li>
                <span className="font-bold">Python</span>
                <div className="w-full bg-gray-200 rounded-full h-3 relative flex items-center">
                  <div
                    className="bg-blue-400 h-3 rounded-full"
                    style={{ width: "5%" }}
                  ></div>
                  {/* <span className="absolute right-1 text-sm text-gray-700 font-bold">
                    5%
                  </span> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
