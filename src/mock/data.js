import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vikyath Shriva | Software Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website 🔆', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '👋🏼 Hi, my name is',
  name: 'Vikyath Shriva',
  subtitle: 'A software dev by passion',
  cta: 'Click here',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: 'Love the tech world to the bones. I was always a curious cat towards computers since 12, and this inkling pushed me to know more about what happens underneath, and here I am 🚶🏼‍♂️',
  paragraphTwo: 'I am more inclined to mobile application developement in general. iOS Dev is where my strong point is at, yet still curious about distributed systems and performance optimization in microservice architectures 🏛️. IDE and languages that I love 👇🏼',
  paragraphThree: '💻 Vim all the way | 🐉 C++ | 🐦 Swift | ☕ Java | 🔩 JavaScript',
 
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Drop an email 📧',
  email: 'vicky.fames@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Vikyathshirva',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/vikyathshirva',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vikyath-s-85154559/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vikyathshirva',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
