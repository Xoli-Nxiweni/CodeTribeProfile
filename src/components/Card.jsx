import React from "react";
import { motion } from "framer-motion";

const Card = ({ children }) => (
  <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    {children}
  </motion.div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b dark:border-gray-700">{children}</div>
);
const CardTitle = ({ children }) => (
  <h3 className="text-xl font-bold dark:text-white">{children}</h3>
);
const CardContent = ({ children }) => <div className="p-6">{children}</div>;

export { Card, CardHeader, CardTitle, CardContent };