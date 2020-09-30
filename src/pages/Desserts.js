import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import FavoriteProducts from "../components/FavoriteProducts";

const Desserts = () => {
  const [dessertsCategories, setdessertsCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/productsByCategory/Desserts")
      .then(function (response) {
        setdessertsCategories(response.data);
        console.group(response.data);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Desserts
          </Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
          - Delight yourself with our delicious desserts! -
        </h3>
        <FavoriteProducts data={dessertsCategories} />
        <Company />
      </Container>
    </Layout>
  );
};

export default Desserts;
