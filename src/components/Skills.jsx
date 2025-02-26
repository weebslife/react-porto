import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import reactIcon from '../assets/icons/react.svg';
import laravelIcon from '../assets/icons/laravel.png';
import tsIcon from '../assets/icons/typescript.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import phpIcon from '../assets/icons/php.png';
import vueIcon from '../assets/icons/vue.png';
import javaScriptIcon from '../assets/icons/javascript.png';
import cssIcon from '../assets/icons/css3.png';
import bootstrapIcon from '../assets/icons/bootstrap.png';
import wordpressIcon from '../assets/icons/wordpress.png';

const Skill = () => {
  const skills = [
    { name: 'React', icon: reactIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'Tailwind', icon: tailwindIcon },
    { name: 'Php', icon: phpIcon },
    { name: 'Vue', icon: vueIcon },
    { name: 'JavaScript', icon: javaScriptIcon },
    { name: 'Css', icon: cssIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'WordPress', icon: wordpressIcon },
  ];

  return (
    <div className="relative w-[450px] mx-auto max-sm:w-[300px] lg:w-full overflow-hidden mt-0">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.8,
          momentumVelocityRatio: 0.8
        }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false
        }}
        speed={4000}
        allowTouchMove={true}
        grabCursor={true}
        cssMode={false}
        watchSlidesProgress={true}
      >
        {[...skills, ...skills].map((skill, index) => (
          <SwiperSlide 
            key={`${skill.name}-${index}`}
            className="!w-auto"
          >
            <span className="px-4 py-2 shadow dark:bg-gray-800 dark:text-white rounded-full text-sm flex items-center gap-2 shrink-0">
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`} 
                className="w-7 h-7 object-contain"
                title={`${skill.name} icon`} 
              />
              {skill.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skill;