import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  indiamart,
  ninetynineacres,
  pixis,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Pixis",
    icon: pixis,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Enhanced user experience by 25% through scalable React.js frontend development across projects",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Increased user engagement by 25% by developing a customizable survey form for personalized survey generation",
      "Automation Workflows: Built an end-to-end Agency Onboarding Automation tool, improving the onboarding process and allowing agencies to seamlessly create campaigns on the platform",
      "Developed a customizable PDF Proposal Generator for agency use with the help of react-pdf library",
      "Ad Accounts Integrations: Integrated social media APIs (Meta, Google) for brands to connect their accounts, improving campaign tracking and reporting capabilities",
    ],
  },
  {
    title: "SDET",
    company_name: "99Acres",
    icon: ninetynineacres,
    iconBg: "#383E56",
    date: "Jun 2019 - Apr 2022",
    points: [
      "Revamped the agent details page and successfully migrated the frontend framework from Angular to ReactJS, resulting in a 25% increase in web app efficiency and user engagement.",
      "Conducted thorough code reviews and actively collaborated with peers to improve code quality and project maintainability.",
      "Mentored junior developers in frontend technologies, fostering a culture of collaboration and knowledge sharing within the team",
      "Automated 100 test cases using POM framework, resulting in testing efficiency increase of 50%.",
      "Improved testing efficiency by 20% by creating 20 automated test cases with Selenium.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "IndiaMart",
    icon: indiamart,
    iconBg: "#E6DEDD",
    date: "Dec 2018 - Mar 2019",
    points: [
      "Web Optimization: Developed and optimized multiple web projects using HTML, CSS, JavaScript, A JAX, jQuery, and SQL, reducing key business operation time by 10%",
      "Improved processing efficiency by 15% resulting from enhancements to internal tools",
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
];

export { services, technologies, experiences, testimonials, projects };
