import React from "react";
export const Footer = () => {
  return (
    <footer id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 mb-lg-0">
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
            <p className="text-center text-lg-left">
              <a href="https:/ShoppingCart">Shop</a>|
              <a href="https:#">Return</a>|<a href="https:#">Delivery</a>|
              <a href="https:/Contact">Contact</a>
            </p>
          </div>
          <div className="col-lg-6 mb-2 mb-lg-0">
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
            <p className="social_special col-md-12 col-sm-12 col-xs-12">
              Copyright © The Ultimate Asian Food Eshop
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
