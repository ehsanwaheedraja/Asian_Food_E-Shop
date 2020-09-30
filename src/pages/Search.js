import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import FavoriteProducts from "../components/FavoriteProducts";
import { useParams } from "react-router-dom";
const Search = () => {
  const { product } = useParams();

  const [searchProduct, setsearchProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${product}`)
      .then(function (response) {
        setsearchProduct(response.data);
        console.group(response.data);
      });
  }, [product]);

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item id="breadcrumb_links_vertical" active>
            Search
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="red-letters">
          - Your Search Results for.... <i>{product}</i> -
        </h1>
        <FavoriteProducts data={searchProduct} />
        <Company />
      </Container>
    </Layout>
  );
};

export default Search;
