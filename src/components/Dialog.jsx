import React from "react";

const Dialog = ({ children, open, onOpenChange }) => (
  <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
    <div className="fixed inset-0 bg-black/50" onClick={onOpenChange} />
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
      {children}
    </div>
  </div>
);

const DialogContent = ({ children }) => <div>{children}</div>;
const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ children }) => (
  <h2 className="text-xl font-bold dark:text-white">{children}</h2>
);

export { Dialog, DialogContent, DialogHeader, DialogTitle };