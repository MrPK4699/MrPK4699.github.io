// All portfolio content in one place: edit text, links, skills and projects here.
import { FaJava } from 'react-icons/fa';
import {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMantine,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiWebflow,
} from 'react-icons/si';

export const profile = {
  name: 'Pankaj Khatri',
  shortName: 'PK',
  roles: ['Full Stack Developer', 'MERN Stack Developer'],
  tagline:
    'I build fast, responsive web apps with React, Node.js, Express and MongoDB, from polished interfaces to the APIs behind them.',
  photo: '/assets/Pankaj-Khatri-Photo.jpg',
  resume: '/assets/PankajKhatri-FullStackWebDeveloper.pdf',
  email: '4699pankajkhatri@gmail.com',
  github: 'https://github.com/MrPK4699',
  githubUser: 'MrPK4699',
  linkedin: 'https://www.linkedin.com/in/4699pankajkhatri',
};

export const about = [
  "I'm a Full Stack Web Developer who loves creating seamless, visually appealing user experiences. I work across the MERN stack: React on the front end, Node.js and Express for APIs, and MongoDB for data.",
  "I'm committed to continuous learning, enjoy building products together with a team, and I'd love to contribute to open-source projects.",
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'Mantine', icon: SiMantine },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Java', icon: FaJava },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MongoDB', icon: SiMongodb }],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Webflow', icon: SiWebflow },
    ],
  },
];

export const coreStack = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express.js', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
];

export const projects = [
  {
    title: 'Task Manager',
    description:
      'A full-stack MERN app for managing tasks effectively: prioritise tasks, set deadlines and track progress, all in one place.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    image: '/assets/projects-imgs/Task Manager.png',
    github: 'https://github.com/MrPK4699/TaskManagement_MERN',
    live: 'https://task-management-mern-eqkt.vercel.app/',
  },
  {
    title: 'Green Paradise',
    description:
      'A fully functional e-commerce site for plant lovers, with a wide range of plants and gardening supplies that are easy to browse, pick and buy online.',
    tech: ['HTML', 'CSS', 'JavaScript', 'JSON Server', 'Git'],
    image: '/assets/projects-imgs/Green Paradise.png',
    github: 'https://github.com/DivYam062/eCommerceGreenParadise',
    live: 'https://656cbd8b78668a2ac47fd273--jolly-kitten-c781a7.netlify.app/index.html',
  },
  {
    title: 'Myntra Clone',
    description:
      'A clone of the Myntra fashion e-commerce site. A collaborative project built in 6 days by a team of 5 developers.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
    image: '/assets/projects-imgs/Myntra.png',
    github: 'https://github.com/MrPK4699/Myntra-Project',
    live: 'https://lighthearted-haupia-f78f70.netlify.app/',
  },
];
