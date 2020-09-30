import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import aboutImage from "../images/about_us_main_xl.jpg";
import productsimg from "../images/about_us_icon.png";

const About = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            About
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="img-product">
          <img src={productsimg} alt="About Us Icon" />
        </div>

        <h2 className="red-letters">About Us</h2>
        <img
          className="col-md-12 col-xs-12 col-sm-12 big-banner"
          src={aboutImage}
          alt="aboutImage"
        />
        <div className="blockquote2">
          We are a professional e-shop for Asian food articles in Spain.
          Established in 2020, this idea was born beacuse the community of
          people from Pakistan, India and Bangladesh is growing steadily and
          will be interested in buying ingredients that they cannot easily find
          in the Spanish shops, in an e-shop. In addition, Spanish people will
          be interested in buying these products to cook this type of food.
        </div>
        <div className="blockquote2">
          That is the reason why we want to have all the secrets flavors of
          India in one place, Welcome to Ultimate Asian Food!{" "}
        </div>
      </Container>
    </Layout>
  );
};

export default About;
