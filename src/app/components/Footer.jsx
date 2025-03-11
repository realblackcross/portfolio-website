import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="conatiner p-12 flex justify-between">
        {/* Logo with Initials */}
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          AT
        </div>
    <p className="test-slate-600">All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;