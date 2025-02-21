import React from 'react';
import reactIcon from '../assets/icons/react.svg';
import laravelIcon from '../assets/icons/laravel.png';
import tsIcon from '../assets/icons/typescript.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import phpIcon from '../assets/icons/php.png';

const Skill = () => {
  const skills = [
    { name: 'React', icon: reactIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'Tailwind', icon: tailwindIcon },
    { name: 'Php', icon: phpIcon }
  ];

  return (
    <div className="relative w-[300px] mx-auto md:w-full overflow-hidden py-1 mt-0">
      <div className="hover:pause-animation flex gap-4 animate-marquee">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            className="px-4 py-2 shadow dark:bg-gray-800 dark:text-white rounded-full text-sm flex items-center gap-2 shrink-0"
          >
            <img 
              src={skill.icon} 
              alt={`${skill.name} icon`} 
              className="w-7 h-7 object-contain"
            />
            {skill.name}
          </span>
        ))}
        {/* Biar ga mandek bjir marquee nya makanya di duplicate */}
        {skills.map((skill) => (
          <span 
            key={`${skill.name}-dup`}
            className="px-4 py-2 shadow dark:bg-gray-800 dark:text-white rounded-full text-sm flex items-center gap-2 shrink-0"
          >
            <img 
              src={skill.icon} 
              alt={`${skill.name} icon`} 
              className="w-7 h-7 object-contain"
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;