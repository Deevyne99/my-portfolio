// import React from 'react'
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
    url: '#home',
  },
  {
    id: 2,
    name: 'about',
    url: '#about',
  },
  {
    id: 3,
    name: 'skills',
    url: '#skills',
  },
  {
    id: 4,
    name: 'services',
    url: '#services',
  },
  {
    id: 5,
    name: 'portfolio',
    url: '#portfolio',
  },
  {
    id: 6,
    name: 'contact me',
    url: '#contact me',
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
        level: 90,
      },
      {
        id: 3,
        skill: 'React',
        level: 90,
      },
      {
        id: 4,
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
        level: 60,
      },
      {
        id: 3,
        skill: 'Mongo DB',
        level: 60,
      },
      {
        id: 4,
        skill: 'Postman',
        level: 60,
      },
      {
        id: 5,
        skill: 'Postman',
        level: 60,
      },
    ],
  },
]
