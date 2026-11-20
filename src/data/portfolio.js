// All portfolio content in one place: edit text, links, skills and projects here.
import { FaJava } from 'react-icons/fa';
import { LuKeyRound } from 'react-icons/lu';
import {
  SiAngular,
  SiCss,
  SiExpress,
  SiGit,
  SiGitlab,
  SiGithub ,
  SiHtml5,
  SiJavascript,
  SiMantine,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiWebflow,
  SiBootstrap,
} from 'react-icons/si';
import { TbApi, TbCodeDots, TbMailFast, TbPlugConnected, TbSignature } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

// Every technology with its logo and official brand colour.
// Logos always keep these colours, whatever theme is selected.
// Skills without an official logo use a generic icon in a neutral colour.
export const tech = {
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss, color: '#663399' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  Angular: { icon: SiAngular, color: '#DD0031' },
  Redux: { icon: SiRedux, color: '#764ABC' },
  Bootstrap: { icon: SiBootstrap, color: '#7952B3' },
  'Material UI': { icon: SiMui, color: '#007FFF' },
  Mantine: { icon: SiMantine, color: '#339AF0' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { icon: SiExpress, color: '#000000' },
  'REST APIs': { icon: TbApi, color: '#0EA5E9' },
  Sequelize: { icon: SiSequelize, color: '#52B0E7' },
  Java: { icon: FaJava, color: '#E76F00' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  'Microsoft Azure SSO': { icon: VscAzure, color: '#0078D4' },
  'Authentication & Authorization': { icon: LuKeyRound, color: '#334155' },
  'Code Obfuscation': { icon: TbCodeDots, color: '#334155' },
  'API Integration': { icon: TbPlugConnected, color: '#334155' },
  'Digio (eSign / KYC)': { icon: TbSignature, color: '#334155' },
  EmailJS: { icon: TbMailFast, color: '#334155' },
  Git: { icon: SiGit, color: '#F05032' },
  GitLab: { icon: SiGitlab, color: '#FC6D26' },
  GitHub: { icon: SiGithub, color: '#040303' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  Webflow: { icon: SiWebflow, color: '#146EF5' },
};

export const profile = {
  name: 'Pankaj Khatri',
  shortName: 'PK',
  roles: ['Software Developer', 'Full Stack Developer', 'MERN Stack Developer'],
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
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

// Skill names must match keys in `tech` above.
export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Redux', 'Bootstrap', 'Material UI', 'Mantine'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Sequelize', 'Java'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Auth & Security',
    skills: ['Microsoft Azure SSO', 'Authentication & Authorization', 'Code Obfuscation'],
  },
  {
    title: 'Integrations',
    skills: ['API Integration', 'Digio (eSign / KYC)', 'EmailJS'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Webflow'],
  },
];

export const coreStack = ['MongoDB', 'Express.js', 'React', 'Node.js'];

// Work history, newest first. Dates are 'YYYY-MM'; end: null means "Present".
// `roles` lists titles held at the same company, newest first (promotions).
// `highlightsShown` = how many points are visible before "Show more".
// `tech` names must match keys in `tech` above.
export const experience = [
  {
    company: 'Cashinvoice',
    website: 'https://www.cashinvoice.in/',
    initials: 'CI',
    location: 'Remote',
    type: 'Full-time',
    roles: [
      { title: 'Software Developer', start: '2026-02', end: null },
      { title: 'Junior Full Stack Developer', start: '2025-02', end: '2026-01' },
    ],
    highlightsShown: 5,
    highlights: [
      'Develop and maintain enterprise CRM applications end to end with Angular, React.js, Node.js, Express.js and MySQL, building business modules and RESTful APIs.',
      'Implemented Microsoft Azure SSO with MSAL and integrated Microsoft Graph APIs for Outlook email access and AI-powered email processing workflows.',
      'Built a centralised onboarding system shared by multiple fintech products (Payearly, Tradeasy, CredPulse and TMS), streamlining entity management and onboarding workflows.',
      'Implemented maker-checker approvals with multi-level authorization, role-based access control, validation and automated email notifications.',
      'Integrated third-party financial services, including Digio eSign/KYC, CredPulse APIs and banking integrations with multiple partner banks.',
      'Automated financial data-processing workflows: Excel file validation and filtering, debit adjustments, transaction processing and database operations.',
      'Migrated an enterprise application from Angular 14 to Angular 20, upgrading dependencies and optimising build configuration while keeping the UI consistent.',
      'Built interactive Relationship Manager dashboards with React and Material UI showing regional performance, qualified pipeline, open opportunities and business metrics.',
    ],
    tech: ['Angular', 'React', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Material UI', 'Microsoft Azure SSO'],
  },
];

// `live` is optional: leave it out and the card shows only the "Code" button.
export const projects = [
  {
    title: 'GeoWeather',
    description:
      'A live weather app for any city: search with autocomplete or use your location, see hourly and 5-day forecasts, compare the last and next 7 days on a temperature & rain chart, and check a rain-radar map. The background animates to match the real weather.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Leaflet', 'OpenWeather API'],
    image: '/assets/projects-imgs/GeoWeather.png',
    github: 'https://github.com/MrPK4699/GeoWeather',
    live: 'https://geo-weather-iota.vercel.app/',
  },
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
