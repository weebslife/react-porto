import React, { useState, useEffect, act } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectButton from '../components/ProjectButton';
import { sections } from '../components/ProjectList';


const Project = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const hasAnimation = localStorage.getItem('animationShown');
    const delay = hasAnimation ? 600 : 1600;
    
    const timer = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.project-card');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen max-lg:px-4 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800 max-sm:pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="sticky-image-container">
          <div className="sticky-image max-sm:hidden ">
            <img 
              src={sections[activeSection].image} 
              alt={sections[activeSection].title}
              title={sections[activeSection].title}
              className="h-80 w-auto rounded-2xl transition-opacity duration-300 object-cover shadow-md"
            />
          </div>
        </div>

        <div className=" mx-auto">
          <div className=""> 
            {sections.map((section, index) => (
              <React.Fragment key={`section-${index}`}>
                <div 
                  key={index}
                  className="project-card min-h-[100vh] max-sm:min-h-[60vh] flex items-center lg:flex-wrap max-sm:w-full"
                >
                  <div className="max-w-2xl">
                    <h1 
                      className={`text-3xl dark:text-white font-semibold opacity-0 mb-4 ${showContent && 'animate-slideUpContent'}`} 
                      style={{ animationDelay: '0.3s' }}>
                      {section.title}
                    </h1>

                    <h2 
                      className={`text-xl font-medium text-blue-600 mb-4 opacity-0 ${
                      showContent && 'animate-slideUpContent'}`} 
                      style={{ animationDelay: '0.5s' }}>
                      {section.subtitle}
                    </h2>
                    
                    {section.content.map((paragraph, i) => (
                      <p 
                        key={i} 
                        className={`text-dark dark:text-white mb-4 opacity-0 ${showContent && 'animate-slideUpContent'}`} 
                        style={{ animationDelay: `${0.7 + (i * 0.2)}s` }}>
                        {paragraph}
                      </p>
                    ))}
                    
                    <p 
                      className={`text-dark dark:text-white mb-4 opacity-0 flex gap-2 items-center ${showContent && 'animate-slideUpContent'}`} 
                      style={{ animationDelay: `${0.7}s` }}> 
                      <span className='font-bold'>Tech stack:</span>
                      {section.tech.map((tech, i) => (
                          <img src={tech} className='w-10 h-10 object-contain' alt="" />
                      ))}
                    </p>

                    <div className="flex gap-4 pt-6  flex-wrap">
                      <ProjectButton url={section.preview} type="preview" delay="0.8s" />
                      <ProjectButton url={section.sourceCode} type="source" delay="1s" />
                    </div>
                  </div>
                </div>
                <div className='sm:hidden'>
                  <img 
                    src={section.image} 
                    alt="" 
                    className="h-full w-auto rounded-2xl transition-opacity duration-300 object-cover shadow mb-24"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;