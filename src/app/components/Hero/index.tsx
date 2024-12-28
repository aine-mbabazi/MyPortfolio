// "use client";
// import React, { useEffect, useState } from 'react';
// import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
// import Image from 'next/image';

// const jobTitles = [
//   "A Frontend Developer.",
//   "A Backend Developer.",
//   "A Product Manager.",
//   "A UI/UX Designer.",
//   "An Android Developer.",
//   "A Data Engineer."
// ];

// const Hero = () => {
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
//     }, 5000);

//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <section className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-8">
//       <div className="md:w-1/2 space-y-6">
//         <div className="space-y-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Hi, I&apos;m Nyawargak <br />
//             <span className="text-5xl md:text-5xl text-blue-900 transition-opacity duration-500">
//               {jobTitles[currentTitleIndex]}
//             </span>
//           </h1>
//           <p className="text-gray-700 text-lg md:text-xl">
//             I specialize in building responsive web and mobile applications that are scalable and efficient with a focus on delivering quality work that exceeds expectations.
//           </p>
//         </div>

//         <div className="flex space-x-6 mt-6 justify-center md:justify-start">
//           <a href="https://x.com/Gatch2Nyawargak" className="text-gray-800 hover:text-blue-500 transition duration-300">
//             <FaTwitter size={24} /> 
//           </a>
//           <a href="https://www.linkedin.com/in/nyawargak-gatchang/" className="text-gray-800 hover:text-blue-500 transition duration-300">
//             <FaLinkedinIn size={24} /> 
//           </a>
//           <a href="mailto:nyawargakgatchang@gmail.com" className="text-gray-800 hover:text-blue-500 transition duration-300">
//             <FaEnvelope size={24} /> 
//           </a>
//           <a href="https://github.com/Gatchang-nyawargak" className="text-gray-800 hover:text-blue-500 transition duration-300">
//             <FaGithub size={24} /> 
//           </a>
//         </div>

//         <a 
//           href="/images/Nyawargak Gatchang CV.pdf"
//           download="Nyawargak Gatchang CV.pdf" 
//           className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 self-center md:self-start"
//         >
//           Download CV
//         </a>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//         <Image 
//           src="/images/Warga.jpg" 
//           alt="Agnes A. Kamondi" 
//           className="rounded-2xl w-full max-w-[400px] h-auto" 
//           width={800} 
//           height={800} 
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// "use client";

// import React, { useEffect, useState } from "react";
// import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
// import Image from "next/image";

// const jobTitles = [
//   "A Frontend Developer.",
//   "A Backend Developer.",
//   "A Product Manager.",
//   "A UI/UX Designer.",
//   "An Android Developer.",
//   "A Data Engineer.",
// ];

// const Hero = () => {
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-16 py-16">
//       {/* Text Section */}
//       <div className="w-full md:w-5/12 space-y-8">
//         <div className="space-y-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Hi, I&apos;m Nyawargak
//             <br />
//             <span className="text-5xl md:text-6xl text-blue-900 transition-opacity duration-500">
//               {jobTitles[currentTitleIndex]}
//             </span>
//           </h1>
//           <p className="text-gray-700 text-lg md:text-xl">
//             I specialize in building responsive web and mobile applications that are scalable and efficient with a focus on delivering quality work that exceeds expectations.
//           </p>
//         </div>
        
//         <div className="flex space-x-8 justify-center md:justify-start mt-12">
//           <a
//             href="https://x.com/Gatch2Nyawargak"
//             className="text-gray-800 hover:text-blue-500 transition duration-300"
//           >
//             <FaTwitter size={28} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/nyawargak-gatchang/"
//             className="text-gray-800 hover:text-blue-500 transition duration-300"
//           >
//             <FaLinkedinIn size={28} />
//           </a>
//           <a
//             href="mailto:nyawargakgatchang@gmail.com"
//             className="text-gray-800 hover:text-blue-500 transition duration-300"
//           >
//             <FaEnvelope size={28} />
//           </a>
//           <a
//             href="https://github.com/Gatchang-nyawargak"
//             className="text-gray-800 hover:text-blue-500 transition duration-300"
//           >
//             <FaGithub size={28} />
//           </a>
//         </div>

//         <div className="flex justify-center md:justify-start mt-8">
//           <a
//             href="/images/Nyawargak Gatchang CV.pdf"
//             download="Nyawargak Gatchang CV.pdf"
//             className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
//           >
//             Download CV
//           </a>
//         </div>
//       </div>

     
//   );
// };

// export default Hero;

"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const jobTitles = [
  "A Frontend Developer.",
  "A Backend Developer.",
  "A Product Manager.",
  "A UI/UX Designer.",
  "An Android Developer.",
  "A Data Engineer.",
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I&apos;m Patricia Ainembabazi <br />
            <span className="text-5xl md:text-6xl text-blue-900 transition-opacity duration-500">
              {jobTitles[currentTitleIndex]}
            </span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl">
            I specialize in building responsive web and mobile applications that are scalable and efficient with a focus on delivering quality work that exceeds expectations.
          
          </p>
        </div>

        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://x.com/aine_mababazi"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/patricia-ainembabazi-4874482b3/"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:patainembabazi@gmail.com"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/aine-mbabazi"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <a
          href="/images/Ainembabazi Patricia CV.pdf"
          download="Patricia Ainembabazi CV.pdf"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 self-center md:self-start"
        >
          Download CV
        </a>
      </div>
       {/* Image Section */}
       <div className="w-full md:w-6/12 flex justify-end mt-12 md:mt-0">
        <div className="relative w-full md:w-[80%] aspect-square">
          {/* <Image
            src="/images/Patricia.jpeg"
            alt="Patricia"
            className="rounded shadow-lg object-cover"
            fill
            sizes="(max-width: 760px) 90vw, 40vw"
            priority
          /> */}

<Image
  src="/images/Patricia.jpeg"
  alt="Patricia"
  className="rounded-full shadow-lg object-cover"
  fill
  sizes="(max-width: 760px) 90vw, 40vw"
  priority
/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
