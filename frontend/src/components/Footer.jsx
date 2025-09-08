import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
      &copy; {new Date().getFullYear()} QuizMaster. All rights reserved.
    </footer>
  );
};

export default Footer;
