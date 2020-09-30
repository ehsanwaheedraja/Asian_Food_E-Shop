import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import FavoriteProducts from "../components/FavoriteProducts";

const AsianTraditionalFood = () => {
  const [AsianTraditionalFood, setAsianTraditionalFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/productsByCategory/Asian")
      .then(function (response) {
        setAsianTraditionalFood(response.data);
        console.group(response.data);
      });
  }, []);

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Asian-Tradional-Food
          </Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
          - Feel at home with the flavors of our traditional Asian cuisine! -
        </h3>
        <FavoriteProducts data={AsianTraditionalFood} />
        <Company />
      </Container>
    </Layout>
  );
};

export default AsianTraditionalFood;
