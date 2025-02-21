import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-0 pt-24 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl space-y-6">
        <h1 className='text-3xl font-semibold'>About Me </h1>
        <div className='space-y-2'>
          <h2 className="text-xl font-medium text-blue-600">
            Hello, I'm Adin Shobirin 👋
          </h2>
          <p className='text-dark'>I’m a Web Developer with over 3 years of experience in web and application development. For more than 2 years, I’ve worked in teams to build efficient and scalable digital solutions.</p>
          <p className='text-dark'>My expertise includes React for frontend, as well as Laravel and Node.js for backend development. I strive to deliver high-performance and maintainable solutions in every project.</p>
          <p className='text-dark'>Let’s connect and collaborate! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default About;