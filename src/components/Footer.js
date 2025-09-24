import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
      © {new Date().getFullYear()} Jakob. All rights reserved.
    </footer>
  );
};

export default Footer;
