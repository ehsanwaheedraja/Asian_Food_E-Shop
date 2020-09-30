import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";
import Company from "../components/Company.js";

import CartRender from '../components/Cart'

const ShoppingCart = () => {
  let user_id = localStorage.getItem("id"); // get id from logged-user
  const [Cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sumItems, setSumItems] = useState(0);

  const  removeItem = (id) => {
      axios.delete(`http://localhost:5000/orderItems/${id}`).then(function (response) {
          console.log(response);
        });
      let orderItem = Cart.findIndex(item => item.id===id) ;
      setCart(Cart.splice(orderItem, 1))
  }

  
  
  useEffect(() => {
    axios.get(`http://localhost:5000/orderDetails/${user_id}`).then(function (response) {
      setCart(response.data);
      let totalPrice = 0;
      let totalItems = response.data.length;
      response.data.forEach(product => {
        totalPrice = totalPrice + (product.unit_price * product.quantity)
      })
      setTotal(totalPrice);
      setSumItems(totalItems);
    });
  }, [Cart, user_id]);


  return (
    <Layout>
      <Container>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>ShoopingCart</Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
        - Your Cart -</h3>
        <CartRender data={Cart} total={total} totalItems={sumItems} removeItem={removeItem}/>
        <Company />
      </Container>
    </Layout>
  );
};

export default ShoppingCart;
