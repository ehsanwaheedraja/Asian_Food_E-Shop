import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import addressimg from "../images/address_icon.png";
import phoneimg from "../images/phone_icon.png";
import socialimg from "../images/social_hub_icon.png";
import contactimg from "../images/contact_us_icon.png";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Contact-Us
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="img-product">
          <img src={contactimg} alt="Contact Us Icon" />
        </div>
        <h2 className="red-letters">Contact Us</h2>
        <div className="col-md-12 col-sm-12 col-xs-12 margin-top-30">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.7257113413923!2d2.1812495913419974!3d41.38600187916257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fdd0e1fc7b%3A0xb5044c6bb1c3dfd3!2sCarrer%20del%20Rec%2C%2027%2C%2008003%20Barcelona!5e0!3m2!1ses!2ses!4v1599586036100!5m2!1ses!2ses"
            width="100%"
            height="350"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <ul class="list-unstyled row blockquote2">
          <li class="media col-md-4 col-sm-4 col-xs-12">
            <img src={addressimg} class="mr-3" alt="Address Icon" />
            <div class="media-body">
              <h4 class="mt-0 mb-1 new-titles">Address</h4>
              <div>Carrer Del Xef Triomfadors 777</div>
              <div>Barcelona, Spain</div>
              Mon - Fri 8:00 to 16:00
            </div>
          </li>

          <li class="media col-md-4 col-sm-4 col-xs-12">
            <img src={phoneimg} class="mr-3" alt="Phone Icon" />
            <div class="media-body">
              <h4 class="mt-0 mb-1 new-titles">Telephones</h4>
              +34 607 596 485 | +34 933 596 485
            </div>
          </li>

          <li class="media col-md-4 col-sm-4 col-xs-12">
            <img src={socialimg} class="mr-3" alt="Social Icon" />
            <div class="media-body">
              <h4 class="mt-0 mb-1 new-titles">Social Hub</h4>
              <div>Facebook: /ultimateasianfood</div>
              Instagram: @Ultimate.Asian.Food
            </div>
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default Contact;
