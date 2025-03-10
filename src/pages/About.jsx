import React, {useState, useEffect} from 'react';
import meow from '../assets/img/meow.jpeg';
import pdf from '../assets/documents/adinshobirin-cv.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  const [showContent, setShowContent] = useState(false);
  
    useEffect(() => {
      const hasAnimation = localStorage.getItem('animationShown');
      const delay = hasAnimation ? 100 : 1600;
      
      const timer = setTimeout(() => setShowContent(true), delay);
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      <div className="min-h-screen max-lg:px-4 flex flex-col items-center justify-center pt-24 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-3xl dark:text-white font-semibold opacity-0 mb-4 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.3s' }}>About Me </h1>
          <div className='flex gap-4 flex-wrap items-end'>
            <div className="about-me sm:flex-1 mb-4">
              
              <h2 className={`text-xl font-medium text-blue-600 mb-4 opacity-0 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.5s' }}>Hello, I'm Adin Shobirin 👋 </h2>

              <p className={`text-dark dark:text-white mb-4 opacity-0 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.7s' }}>I’m a Web Developer with over <span className='font-bold'>3 years</span> of experience in <span className="font-bold">web</span> and <span className="font-bold">application</span> development. For more than 2 years, I’ve worked in teams to build efficient and scalable digital solutions.</p>

              <p className={`text-dark mb-4 dark:text-white opacity-0 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '0.9s' }}>My expertise includes <span className="font-bold">React</span> for frontend, as well as <span className="font-bold">Laravel</span> and <span className="font-bold">Node</span> for backend development. I strive to deliver high-performance and maintainable solutions in every project.</p>

              <h4 className={`text-dark dark:text-white mb-4 text-2xl font-medium opacity-0 ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '1s' }}>Let’s connect and collaborate! 🚀</h4>

              <div className="pdf">
                <a href={pdf} target = "_blank" className={`flex items-center justify-center gap-2 px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors opacity-0 dark:text-white hover:text-white ${showContent && 'animate-slideUpContent'}`} style={{ animationDelay: '1.2s' }}>Download CV</a>
              </div>
            </div>
            <div className="about-me sm:flex-1">
              <img src={meow} alt="" className='w-64 float-right rounded-2xl' />
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="min-h-screen max-lg:px-4 flex flex-col items-center justify-center pt-24 bg-gradient-to-b from-white to-light-blue dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 data-aos="fade-up" className={`text-3xl dark:text-white font-semibold opacity-0 mb-4 text-center `} style={{ animationDelay: '0.3s' }}>Experience </h1>
          <p className='text-3xl font-semibold mt-10 '>Coming Soon</p>
        </div>
      </div> */}
    </>
  );
};

export default About;