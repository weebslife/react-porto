import React, { useState, useEffect } from 'react';
import meow from '../assets/img/meow.jpeg';

const Project = () => {
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

  const sections = [
    {
      title: "About Me",
      subtitle: "Hello, I'm Adin Shobirin 👋",
      content: [
        "I'm a Web Developer with over 3 years of experience...",
        "My expertise includes React for frontend..."
      ],
      image: meow
    },
    {
      title: "Section 2",
      subtitle: "Another Section",
      content: [
        "Content for section 2...",
        "More content..."
      ],
      image: 'https://faria.s3.amazonaws.com/Marketing/public-site/images/feg/about-us/Img-our-mission.jpg'
    }
  ];

  return (
    <section className="min-h-screen max-lg:px-4 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="sticky-image-container">
          <div className="sticky-image">
            <img 
              src={sections[activeSection].image} 
              alt="" 
              className="h-80 w-auto rounded-2xl transition-opacity duration-300 object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className=""> 
            {sections.map((section, index) => (
              <div 
                key={index}
                className="project-card min-h-[80vh] flex items-center"
              >
                <div className="max-w-2xl">
                  <h1 className={`text-3xl dark:text-white font-semibold opacity-0 mb-4 ${
                    showContent && 'animate-slideUpContent'
                  }`} 
                      style={{ animationDelay: '0.3s' }}>
                    {section.title}
                  </h1>
                  <h2 className={`text-xl font-medium text-blue-600 mb-4 opacity-0 ${
                    showContent && 'animate-slideUpContent'
                  }`} 
                      style={{ animationDelay: '0.5s' }}>
                    {section.subtitle}
                  </h2>
                  {section.content.map((paragraph, i) => (
                    <p key={i} 
                      className={`text-dark dark:text-white mb-4 opacity-0 ${
                        showContent && 'animate-slideUpContent'
                      }`} 
                      style={{ animationDelay: `${0.7 + (i * 0.2)}s` }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;