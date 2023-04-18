import photoshop from "../assets/photoshop.png";
import premiere from "../assets/premiere.png";
import tailwindcss from "../assets/tailwind.png";
import node from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";  
import python from "../assets/python.png";
import graph from "../assets/graph.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import docker from "../assets/tech/docker.png";
import gaminggalaxy from "../assets/company/gaminggalaxy.png";
import unvault from "../assets/company/unvault.png";
import pickup from "../assets/company/pickup.png";
import uncc from "../assets/company/uncc.png";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id:"portfolio",
      title:"Portfolio",
    },
    {
      id:"contact",
      title:"Contact",
    },
  ];
  
  const services = [
    {
      title: "Graphic Designer",
      icon: photoshop,
    },
    {
      title: "Premiere Pro Editor",
      icon: premiere,
    },
    {
      title: "Front End Developer",
      icon: tailwindcss,
    },
    {
      title: "Back End Developer",
      icon: node,
    },
    {
      title: "Fullstack Developer",
      icon: nextjs,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "Python Developer",
      icon: python,
    },
    {
      title: "Data Analyst",
      icon: graph,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Gaming Galaxy",
      icon: gaminggalaxy,
      iconBg: "#10061B",
      date: "Nov 2019 - Present",
      points: [
        "Constructed a responsive fullstack web application that uses React.JS for the frontend and Next.JS for the backend processing and server side rendering.",
        "Innovated an ecommerce system that uses stripe.js for payment processing and commerce.js for hosting products and creating the cart and checkout functionalities.",
        "Conceptualized a database system for the application that utilizes PrismaDB and MySQL toa llow for fast page loading via server side rendering and created responsiveness throughout the entire website.",
        "Developed a content management system for the application using Sanity that allows for blog posts to be written and automatically displayed to site visitors.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "UnVault",
      icon: unvault,
      iconBg: "#000f21",
      date: "Oct 2021 - Jul 2022",
      points: [
        "Developed a python application that used both the Twitch and YouTube APIs to automate various tedious processes for content creators.",
        "Collaborated with a stakeholder and revised the application several times to ensure that the user flow was easy for creators to use.",
        "Designed a UI for the application in Figma that was later transferred over to HTML code that was displayed on the application.",
        "Successfully used python multiprocessing and threading to schedule and handle various application tasks simultaneously.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Pickup Mobile",
      icon: pickup,
      iconBg: "#012609",
      date: "Sept 2022 - Dec 2022",
      points: [
        "Guided a team of six developers to build a responsive mobile application with React Native that used Expo to display the app on both Android and iOS devices.",
        "Designed both low-fidelity and high-fidelity prototypes inside of Figma for the application's front-end UI that was later converted to React Native code using a plugin.",
        "Managed project deadlines and held weekly meetings to guide my team towards meeting the application requirements given by stakeholders.",
        "Conceptualized a React Native frontend that successfully used various packages from node.js and npm and helpd connect the frontend to a MySQL database containing application data.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "UNC Charlotte Athletics",
      icon: uncc,
      iconBg: "#A49665",
      date: "Sept 2022 - Present",
      points: [
        "Developed a python script that took inputted data and turned it into readable percentages for gametime decisions.",
        "Excelled in fast-paced environment; Met deadlines and crafted weekly reports in Adobe InDesign.",
        "Demonstrated excellent communication skills with coaching staff to ensure the data was visually appealing and useful for them to use.",
        "Helped UNC Charlotte Football make key defensive stops based on the data that was presented in our weekly reports.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gaming Galaxy",
      description:
        "Fullstack application that uses ReactJS for a frontend, and Next.JS as a backend. One of my first ever personal react projects, and it's one that will always hold a special place in my heart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://gaminggalaxy.gg",
    },
    {
      name: "Pickup Mobile",
      description:
        "Mobile application that allows users to schedule pickup games such as soccer, basketball, baseball and more with strangers. Uses react-native for the frontend, and flask for the backend and uses expo to allow the app to be developed on both android and iOS.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/tzbodula/pickup/",
    },
    {
      name: "Rewards Program",
      description:
        "A program built to handle the following prompt: A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/tzbodula/rewards-program",
    },
  ];

  const portfolio = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, portfolio };