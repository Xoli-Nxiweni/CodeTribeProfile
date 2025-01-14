// data/data.js

import image from '../../assets/000.png'
export const personalInfo = {
  name: "Xolile Nxiweni",
  location: "Soweto, South Africa",
  program: "CodeTribe Academy",
  email: "xolinxiweni@gmail.com | xolinxiweni@outlook.com",
  phone: "060 545 0493 | 061 751 4638",
  lastUpdated: new Date().toLocaleDateString(),
  introduction:
    "A passionate developer who joined CodeTribe Academy to enhance my skills in web and mobile development. Prior to CodeTribe, I worked on several personal projects and completed online courses in web development. My goal is to become a full-stack developer and contribute to meaningful projects that make a difference.",
  avatar: image,
  resumeLink: "/CurriculumVitae.pdf",
  linkedInProfile: "https://www.linkedin.com/in/xolinxiweni/",
  githubProfile: "https://github.com/Xoli-Nxiweni",
  whatsappLink: "https://wa.me/27617514638",
};

export const projects = {
  individual: [
    {
      title: "Employee Registration System",
      description: "A system to manage employee records with CRUD operations.",
      techStack: ["React", "Node.js", "MongoDB"],
      features: ["Add employees", "Edit employee details", "Delete employees"],
      challenges: "Handling real-time updates and ensuring data consistency.",
      links: { github: "https://github.com/project1", demo: "https://demo.com/project1" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "82.9%",
        notes: "Well executed. Maintained a clean and functional UI with good state management.",
      },
    },
    {
      title: "Recipe App",
      description: "An app to discover and save recipes.",
      techStack: ["React", "Firebase"],
      features: ["Search recipes", "Save favorites", "User authentication"],
      challenges: "Implementing real-time database updates and user authentication.",
      links: { github: "https://github.com/project2", demo: "https://demo.com/project2" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "86%",
        notes: "Needs to work on the README. Good work on functionality and UI.",
      },
    },
    {
      title: "Node Server",
      description: "A robust Node.js server implementation with RESTful endpoints.",
      techStack: ["Node.js", "Express", "MongoDB"],
      features: ["RESTful API", "Authentication", "Error handling"],
      challenges: "Implementing secure authentication and proper error handling",
      links: { github: "https://github.com/node-server", demo: "https://demo.com/node-server" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "93.5%",
        notes: "Need to add comments, good job",
      },
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz application with multiple categories",
      techStack: ["React", "Node.js", "MongoDB"],
      features: ["Multiple quiz categories", "Score tracking", "Timer functionality"],
      challenges: "Implementing timer and score calculation logic",
      links: { github: "https://github.com/quiz-app", demo: "https://demo.com/quiz" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "97%",
        notes: "Good job",
      },
    },
    {
      title: "Shopping List API",
      description: "RESTful API for managing shopping lists",
      techStack: ["Node.js", "Express", "MongoDB"],
      features: ["CRUD operations", "User authentication", "List sharing"],
      challenges: "Implementing proper API architecture",
      links: { github: "https://github.com/shopping-list-api", demo: "https://demo.com/shopping-api" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "93.4%",
        notes: "Get request doesn't get by id",
      },
    },
    {
      title: "Book Directory App",
      description: "Application for managing and organizing books",
      techStack: ["React", "Node.js", "MongoDB"],
      features: ["Book cataloging", "Search functionality", "Categories"],
      challenges: "Implementing search and filter functionality",
      links: { github: "https://github.com/book-directory", demo: "https://demo.com/books" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "87.65%",
        notes: "Comments are missing, need to work on commit messages as well",
      },
    },
    {
      title: "Card Guessing Game",
      description: "Interactive card guessing game with multiple difficulty levels",
      techStack: ["React", "JavaScript"],
      features: ["Multiple difficulty levels", "Score tracking", "Animations"],
      challenges: "Implementing game logic and animations",
      links: { github: "https://github.com/card-game", demo: "https://demo.com/card-game" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "91.2%",
        notes: "The game should have a popup to prompt the user to replay or end game and then work on commit messages",
      },
    },
    {
      title: "Node Hosting Project",
      description: "Project demonstrating Node.js deployment and hosting setup",
      techStack: ["Node.js", "Express", "AWS/Heroku"],
      features: ["Automated deployment", "Environment configuration", "Monitoring"],
      challenges: "Setting up proper deployment pipelines",
      links: { github: "https://github.com/node-hosting", demo: "https://demo.com/node-hosting" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "97%",
        notes: "Good work",
      },
    },
  ],
  group: [],
};

export const skills = [
  { name: "HTML", level: "Intermediate", notes: "Used in multiple projects", percentage: 75 },
  { name: "CSS", level: "Advanced", notes: "Styled responsive layouts", percentage: 90 },
  { name: "JavaScript", level: "Intermediate", notes: "Built dynamic web applications", percentage: 80 },
  { name: "React Native", level: "Intermediate", notes: "Developed a to-do list app", percentage: 70 },
  { name: "TypeScript", level: "Beginner", notes: "Applied in API integrations", percentage: 60 },
  { name: "React.js", level: "Intermediate", notes: "Built dynamic UIs", percentage: 85 },
  { name: "Firebase", level: "Intermediate", notes: "Used for backend and authentication", percentage: 70 },
  { name: "MongoDB", level: "Intermediate", notes: "Used for database management", percentage: 65 },
  { name: "Redux", level: "Intermediate", notes: "State management in React apps", percentage: 75 },
  { name: "MUI", level: "Beginner", notes: "Used for UI components", percentage: 40 },
  { name: "JSON Server", level: "Beginner", notes: "Mock backend for rapid prototyping", percentage: 55 },
  { name: "SQLite", level: "Beginner", notes: "Used in lightweight database applications", percentage: 50 },
  { name: "sql.js", level: "Beginner", notes: "Used for in-browser SQL database management", percentage: 45 },
  { name: "Node.js", level: "Intermediate", notes: "Backend development for apps", percentage: 70 },
];

export const assessments = [
  {
    name: "Hotel App",
    gitLink: "https://github.com/hotel-app",
    dateCompleted: "2024-12-25",
    score: "76.5%",
    notes: "Toggling between favorites, haven't implemented the email on the CMS. The ratings are not working fine.",
  },
];

export const feedback = {
  facilitator:
    "Excellent progress shown throughout the program. Strong problem-solving skills and great team player.",
  selfReflection:
    "Throughout the program, I've grown significantly in my technical abilities and soft skills. My strongest areas are frontend development and UI design. I need to improve my backend development skills and testing practices.",
};

export const goals = {
  shortTerm: [
    "Secure a job in web development",
    "Build 2-3 more portfolio projects",
    "Complete advanced React course",
  ],
  longTerm: [
    "Become a full-stack developer",
    "Contribute to open-source projects",
    "Lead a development team",
  ],
};

// Combine all data
export const portfolioData = {
  personalInfo,
  projects,
  skills,
  assessments,
  feedback,
  goals,
};