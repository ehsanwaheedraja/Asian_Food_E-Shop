import React from "react";
import picAbout from "../images/about_us.jpg";
import picFaq from "../images/faq.jpg";
import companyimg from "../images/company_icon.png";

const Company = () => {
  return (
    <div className="company-main">
      <div className="heading-company">
        <div className="img-product">
          <img src={companyimg} alt="company"></img>
        </div>
        <h1 className="red-letters">COMPANY</h1>
      </div>

      <div className="container-company">
        <div className="container-about-company">
          <a href="/About">
            <img
              className="img-container-about-company"
              src={picAbout}
              alt="about"
            ></img>
          </a>
        </div>

        <div className="container-faq-company">
          <a href="/FAQ">
            <img
              className="img-container-faq-company"
              src={picFaq}
              alt="about"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Company;
