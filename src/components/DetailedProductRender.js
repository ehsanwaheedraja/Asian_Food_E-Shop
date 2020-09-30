import React, { useState} from "react";
import { Button, Container, Col, Image } from 'react-bootstrap';
import { getImages } from "../images/products/products";
import axios from "axios";




const RenderProduct = ({data}) => {
  
  const [Qty, setQty] = useState(1);
  const onChange = (e) => {
    setQty(e.target.value)
  }
  const handlerAddShoppingCart = async() => {
    let user_id = localStorage.getItem("id"); // get id from logged-user

    //get order items from user-id 
    let {data:order} =  await axios.get(`http://localhost:5000/order/${user_id}`);
    
    //validation if data (there are orders for that id? is it empty)
    let newItem;
    if(order.length < 1) { 
      let newOrder = await axios.post('http://localhost:5000/order', {
        customer_id : user_id
      })
      
      newItem = await axios.post('http://localhost:5000/orderItems', {
        order_id: newOrder.data.order.id,
        product_id: data.id,
        quantity: Qty
      })
    } else {
      newItem = await axios.post('http://localhost:5000/orderItems', {
        order_id: order[0].id,
        product_id: data.id,
        quantity: Qty
      })
    }

     console.log(newItem)
    
  }




  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
        <Container>   
    <div className="main-detailed-product">
        <div className="image-product-detail">
         <Col className="image-product-detail">
         <Image src={getImages(data.product_pic)} rounded />
         </Col>
         </div>
         <div className="info-product-detailed">
                <h3 className="name-detailed-product">{data.product_name}</h3>
                <div className="description-detailed-product">
                <div>Description: </div>
                <div className="description-detailed-p">{data.description}</div>
                </div>
                <div className="description-detailed-product">
                <div>Categorie   : </div>
                <div className="description-detailed-p">{data.name}</div>
                </div>
                <div className="price-detailed-product">
                <div>Price      :</div>
                <h4 className="cart-price">€{data.unit_price}</h4>
                </div>
                <div className="qty-detailed-product">
                    <select onChange={(e) => onChange(e)}>
                        <option value="1">Qty: 1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        </select>
                </div>
                <div className="add-cart-button">
                <Button variant="primary" type="submit" onClick={handlerAddShoppingCart}>
                <i className="fa fa-shopping-cart"></i>
            Add to Cart
          </Button>
            </div>
                <p className="social">
              <a href="#" className="facebook external">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="twitter external">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="instagram external">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="gplus external">
                <i className="fab fa-google-plus"></i>
              </a>
              <a href="#" className="email external">
                <i className="fa fa-envelope"></i>
              </a>
            </p>
            
                <p className="social text-lg-right">
              <a href="#" className="Mastercard Credit Card">
                <i className="fab fa-cc-mastercard"></i>
              </a>
              <a href="#" className="Visa Credit Card">
                <i className="fab fa-cc-visa"></i>
              </a>
              <a href="#" className="Paypal Credit Card">
                <i className="fab fa-cc-paypal"></i>
              </a>
              <a href="#" className="Amex Credit Card">
                <i className="fab fa-cc-amex"></i>
              </a>
            </p>
        </div>
    </div>
    </Container>
        )
  };

export default RenderProduct;