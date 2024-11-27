// import React from 'react'
// import image from '../src/assets/task.png'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaDatabase,
  FaCode,
  FaHome,
  FaRegPaperPlane,
  FaRegNewspaper,
} from 'react-icons/fa'
// import { IoPersonOutline } from 'react-icons/io'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlinePicture } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
export const links = [
  {
    id: 1,
    name: 'home',
    url: 'hero',
    icon: <FaHome />,
  },
  {
    id: 2,
    name: 'about',
    url: 'about',
    icon: <BsPerson />,
  },
  {
    id: 3,
    name: 'skills',
    url: 'skills',
    icon: <FaRegNewspaper />,
  },
  {
    id: 4,
    name: 'services',
    url: 'services',
    icon: <MdWorkOutline />,
  },
  {
    id: 5,
    name: 'portfolio',
    url: 'portfolio',
    icon: <AiOutlinePicture />,
  },
  {
    id: 6,
    name: 'contact ',
    url: 'contact',
    icon: <FaRegPaperPlane />,
  },
]
export const social = [
  {
    id: 1,
    name: 'twiiter',
    url: 'https://twitter.com/kaluDivine15?t=ENHQnX9Rs2lpSAZupT9jLg&s=09',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    name: 'instagram',
    url: 'https://www.instagram.com/lyf_of_dyvnee/',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    name: 'github',
    url: 'https://github.com/Deevyne99',
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/deevyne99/',
    icon: <FaLinkedin />,
  },
]

export const skills = [
  { id: 1, name: 'Html' },
  { id: 2, name: 'css' },
  { id: 3, name: 'javascript' },
  { id: 4, name: 'React Js' },
  { id: 5, name: 'Tailwind Css' },
  { id: 6, name: 'Styled component' },
  { id: 7, name: 'Node Js' },
  { id: 8, name: 'git' },
  { id: 9, name: 'express Js' },
  { id: 10, name: 'Typescript' },
  { id: 11, name: 'Next Js' },
]

export const portfolio = [
  {
    id: 1,
    title: 'Country API',
    image: '/assets/country-api.png',
    desc: `Presenting the Country API Project, a robust and comprehensive database of countries and their essential data, crafted from scratch with meticulous attention to detail. This powerful API provides developers with easy access to a wealth of information.`,
    url: 'https://delightful-marigold-c5f6b1.netlify.app/',
    git: 'https://github.com/Deevyne99/country-api',
  },
  {
    id: 2,
    title: 'Audiophoile Ecommerce',
    image: '/assets/audiophoile.png',
    desc: `Welcome to SoundCrafters, the audiophile's paradise. As the creator of this bespoke audiophile ecommerce store, I've meticulously crafted every detail to deliver an unparalleled audio shopping experience.`,
    url: 'https://relaxed-platypus-e8dd1e.netlify.app/',
    git: 'https://github.com/Deevyne99/audiophile-Ecommerce',
  },
  {
    id: 3,
    title: 'myteam Multipage',
    image: '/assets/multipage.png',
    desc: `Introducing our fully responsive landing page, meticulously designed and built from scratch to captivate and engage your audience on any device. Seamlessly adapting to desktops, tablets, and mobile screens, our landing page ensures a flawless user experience.`,
    url: 'https://magnificent-starship-ff5be4.netlify.app/',
    git: 'https://github.com/Deevyne99/myTeam-multipage',
  },
  {
    id: 4,
    title: 'Kanban Task Management',
    image: '/assets/kanban.png',
    desc: 'Developed a full-stack MERN task management system with a responsive design. Key features include secure user authentication, light and dark modes for enhanced usability. The system ensures efficient project organization and task tracking, making it a powerful tool for boosting productivity across all devices.',
    url: 'https://kanban-task-management-app-v2.netlify.app/',
    git: 'https://github.com/Deevyne99/kanban-task-management',
  },
  {
    id: 4,
    title: 'Dee Store Ecommerce',
    image: '/assets/dee-store.png',
    desc: 'Built a Full-Stack E-commerce Application using React.js, TypeScript, Redux Toolkit, Node.js, Express.js, and MongoDB. The app features dynamic product listings, category-based filtering, pagination, secure user authentication, and a seamless shopping cart and checkout experience. It’s fully responsive, ensuring an excellent user experience across devices. This project showcases my skills in building scalable, modern web applications with a strong integration between frontend and backend technologies.',
    url: ' https://dee-stores.netlify.app/',
    git: 'https://github.com/Deevyne99/Ecommerce-project',
  },
]

export const services = [
  {
    id: 1,
    position: 'Frontend developer',
    icon: <FaCode />,
  },
  {
    id: 2,
    position: 'Backend developer',
    icon: <FaDatabase />,
  },
]

export const expert = [
  {
    id: 1,
    service: [
      'User Interface (UI) Development',
      'Responsive Web Design',
      'Interactive Elements',
      'Performance Optimization',
      'Cross-Browser Compatibility',
    ],
  },
  {
    id: 2,
    service: [
      'Database Management',
      'API Development',
      'Server Management',
      'Security',
      'Version Control',
    ],
  },
]
