import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import { Layout } from "../layout/Layout";
import Carrousel from "../components/Carrousel";
import FavoriteProducts from "../components/FavoriteProducts.js";
import Company from "../components/Company.js";
import productsimg from "../images/productsimg.png";

const Home = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/favorites").then(function (response) {
      setFavoriteProducts(response.data);
      console.group(response.data);
    });
  }, []);

  return (
    <Layout>
      <Container fluid>
        <Carrousel />
        <div className="img-product">
          <img src={productsimg} alt="product"></img>
        </div>
        <h2 className="red-letters">PRODUCTS</h2>
        <FavoriteProducts data={favoriteProducts} />
        <Company />
      </Container>
    </Layout>
  );
};

export default Home;
