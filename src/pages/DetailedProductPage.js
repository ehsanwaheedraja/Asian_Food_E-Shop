import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";
import productsimg from "../images/productsimg.png";
import FavoriteProducts from "../components/FavoriteProducts.js";
import DetailedProductRender from '../components/DetailedProductRender';

const DetailedProduct = () => {

  const {id} = useParams();
  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/productsByID/${id}`).then(function (response) {
      setProduct(response.data);
    });
  }, [id]);

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/favorites").then(function (response) {
      setFavoriteProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <Container>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>ShoopingCart</Breadcrumb.Item>
        </Breadcrumb>
        <DetailedProductRender data={product}/>
        <div className="img-product">
          <img src={productsimg} alt="product"></img>
        </div>
        <h2 className="red-letters">PRODUCTS</h2>
        <FavoriteProducts data={favoriteProducts}/>
        <Company />
      </Container>
    </Layout>
  );
};

export default DetailedProduct;