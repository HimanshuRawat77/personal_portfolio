import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Himanshu Rawat",
  stack: [
    "Front end Developer"
  
  ],
  bio: "I am a second-year B.Tech student at Rishihood University (Newton School of Technology), My academic journey is focused on full-stack development, where I am currently expanding my skill set in both front-end and back-end technologies. I am passionate about creating dynamic and user-friendly web applications that enhance user experiences. With a solid foundation in programming languages such as HTML, CSS, and JavaScript, I am eager to delve deeper into frameworks like React. I am dedicated to continuous learning and growth, looking forward to applying my skills in real-world projects and contributing to the tech community."
};

const ProjectInfo = [
  {
    title: "Notes-APP",
    desc: "Our Expense Tracker app, crafted with React and Next.js, offers a streamlined solution for managing personal finances. Using server-side rendering (SSR), the app ensures rapid load times and improved SEO, providing users with a smooth and efficient experience. The app allows users to easily add both expenses and income, thanks to its intuitive form where they can input transaction details such as amount, category, and description. As users log their financial activities, the app dynamically updates and displays their current balance, giving a clear overview of their financial status at any time. With Bootstrap's responsive design, the app adapts seamlessly to different devices, ensuring usability on desktops, tablets, and smartphones. Overall, the Expense Tracker app simplifies financial management, helping users stay organized and on top of their financial goals.",
    img: "/note.png", // Changed to 'img' for consistency
    live: true,
    technologies: ["React", "HTML", "CSS"],
    link: "https://notes-app-wine-one.vercel.app/",
    github: "https://github.com/HimanshuRawat77/notes_app",
  },
  
  {
    title: "Reliance_Clone",
    desc: "SnapLink is a robust URL shortening application built with Next.js, designed to streamline the process of transforming long URLs into concise, shareable links. It features seamless integration with the TinyURL API, allowing users to generate shortened URLs effortlessly. The application boasts a mobile-first, responsive design to ensure an optimal user experience across devices, and is optimized with server-side rendering for fast, lightweight performance. Additionally, SnapLink simplifies setup with a straightforward installation process, making it easy for developers to deploy and use.",
    image:
      "https://raw.githubusercontent.com/kushalkumar-shaw/snap-link/main/public/Landing%20page.png",
    live: true,
    technologies: ["React","HTML","Tailwind"],
    link: "https://reliance-digiinte.vercel.app/",
    github: "hhttps://github.com/HimanshuRawat77/Reliance_Digi",
  },
];

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Tailwind",
  "MySQL",
  "Git"
  
];

// AVAILABLE SKILLS

/* 
  HTML
  CSS
  JS 
  React
  Next JS
  Nuxt JS
  Node JS
  Vue
  Angular
  Docker
  Photoshop
  Illustrator
  Svelte
  GCP
  Azure
  Fastify
  Haxe
  Ionic
  Markdown
  Microsoft Office
  Picsart
  Sketch
  Unity
  WolframAlpha
  Adobe XD
  After Effects
  Bootstrap
  Bulma
  CapacitorJs
  Coffeescript
  MemSQL
  C
  C++
  C#
  Python
  Java
  Julia
  Matlab
  Swift
  Ruby
  Kotlin
  Go
  PHP
  Flutter
  Dart
  Typescript
  Swift
  Git
  Figma
  Canva
  Ubuntu
  Bootstrap
  MongoDB
  Tailwind
  ViteJS
  VuetifyJS
  MySQL
  PostgreSQL
  AWS
  Firebase
  Blender
  Premiere Pro
  Adobe Audition
  Deno
  Django
  Gimp
  Graphql
  Lightroom
  MaterialUI
  Nginx
  Numpy
  OpenCV
  Pytorch
  Selenium
  Strapi
  Tensorflow
  Webex
  Wordpress
*/

const socialLinks = [
  { link: "https://github.com/HimanshuRawat77", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/feed/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/",
    icon: IconBrandInstagram,
  },
  {
    link: "https://www.youtube.com/@HimanshuSingh-rw5oh",
    icon: IconBrandYoutube,
  },
  { link: "https://leetcode.com/u/HimanshuRawat77/", icon: IconBrandLeetcode },
];


export const EducationInfo = [
  {
    id: 0,
    img: "images.png",
    school: "Newton School of Technology",
    date: "August 2023 - April 2027",
    desc: "I am currently pursuing a Bachelor of Technology  at Rishihood University. With a strong foundation in data analysis, statistical modeling, and programming, I am passionate about leveraging data to drive impactful solutions. My academic journey has equipped me with skills in Python, R, machine learning, and big data technologies. I am eager to apply my knowledge to real-world challenges and continue learning in the dynamic field of data science.",
    degree: "Bachelor of Technology - CS and AI",
  },
  {
    id: 1,
    img: "model.jpeg",
    school: "Model School sec-4, Rohtak",
    date: "May 2021 - Apr 2023",
    desc: "I completed my class 12 education at Satish Pradhan Dnyanasadhana College, Thane where I studied Science with Information Technology.",
    degree: "Higher Secondary Certificate (Class 12)",
  },
  {
    id: 2,
    img: "model.jpeg",
    school: "Model School sec-4, Rohtak",
    date: "May 2011 - Apr 2021",
    desc: "I completed my class 10 education at Model School, Rohtak where I studied Science with Computer Application.",
    degree: "Secondary School Certificate (Class 10)",
  },
];

export { Info, ProjectInfo, socialLinks, skillsData };
