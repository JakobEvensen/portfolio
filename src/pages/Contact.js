import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-center font-medium">Contact me by e-mail:</p>
      <p className="text-center mb-4">jaeve2414@oslomet.no</p>
      <p className="text-center font-medium">LinkedIn:</p>
      <p className="text-center mb-4">
        <a
          href="https://www.linkedin.com/in/jakob-evensen-27229529b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 underline transition-colors"
        >
          Jakob Evensen
        </a>
      </p>

    </section>
  );
};

export default Contact;
