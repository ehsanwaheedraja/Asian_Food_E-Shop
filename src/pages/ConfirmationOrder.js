import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { Layout } from "../layout/Layout";


import ConfirmationR from '../components/ConfirmationR';


const Confirmation = () => {
  
    let user_id = localStorage.getItem("id"); // get id from logged-user
    const [checkoutInfo, setCheckoutInfo] = useState([]);
    const [total, setTotal] = useState(0);
    const [sumItems, setSumItems] = useState(0);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/checkout/${user_id}`).then(function (response) {
          setCheckoutInfo(response.data);
          let totalPrice = 0;
          let totalItems = response.data.length;
          response.data.forEach(product => {
            totalPrice = totalPrice + (product.unit_price * product.quantity)
          })
          setTotal(totalPrice);
          setSumItems(totalItems);
        });
      }, [user_id]);
    
  return (
    <Layout>
      <Container>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Confirmation page</Breadcrumb.Item>
        </Breadcrumb>
        <h3 className="red-letters">
        - Congratulations! your order has been placed!-</h3>
        <ConfirmationR data={checkoutInfo} total={total} totalItems={sumItems} />
      </Container>
    </Layout>
  );
};

export default Confirmation;