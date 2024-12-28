import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projectItems = [
    {
      title: 'Themis AI',
      description: 'This platform empowers Kenyan youth to learn about financial investments like bonds, stocks, and money market funds. Through gamified simulations, users gain an understanding of investment strategies.',
      link: 'https://github.com/aine-mbabazi/themis_backend.git',
      image: '/images/Group 42.png',
    },
    {
      title: 'Contacts App',
      description: 'An Android application designed to help users display their contacts. This project utilizes RecyclerViews, view holders, and custom adapters for an efficient contact display system.',
      link: 'https://github.com/Gatchang-nyawargak/android_contacts_app',
      image: '/images/contact.png',
    },
    {
      title: 'Enwallet App',
      description: 'This Android-based application provides a streamlined yet comprehensive tool for managing finances, enabling users to effortlessly log and categorize their income and expenses.',
      link: 'https://github.com/Gatchang-nyawargak/enwallet-assessment',
      image: '/images/wallet.jpeg',
    },
    {
      title: 'School',
      description: 'A school management system built with Django enables admins to track teachers, students, and courses, with data accessed and updated via JSON APIs.',
      link: 'https://github.com/Gatchang-nyawargak/Rest-apis-django.git',
      image: '/images/school.jpeg',
    },
    {
      title: 'DashBoard',
      description: 'I created a responsive analytics dashboard with TypeScript and React to track user engagement through interactive visuals, highlighting my skills in user-focused, data-driven solutions.',
      link: 'https://github.com/Gatchang-nyawargak/Vivosparks-Frontend.git',
      image: '/images/Dashboard.png',
    },
    {
      title: 'Vivosparks informational website',
      description: 'A school management system built with Django enables admins to track teachers, students, and courses, with data accessed and updated via JSON APIs.',
      link: 'https://github.com/Gatchang-nyawargak/VivoSparks-Informational.git',
      image: '/images/info.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectItems.map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover rounded-md mb-6 h-[200px] w-full"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-4"
              >
                {project.title} <FaExternalLinkAlt className="ml-2" />
              </a>
              <p className="text-black-500 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
