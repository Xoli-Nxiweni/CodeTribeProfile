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
  resumeLink: "https://example.com/resume.pdf",
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
      title: "To-Do List App",
      description: "A simple and effective to-do list application.",
      techStack: ["React", "Redux"],
      features: ["Add tasks", "Mark tasks as complete", "Delete tasks"],
      challenges: "Improving the repo structure for better clarity.",
      links: { github: "https://github.com/project3", demo: "https://demo.com/project3" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "83.65%",
        notes: "Needs to work on repo structure. Managed to execute the functionality well.",
      },
    },
    {
      title: "Weather App",
      description: "An app providing weather updates and news.",
      techStack: ["React", "API Integration"],
      features: ["Search weather by city", "Display current weather", "News updates"],
      challenges: "Improving UI and search functionality.",
      links: { github: "https://github.com/project4", demo: "https://demo.com/project4" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "87%",
        notes: "Strong functionality and essential features covered well. Needs work on UI and search functionality.",
      },
    },
    {
      title: "Shopping-List App",
      description: "An app to create and manage shopping lists.",
      techStack: ["React", "Firebase"],
      features: ["Add items", "Mark items as bought", "Delete items"],
      challenges: "Enhancing UI components for better user experience.",
      links: { github: "https://github.com/Xoli-Nxiweni/Shopping-List", demo: "https://demo.com/project5" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "73.5%",
        notes: "Great work, needs to enhance a few components on the UI.",
      },
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my projects and skills.",
      techStack: ["React", "CSS", "Firebase"],
      features: ["Showcase projects", "Responsive design", "Contact form"],
      challenges: "Ensuring mobile responsiveness and smooth navigation.",
      links: { github: "https://github.com/project6", demo: "https://demo.com/project6" },
      image: "https://via.placeholder.com/400x250",
      feedback: {
        score: "88.9%",
        notes: "Clean design and easy navigation. Needs a few adjustments in mobile view for better experience.",
      },
    },
      /*
    node projects:
    node server: 93.5%: comment: need to add comments, good job
    quiz: 97%: comment: good job
    shoppingList api : 93.4%: comment: get request doenst get by id
    book directory app: 87.65% : comment: comments are missing , need to work on commit messages as well
    card guessing game: 91.2% :comment: the game should have a popup to prompt the user to replay or end game and then work on commit messages
    employee management system: 00% comment:
    node hosting: 97%: comment: good work

    mongoDB:
    


   */
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
