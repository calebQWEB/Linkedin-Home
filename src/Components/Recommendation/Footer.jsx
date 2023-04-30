import React from "react";
import Logo from "../../assets/Logo/linkedin-logo.svg";

const Footer = () => {
  return (
    <div className="md:sticky top-20 hidden lg:block">
      <div className="flex items-center justify-center flex-wrap gap-3 p-5">
        <p className="text-xs text-links">About</p>
        <p className="text-xs text-links">Accessibility</p>
        <p className="text-xs text-links">Help Center</p>
        <p className="text-xs text-links">Privacy & Terms </p>
        <p className="text-xs text-links">Ad Choices</p>
        <p className="text-xs text-links">Advertising</p>
        <p className="text-xs text-links">Business Services </p>
        <p className="text-xs text-links">Get the LinkedIn app</p>
        <p className="text-xs text-links">More</p>
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-blue font-medium text-sm">Linked</h1>
        <img src={Logo} alt="Linkedin Logo" className="w-5 h-5" />
        <p className="text-xs">LinkedIn Corporation © 2023</p>
      </div>
    </div>
  );
};

export default Footer;
