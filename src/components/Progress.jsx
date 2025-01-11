import React from "react";

const Progress = ({ value }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
    <div
      className="bg-blue-500 h-2 rounded-full"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default Progress;