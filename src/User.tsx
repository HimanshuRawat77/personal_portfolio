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
    desc: "The Study Notes App is a user-friendly tool designed to help you organize your study materials by subject. With this app, you can type and save notes for each subject, making it easier to keep track of important information for exams, assignments, and projects. Key features include the ability to edit notes, share them with others for collaborative study, and view them anytime for easy revision. Once notes are no longer needed, they can be deleted with a simple click. Ideal for students looking to streamline their study process and stay organized!.",
    img: "/note.png", // Changed to 'img' for consistency
    live: true,
    technologies: ["React", "HTML", "CSS"],
    link: "https://notes-app-wine-one.vercel.app/",
    github: "https://github.com/HimanshuRawat77/notes_app",
  },
  
  {
    title: "Reliance_Clone",
    desc: "The Reliance Digital Clone is a project I developed to improve my skills in React by recreating the functionality of a modern e-commerce platform. This app provides a realistic online shopping experience where users can browse a wide range of electronic products, add items to their cart, and proceed to checkout. Key features include user authentication with sign-up and login, allowing personalized access, a powerful search feature to quickly find products, and a smooth add-to-cart process. Through this project, I gained hands-on experience with component-based design, state management, and user authentication, enhancing my skills in building responsive, interactive web applications.",
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
    desc: "I am currently pursuing a B.Tech in Computer Science with a specialization in AI and Machine Learning from Rishihood University, in collaboration with Newton School of Technology. My academic journey has equipped me with a strong foundation in programming languages and web technologies, including Python, HTML, CSS, JavaScript, and React. I am passionate about leveraging data to develop impactful solutions and am eager to apply my knowledge to real-world challenges. I am committed to continuous learning in the field of programming and aspire to contribute meaningfully to technology-driven innovations. .",
    degree: "Bachelor of Technology - CS and AI",
  },
  {
    id: 1,
    img: "model.jpeg",
    school: "Model School sec-4, Rohtak",
    date: "May 2022 - Apr 2023",
    desc: "I completed my class 12 education at Satish Pradhan Dnyanasadhana College,where I studied Science with Information Technology.",
    degree: "Higher Secondary Certificate (Class 12)",
  },
  {
    id: 2,
    img: "model.jpeg",
    school: "Model School sec-4, Rohtak",
    date: "May 2020 - Apr 2021",
    desc: "I completed my class 10 education at Model School, Rohtak where I studied Science with Computer Application.",
    degree: "Secondary School Certificate (Class 10)",
  },
];

export { Info, ProjectInfo, socialLinks, skillsData };
