// import React from 'react'
// import image from '../src/assets/task.png'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaDatabase,
  FaCode,
} from 'react-icons/fa'

export const links = [
  {
    id: 1,
    name: 'home',
    url: 'hero',
  },
  {
    id: 2,
    name: 'about',
    url: 'about',
  },
  {
    id: 3,
    name: 'skills',
    url: 'skills',
  },
  {
    id: 4,
    name: 'services',
    url: 'services',
  },
  {
    id: 5,
    name: 'portfolio',
    url: 'portfolio',
  },
  {
    id: 6,
    name: 'contact me',
    url: 'contact',
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
  {
    id: 1,
    icon: <FaCode />,
    skill: 'frontend developer',
    levels: [
      {
        id: 1,
        skill: 'Html',
        level: 90,
      },
      {
        id: 2,
        skill: 'Css',
        level: 90,
      },
      {
        id: 3,
        skill: 'Javascript',
        level: 85,
      },
      {
        id: 4,
        skill: 'React',
        level: 90,
      },
      {
        id: 5,
        skill: 'Tailwind Css',
        level: 90,
      },
    ],
  },
  {
    id: 2,
    icon: <FaDatabase />,
    skill: 'backend developer',
    levels: [
      {
        id: 1,
        skill: 'Node js',
        level: 60,
      },
      {
        id: 2,
        skill: 'Express js',
        level: 70,
      },
      {
        id: 3,
        skill: 'Mongo DB',
        level: 50,
      },
      {
        id: 4,
        skill: 'Postman',
        level: 80,
      },
      {
        id: 5,
        skill: 'Postman',
        level: 70,
      },
    ],
  },
]

export const portfolio = [
  {
    id: 1,
    title: 'Country API',
    image: '../src/assets/country-api.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://delightful-marigold-c5f6b1.netlify.app/',
    git: 'https://github.com/Deevyne99/country-api',
  },
  {
    id: 2,
    title: 'Audiophoile Ecommerce',
    image: '../src/assets/audiophoile.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://loquacious-buttercream-b05131.netlify.app',
    git: 'https://github.com/Deevyne99/audiophile-Ecommerce',
  },
  {
    id: 3,
    title: 'myteam Multipage',
    image: '../src/assets/multipage.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://magnificent-starship-ff5be4.netlify.app/',
    git: 'https://github.com/Deevyne99/myTeam-multipage',
  },
  {
    id: 4,
    title: 'Task Management',
    image: '../src/assets/task.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://ubiquitous-truffle-d84ec3.netlify.app',
    git: 'https://github.com/Deevyne99/NUPAT-TASK-2',
  },
]

export const services = [
  {
    id: 1,
    position: 'frontend developer',
    icon: <FaCode />,
  },
  {
    id: 2,
    position: 'frontend developer',
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
      'User Interface (UI) Development',
      'Responsive Web Design',
      'Interactive Elements',
      'Performance Optimization',
      'Cross-Browser ',
    ],
  },
]
