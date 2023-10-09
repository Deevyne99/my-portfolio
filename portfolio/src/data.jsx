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
]

export const portfolio = [
  {
    id: 1,
    title: 'Country API',
    image: '/assets/country-api.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://delightful-marigold-c5f6b1.netlify.app/',
    git: 'https://github.com/Deevyne99/country-api',
  },
  {
    id: 2,
    title: 'Audiophoile Ecommerce',
    image: '/assets/audiophoile.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://loquacious-buttercream-b05131.netlify.app',
    git: 'https://github.com/Deevyne99/audiophile-Ecommerce',
  },
  {
    id: 3,
    title: 'myteam Multipage',
    image: '/assets/multipage.png',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos voluptatibus autem inventore dolorem deserunt eveniet aperiam sit recusandae cumque.',
    url: 'https://magnificent-starship-ff5be4.netlify.app/',
    git: 'https://github.com/Deevyne99/myTeam-multipage',
  },
  {
    id: 4,
    title: 'Task Management',
    image: '/assets/task.png',
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
