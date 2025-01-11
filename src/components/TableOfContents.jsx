import React from "react";
import { motion } from "framer-motion";
import "./styles/TableOfContents.css";

const TableOfContents = ({ currentPage, setCurrentPage, pages }) => {
  const handleItemClick = (pageId, event) => {
    event.preventDefault(); // Prevent default browser behavior
    const section = document.getElementById(pageId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(pageId); // Update current page
    }
  };

  return (
    <motion.div
      className="tableOfContentsModalOverlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="tableOfContentsModal"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Table of Contents</h2>
        <ul className="toc-list">
          {pages.map((page) => (
            <li
              key={page.id}
              className={`toc-item ${currentPage === page.id ? "active" : ""}`}
              onClick={(event) => handleItemClick(page.id, event)}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="toc-link"
                href={`#${page.id}`} // Use href for fallback but prevent default
              >
                {page.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TableOfContents;
