import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import {
  Layers,
  User,
  FileText,
  Award,
  Briefcase,
  Book,
  X,
  MessageCircle,
  Target,
  ChevronRight,
} from "lucide-react";
import "./styles/NavBar.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ currentPage, setCurrentPage }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  // Handle sticky navigation on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const links = [
    { text: "Home", page: "intro" },
    { text: "Resume", page: "resume" },
    { text: "Skills", page: "skills" },
    { text: "Projects", page: "projects" },
    { text: "Assessments", page: "assessments" },
    { text: "Feedback", page: "feedback" },
    { text: "Goals", page: "goals" },
  ];

  // Table of Contents items
  const tocItems = [
    { icon: User, text: "Personal Introduction", page: "intro" },
    { icon: FileText, text: "Resume", page: "resume" },
    { icon: Award, text: "Skills Matrix", page: "skills" },
    { icon: Briefcase, text: "Projects", page: "projects" },
    { icon: Book, text: "Assessments", page: "assessments" },
    { icon: MessageCircle, text: "Feedback and Reflections", page: "feedback" },
    { icon: Target, text: "Post-Program Goals", page: "goals" },
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          <div className="logo">
            <button className='logoBtn' onClick={() => setCurrentPage("intro")}>{"< X O _/ >"}</button>
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${drawerOpen ? "open" : ""}`}>
            <ul className="NavigationLinks">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    className={currentPage === link.page ? "active" : ""}
                    onClick={() => {
                      setCurrentPage(link.page);
                      setDrawerOpen(false); // Close drawer on selection
                    }}
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="navButtons">
            <button className="ContactBtn" onClick={() => setContactModal(true)}>
              Contact Me
            </button>
            {contactModal && <ContactModal onClose={() => setContactModal(false)} />}
            <button className="TocBtn" onClick={() => setTocOpen(!tocOpen)}>
              <Layers className="toc-icon" /> TOC
            </button>
            <div
              className={`hamburger ${drawerOpen ? "open" : ""}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Table of Contents Drawer */}
      {tocOpen && (
        <div className="tableOfContentsModalOverlay">
          <div className="tableOfContentsModal">
            <div className="toc-drawer">
              <div className="toc-header">
                <h3>
                  <Layers className="toc-icon" /> Table of Contents
                </h3>
                <button className="close-toc" onClick={() => setTocOpen(false)}>
                  <X/>
                </button>
              </div>
              <ul className="toc-list">
                {tocItems.map((item, index) => (
                  <li key={index} className="toc-item">
                    <button
                      className={`toc-link ${
                        currentPage === item.page ? "active" : ""
                      }`}
                      onClick={() => {
                        setCurrentPage(item.page);
                        setTocOpen(false); // Close TOC on selection
                      }}
                    >
                      <item.icon className="toc-icon" />
                      <span>{item.text}</span>
                      <ChevronRight className="chevron-icon" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
