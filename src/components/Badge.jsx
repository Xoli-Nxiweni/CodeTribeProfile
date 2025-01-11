import React from "react";

const Badge = ({ children, variant = "default" }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
      variant === "secondary"
        ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        : "bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200"
    }`}
  >
    {children}
  </span>
);

export default Badge;