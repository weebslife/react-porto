import React from "react";
import { useState, useEffect } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!mounted) {
    return null;
  }
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="https://adinshobirin.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Asobi.</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="text-gray-500 dark:text-gray-400 focus:outline-none rounded-lg text-sm p-2.5 sm:mx-2"
          >
            {darkMode ? (
              <Sun />
            ) : (
              <Moon />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </button>
          <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full duration-100 ease-in text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 items-center flex gap-2 px-8 py-3 max-sm:py-2 max-sm:px-6 ">Contact <ArrowUpRight /> </button>
        </div>

        <div className="items-center justify-between w-full max-md:hidden md:w-auto md:order-1  " id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link 
              to="/" 
              className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              location.pathname === "/" ? "text-blue-700" : "text-gray-900"}`} aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
          location.pathname === "/about" ? "text-blue-700" : "text-gray-900"
        }`}>About Me</Link>
            </li>
            <li>
              <Link to="/projects" className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
          location.pathname === "/projects" ? "text-blue-700" : "text-gray-900"
        }`}>Project</Link>
            </li>
            <li>
              <Link to="/contact" className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
          location.pathname === "/contact" ? "text-blue-700" : "text-gray-900"
        }`}>Contact</Link>
            </li>
          </ul>
        </div>
          

      </div>
    </nav>
  );
};

export default Navbar;
