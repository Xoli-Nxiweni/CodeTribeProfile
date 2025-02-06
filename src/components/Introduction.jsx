import './styles/Introduction.css';
import image from '../assets/More X AI.png';

const Introduction = () => {
  // Personal info as an object for better scalability and future edits
  const personalInfo = {
    name: "Xolile Nxiweni",
    location: "Soweto, South Africa",
    program: "CodeTribe Academy",
    introduction:
      "Hi there! I am pleased to host you, I am a MERN stack developer based in Soweto, South Africa. Welcome to my portfolio! I'm currently honing my web and mobile development skills at CodeTribe Academy, where I strive to create innovative and impactful solutions. Before joining CodeTribe, I gained hands-on experience through personal projects and online courses in web development. My ultimate goal is to grow as a full-stack developer and collaborate on projects that truly make a difference.",
  };
  

  return (
    <section id="intro">
      <div className="intro-container">
        <img src={image} alt="Profile of Xolile Nxiweni" className="avatar" />
        <div className="intro-content">
          <h1>{personalInfo.name}</h1>
          <p className="location">{personalInfo.location}</p>
          <p className="program">{personalInfo.program}</p>
          <p className="intro">{personalInfo.introduction}</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
