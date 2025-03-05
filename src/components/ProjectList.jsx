import igClone from '../assets/img/instagram-clone.png';
import ticTacToe from '../assets/img/tic-tac-toe.png';
import navbarImg from '../assets/img/responsive-navbar.png';
import febbyImg from '../assets/img/febby-pratama.webp';
import portfolioImg from '../assets/img/porto-old.webp';
import hidroponikImg from '../assets/img/hidroponik.webp';
import voucherImg from '../assets/img/voucher-apps.webp';
import reactIcon from '../assets/icons/react.svg';
import tailwindIcon from '../assets/icons/tailwind.png';
import cssIcon from '../assets/icons/css3.png';
import htmlIcon from '../assets/icons/html.webp';
import vueIcon from '../assets/icons/vue.png';
import LaravelIcon from '../assets/icons/laravel.png';
import bootStrapIcon from '../assets/icons/bootstrap.png';
import wordpressIcon from '../assets/icons/wordpress.png';
import diviIcon from '../assets/icons/divi.png';

export const sections = [
  {
    title: "CV. Febby Pratama",
    subtitle: "2022 • Web Application",
    content: [
      "The largest oil distribution management system in Binjai City. This application has a dashboard feature to manage goods in the warehouse, truck drivers, incoming and outgoing goods, and print sales invoices.",
    ],
    tech:[vueIcon, LaravelIcon, bootStrapIcon],
    image: febbyImg,
    preview: "",
    sourceCode: "",
  },
  {
    title: "Basnul Cafe Voucher Apps",
    subtitle: "2022 • Web Application",
    content: [
      "A voucher management application for a cafe, allowing users to claim vouchers in the form of QR codes. Admins can manage vouchers through the dashboard and scan QR codes for validation and redemption.",
    ],
    tech:[vueIcon, LaravelIcon, bootStrapIcon],
    image: voucherImg,
    preview: "",
    sourceCode: "",
  },
  {
    title: "Hirdoponik Binjai ",
    subtitle: "2022 • Web Application",
    content: [
      "Information website about hydroponic companies in Binjai, including hydroponic training, product sales, and education about modern agriculture.",
    ],
    tech:[bootStrapIcon],
    image: hidroponikImg,
    preview: "",
    sourceCode: "",
  },
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
    title: "Portofolio",
    subtitle: "",
    content: [
      "Personal portfolio website built using WordPress with the help of Divi Builder. It displays complete information about yourself, your skills, work experience, and showcases some of the projects you have worked on. This website is also equipped with responsive navigation, so that it appears optimally on desktop, tablet, and mobile.",
    ],
    tech: [wordpressIcon, diviIcon, htmlIcon, cssIcon],
    image: portfolioImg,
    preview: "/old-porto",
    sourceCode: "",
  },
  {
    title: "Tic Tac Toe",
    subtitle: "",
    content: [
      "Web-based interactive Tic Tac Toe game with step history feature. Built using React and Tailwind CSS for a modern and responsive look.",
    ],
    tech: [reactIcon, tailwindIcon],
    image: ticTacToe,
    preview: "/project/tic-tac-toe", 
    sourceCode: "https://github.com/weebslife/Tic-Tac-Toe-React",
  },
];