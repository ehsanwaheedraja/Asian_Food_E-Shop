import React from "react";
import { Layout } from "../layout/Layout";
import { Container, Breadcrumb } from "react-bootstrap";
import faqImage from "../images/faq_main_xl.jpg";
import faqimg from "../images/faq_icon.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FAQ = () => {
  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            FAQ's
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="img-product">
          <img src={faqimg} alt="FAQ Icon" />
        </div>
        <h2 className="red-letters">Frequently Asked Questions</h2>
        <img
          src={faqImage}
          className="col-md-12 col-xs-12 col-sm-12 big-banner"
          alt="aboutImage"
        />
        <Accordion defaultActiveKey="0">
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "30px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="0"
              >
                How Can I Order?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                You can order easily using our online platform. When you find a
                product you need, you can add it to cart, login and go through
                the ordering process. After the order is ready, you will receive
                order summary to your email. Order summary will also be stored
                to your account.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="1"
              >
                Why should I buy online?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Nowadays by ordering online you're not only speeding up the
                shopping process but also relieving pressure on the traditional
                stores during Covid Times. You will get prices faster and you
                will be able to go through order confirmation and payment
                process much faster. This could save days of your time.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="2"
              >
                What payment methods can I use?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                You can use all the major credit cards and Pay Pal.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="3"
              >
                What are the delivery charges?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Delivery charges are dependent on the shipment requirements. If
                the products on your order are due to special requirements (for
                example specialty foods) extra fee will be added to the shipment
                charges. You can see the shipping fees on the checkout process
                before the payment is made.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="4"
              >
                How can I get offer of bulk amounts?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                When you are logged in and you add products to shopping cart,
                you have the ability to send offer request to us using the
                shopping cart. You just need to add the products and quantities
                you are interested in and click “offer request”. We will send
                you an offer. Please note that this feature should only be used
                for bulk quantity price requests.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="5"
              >
                Do I have to order online?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                You can also send your order to order@ultimateasianfood.es. You
                can also order using by calling (+34 607 596 485). Online
                ordering is preferred in most cases because by ordering online,
                you will save time, you will have easier payment process and all
                the information about the order will be accessible for you
                anytime. Also if you want to make same order later, you can use
                “reorder” feature.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card
            style={{
              backgroundColor: "#8d1a20",
              color: "white",
              marginTop: "10px",
            }}
          >
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                style={{ color: "#faf28e" }}
                variant="link"
                eventKey="6"
              >
                How to contact customer service?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                If you have question regarding our online store (ordering,
                account questions, technical questions), please contact
                help@ultimateasianfood.es.
                <br />
                On pricing and shipping related issues you can contact customer
                support at support@ultimateasianfood.es or call +34 607 596 485.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </Layout>
  );
};

export default FAQ;
