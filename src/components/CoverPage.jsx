import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from './data/data';
import './styles/CoverPage.css';

// Separate Banner component without hooks

// eslint-disable-next-line react/prop-types
const CoverPage = ({ onGetStarted }) => {
  const { personalInfo } = portfolioData;

  return (
    <div className="cover-page-container">
      <div className="card">

        <div className="card-content pt-16">
          <div className="info-container text-center">
            <h2 className="name text-2xl font-bold">{personalInfo.name}</h2>
            <p className="program text-lg text-gray-600 dark:text-gray-300">{personalInfo.program}</p>
          </div>

          <section className="content-container mt-6">
            <h2 className="text-xl font-semibold mb-4">My Portfolio Of Evidence:</h2>
            {/* <h3 className="text-lg mb-4">A well-structured portfolio showcasing skills, progress, and accomplishments.</h3> */}
            <div className="space-y-2">
              <p><strong>Full Name:</strong> {personalInfo.name}</p>
              <p><strong>CodeTribe Location:</strong> {personalInfo.location}</p>
              <p><strong>Program Enrolled:</strong> {personalInfo.program}</p>
              <p><strong>Contact :</strong> {personalInfo.email} | {personalInfo.phone}</p>
              <p><strong>Last Update:</strong> {personalInfo.lastUpdated}</p>
              <p><strong>Intro:</strong> {personalInfo.introduction}</p>
            </div>
          </section>

          <section className="badges">
            <a href={personalInfo.linkedInProfile} target="_blank" rel="noopener noreferrer" className="badge ">
              <FaLinkedin size={30} className="text-[#0077B5]" />
            </a>
            <a href={personalInfo.githubProfile} target="_blank" rel="noopener noreferrer" className="badge ">
              <FaGithub size={30} className="text-gray-800 dark:text-white" />
            </a>
            <a href={personalInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="badge">
              <FaWhatsapp size={30} className="text-[#25D366]" />
            </a>
          </section>

          <section className="text-center mt-8">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 bg-[#1E90FF] text-white rounded-lg 
                         hover:bg-[#187bdb] transition-colors duration-300 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
