import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={onClick}>
      <button
        className={`w-full p-3 rounded-md font-medium transition-all text-left flex items-center gap-2 ${
          isActive
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default NavLink;