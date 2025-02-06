// import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Button = ({ children, variant = "default", className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full p-3 rounded-md font-medium transition-all ${
      variant === "outline"
        ? "border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
        : "bg-blue-500 text-white hover:bg-blue-600"
    } ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button;