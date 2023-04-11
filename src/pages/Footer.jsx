import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4 ">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Mon site web en ReactJS /
          TailwindCSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
