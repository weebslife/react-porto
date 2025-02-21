import React from "react";
import { House, Info, Lightbulb, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-around items-center fixed gap-2 px-3 bottom-5 left-1/2 transform -translate-x-1/2 shadow py-2 z-50 rounded-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 md:hidden">
      <Link 
        to="/" 
        className={`flex items-center gap-2 py-2 px-3 ${
          location.pathname === "/" ? "text-blue-700 bg-gray-200 rounded-full opacity-1" : "text-gray-900 dark:text-white"
        }`}
      >
        <House />
        {location.pathname === "/" && <span className="text-sm">Home</span>}
      </Link>
      
      <Link 
        to="/about" 
        className={`flex items-center gap-2 py-2 px-3 ${
          location.pathname === "/about" ? "text-blue-700 bg-gray-200 rounded-full opacity-1" : "text-gray-900 dark:text-white"
        }`}
      >
        <Info />
        {location.pathname === "/about" && <span className="text-sm">About</span>}
      </Link>
      
      <Link 
        to="/projects" 
        className={`flex items-center gap-2 py-2 px-3 ${
          location.pathname === "/projects" ? "text-blue-700 bg-gray-200 rounded-full opacity-1" : "text-gray-900 dark:text-white"
        }`}
      >
        <Lightbulb />
        {location.pathname === "/projects" && <span className="text-sm">Projects</span>}
      </Link>
      
      <Link 
        to="/contact" 
        className={`flex items-center gap-2 py-2 px-3 ${
          location.pathname === "/contact" ? "text-blue-700 bg-gray-200 rounded-full opacity-1" : "text-gray-900 dark:text-white"
        }`}
      >
        <User />
        {location.pathname === "/contact" && <span className="text-sm">Contact</span>}
      </Link>
    </div>
  );
};

export default MobileNavbar;