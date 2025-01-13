
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from './data/data';
import './styles/CoverPage.css';

// Separate Banner component without hooks

// eslint-disable-next-line react/prop-types
const CoverPage = ({ onGetStarted }) => {
  const { personalInfo } = portfolioData;
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString();


  return (
    <div className="cover-page-container">
      <div className="card">

        <div className="card-content pt-16">
          <div className="info-container text-center">
            <h2 className="name">{personalInfo.name}</h2>
            <p className="program">{personalInfo.program}</p>
          </div>

          <section className="content-container">
            <h2 className="section-title">Portfolio of Evidence</h2>
            <div className="info-grid">
              <p><strong>Full Name:</strong> {personalInfo.name}</p>
              <p><strong>CodeTribe Location:</strong> {personalInfo.location}</p>
              <p><strong>Program Enrolled:</strong> {personalInfo.program}</p>
              <p><strong>Email:</strong> {personalInfo.email}</p>
              <p> <strong>Contact Information:</strong>{personalInfo.phone}</p>
              <p><strong>Date:</strong> {currentDate}</p>
              <p><strong>Introduction:</strong> {personalInfo.introduction}</p>
            </div>
          </section>

          <section className="badges">
            <a href={personalInfo.linkedInProfile} target="_blank" rel="noopener noreferrer" className="badge">
              <FaLinkedin size={30} className="linkedin-icon" />
            </a>
            <a href={personalInfo.githubProfile} target="_blank" rel="noopener noreferrer" className="badge">
              <FaGithub size={30} className="github-icon" />
            </a>
            <a href={personalInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="badge">
              <FaWhatsapp size={30} className="whatsapp-icon" />
            </a>
          </section>

          <section className="actions">
            <button onClick={onGetStarted} className="primary-btn">
              Get Started
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;