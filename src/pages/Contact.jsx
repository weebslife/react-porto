import React, { useState, useEffect } from 'react';
import { Github, Mail, Instagram  } from 'lucide-react';
import BocchiImage from '../assets/img/bocchi.png';



const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasAnimation = localStorage.getItem('animationShown');
    const delay = hasAnimation ? 100 : 1600;
    
    const timer = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800 max-sm:pb-28">
        <div className="max-w-4xl space-y-6 text-center max-lg:px-4">
          <div className={`space-y-2 opacity-0 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.2s' }}>
            <img src={BocchiImage} className='w-[340px] mx-auto my-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]' alt="" />
            <h1 className="text-4xl md:text-5xl max-sm:text-2xl font-bold text-gray-900 dark:text-white">
              Contact Me at
            </h1>
          </div>
          <div className="flex gap-4 justify-between items-center">
            <a href="https://github.com/weebslife" target="_blank" className={`space-y-2 opacity-0 hover:translate-x-1 border-width p-5 hover:text-white hover:bg-black rounded-full transition-all ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.4s' }} rel="noopener noreferrer">
              <Github className="dark:text-white " />
            </a>
            <a href="mailto:shobirinadin#gmail.com" className={`space-y-2 opacity-0 hover:translate-x-1 border-width p-5 hover:text-white hover:bg-black rounded-full transition-all ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.6s' }}>
              <Mail className="dark:text-white " />
            </a>
            <a href="https://instagram.com/adin_shobirin" target="_blank" className={`space-y-2 opacity-0 hover:translate-x-1 border-width p-5 hover:text-white hover:bg-black rounded-full transition-all ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.8s' }} rel="noopener noreferrer">
              <Instagram className="dark:text-white " />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;