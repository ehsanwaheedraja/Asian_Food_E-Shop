import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import FavoriteProducts from "../components/FavoriteProducts";

const Species = () => {
  const [SpicesCategorie, setSpicesCategorie] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/productsByCategory/Spices")
      .then(function (response) {
        setSpicesCategorie(response.data);
        console.group(response.data);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Spices
          </Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
          - The best aromas and flavors can be found in our spices! -
        </h3>
        <FavoriteProducts data={SpicesCategorie} />
        <Company />
      </Container>
    </Layout>
  );
};

export default Species;
