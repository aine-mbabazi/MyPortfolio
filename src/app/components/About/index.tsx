import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">About Me</h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto">
            I am a passionate Fullstack Developer committed to building innovative, scalable, and user-centered applications. My journey is driven by curiosity, creativity, and a continuous desire to learn and improve.
          </p>
          <div className="mt-6 h-1 w-16 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-16">
          {/* Image Section with Flex Start */}
          <div className="w-full md:w-6/12 flex justify-start mt-12 md:mt-0">
            <div className="relative w-full md:w-[90%] aspect-square">
              {/* First Border (Blue) - Rounded, closer to the image */}
              <div className="absolute -inset-4 rounded-xl border-4 border-blue-500 shadow-2xl md:block hidden"></div>
              {/* Second Border (Pink) - Slightly smaller, also rounded */}
              <div className="absolute -inset-2 rounded-xl border-4 border-pink-500 shadow-2xl md:block hidden"></div>
              <Image
                src="/images/laptop.jpeg"
                alt="About Me"
                className="relative rounded-xl shadow-lg object-cover"
                fill
                sizes="(max-width: 760px) 900vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-3xl font-semibold text-blue-800 text-center md:text-left leading-tight">
              Driven by Passion & Innovation
            </h3>
            <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed">
              Hello, I&#39;m <span className="font-bold text-blue-900">Nyawargak</span>, a Fullstack Developer with a strong passion for building meaningful digital experiences. I enjoy the process of turning complex problems into intuitive, user-friendly solutions.
            </p>

            <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed">
              From developing seamless user interfaces to architecting scalable backend systems, I aim to create web and mobile applications that not only meet technical requirements but also provide a great user experience. My journey has been fueled by my involvement in personal projects, open-source contributions, and an eagerness to learn from others in the tech community.
            </p>

            <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed">
              I&#39;m excited about collaborating on innovative projects that challenge me to grow as a developer, and I&#39;m always looking for new opportunities to apply my skills to impactful solutions.
            </p>

            <a href="#contact" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg mt-6">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

