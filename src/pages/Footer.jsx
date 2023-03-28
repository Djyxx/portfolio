import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#9ad6a8] text-[#1e1c21] py-4 mt-72">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
        </p>
        <p className="text-center text-sm">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
