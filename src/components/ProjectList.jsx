import igClone from '../assets/img/instagram-clone.png';
import ticTacToe from '../assets/img/tic-tac-toe.png';
import navbarImg from '../assets/img/responsive-navbar.png';
import reactIcon from '../assets/icons/react.svg';
import tailwindIcon from '../assets/icons/tailwind.png';
import cssIcon from '../assets/icons/css3.png';
import htmlIcon from '../assets/icons/html.webp';

export const sections = [
  {
    title: "Instagram Clone",
    subtitle: "",
    content: [
      "A static website that mimics the basic look of Instagram using HTML and CSS",
    ],
    tech:[htmlIcon, cssIcon],
    image: igClone,
    preview: "",
    sourceCode: "https://github.com/weebslife/instagram-clone",
  },
  {
    title: "Responsive Navbar",
    subtitle: "",
    content: [
      "Responsive navigation based on HTML and CSS that can customize the display on various devices, including tablets and mobile.",
    ],
    tech: [htmlIcon, cssIcon],
    image: navbarImg,
    preview: "",
    sourceCode: "https://github.com/weebslife/responsive-navbar-pure-html-css-only",
  },
  {
    title: "Tic Tac Toe",
    subtitle: "Another Section",
    content: [
      "Web-based interactive Tic Tac Toe game with step history feature. Built using React and Tailwind CSS for a modern and responsive look.",
    ],
    tech: [reactIcon, tailwindIcon],
    image: ticTacToe,
    preview: "",
    sourceCode: "https://github.com/weebslife/Tic-Tac-Toe-React",
  },
  
];