import React, { useState } from "react";
import { Container, Card , Form, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
//import axios from "axios";
import { getImages } from "../images/products/products";
import Axios from "axios";



const CheckoutR = ({data, total, totalItems, price}) => {
  
  let customers_id = localStorage.getItem("id"); // get id from logged-user
  const [inputs, setInputs] = useState({
    card_number: "",
    card_holder_name: "",
    card_expiry_date: "",
    cvv_code : ""
  });

  const { card_number, card_holder_name, card_expiry_date, cvv_code } = inputs;

  const onChange = (e) => {
    console.log(e.target.name)
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  

  const onSubmitForm = async(e) => {
      e.preventDefault();
      e.stopPropagation();

    if(card_number.length < 1 && 
      customers_id.length < 1 &&
      card_holder_name.length < 1 && 
      card_expiry_date.length < 1 &&
      cvv_code.length < 1
      ){
      console.error("This field can not be empty")
      return;
    }
    try{
      let {data} = await Axios.post(`http://localhost:5000/paymentDetails`,{
     ...inputs, 
     customers_id
  })
  console.log(data)
    } catch(error) {
      console.log(error)
    }
    
}

  

  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
    <div className="checkout-main">
    <Card className="card-checkout">
      <h4 className="p-d-checkout">Personal Details</h4>
      <div className="personal-checkout-d">Name : {data[0].firstname} {data[0].lastname} </div>
      <div className="personal-checkout-d">Email : {data[0].user_email} </div>
      <div className="personal-checkout-d">DNI/Passaport : {data[0].dni}</div>
      <h4 className="p-d-checkout">Shipping Details</h4>
    <div className="personal-checkout-d">Shipping address: {data[0].address}</div>
    <h4 className="p-d-checkout">Payment Method</h4>
    <Form onSubmit={onSubmitForm}>
           
              <Form.Group  as={Col}  controlId="formGridEmail">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="card_number"
                  value={card_number}
                  placeholder="Card Number"
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  name="card_holder_name"
                  value={card_holder_name}
                  placeholder="Card Holder Name"
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
            
            <Form.Row>
            <Form.Group as={Col}> 
              <Form.Label>Security Code CVV</Form.Label>
              <Form.Control
                type="text"
                name="cvv_code"
                value={cvv_code}
                placeholder="CVV"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Expire date</Form.Label>
              <Form.Control
                type="date"
                name="card_expiry_date"
                value={card_expiry_date}
                placeholder="Expiry Date"
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Form.Row>
          <button type="submit" className="btn btn-success btn-block">Submit</button>
    </Form>
    </Card>
    
     <Container>
        <h4 className="title-price">Price</h4>
        {data.map ((product, index) => {
            return (
        <div key={index}>
        <ul className="list-unstyled">
          <li className="media">
              <img src={getImages(product.product_pic)} className="mr-3 Cart-pic-c" alt="CartProducts"/>
              <div className="media-body display-checkout-cart">
              <h4 className="mt-0 mb-1 name-p-cart">{product.product_name}</h4>
              <h5 className="unit-price-cart ">Qty:{product.quantity}</h5>
              <h5 className="unit-price-cart">Price :€{product.unit_price}</h5>
              </div>
              <h4 className="cart-price">€{product.unit_price * product.quantity}</h4>
            </li>
          </ul>
        </div>
        )
        }
        )}
        <h4 className="subtotal-rght">Subtotal ({totalItems} items): € {total} </h4>
        <div className="cart-action-checkout">
            
              <Link to="/ConfirmationOrder" className="btn btn-primary checkout-button chk-button">
                Place and Order!!
              </Link>
          
          </div>
        </Container>
       
    </div>
  );
};

export default CheckoutR;