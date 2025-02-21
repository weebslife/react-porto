import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profile from '../assets/img/photo.png';
import AnimatedGreeting from '../components/AnimatedGreeting';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start animations after greeting animation ends
    const timer = setTimeout(() => setShowContent(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedGreeting />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-0 pt-24 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-2xl space-y-6 text-center">
          {/* Profile Section */}
          <div className={`space-y-2 opacity-0 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.2s' }}>
            <img src={profile} className="rounded-full w-[240px] mx-auto" alt="" />
            <h2 className="text-xl font-medium text-blue-600">
              Hello, I'm Adin Shobirin 👋
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Frontend Developer
            </h1>
          </div>

          <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed opacity-0 ${showContent && 'animate-slideUpContent'}`} 
             style={{ animationDelay: '0.4s' }}>
            I'm a Web Developer with over 3 years of experience in web and application development. 
            For more than 2 years, I've worked in teams to build efficient and scalable digital solutions.
          </p>

          <div className={`space-y-2 opacity-0 ${showContent && 'animate-slideUpContent'}`} 
               style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-600 dark:text-gray-300">
              My expertise includes:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'Laravel', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-4 py-2 shadow dark:bg-gray-800 dark:text-white rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-4 pt-6 opacity-0 ${showContent && 'animate-slideUpContent'}`}
               style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/projects"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowUpRight size={18} />
            </Link>
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;