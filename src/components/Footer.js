import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const websiteName = "GreenWare";

    return (
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-white-50">&copy; {currentYear} {websiteName}. All rights reserved.</div>
        </div>
      </footer>


    );
  };

export default Footer;