import React from 'react';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="main-footer">
        <div className="container">
         <div className="row">
    {/* Column 1*/}
          <div className="col-md-3 col-sm-6">
           <h4>COMPANY</h4>
           <ul className="list-unstyled">
            <li>Shopping</li>
            <li>Return Policy</li>
            <li>Work With Us</li>
            <li>Teams & Conditions</li>
           </ul>
          </div>
          {/* Column 2*/}
          <div className="col-md-3 col-sm-6">
           <h4>lorem ipsum</h4>
           <ul className="list-unstyled">
          <li><FaFacebook></FaFacebook> Facebook</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
           </ul>
          </div>
          {/* Column 3*/}
          <div className="col-md-3 col-sm-6">
           <h4>lorem ipsum</h4>
           <ul className="list-unstyled">
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
           </ul>
          </div>
          {/* Column 4*/}
          <div className="col-md-3 col-sm-6">
           <div id="subscribe">
           <p id="txt4">Subscribe to US</p>
           <form> <input id="email" type="email" placeholder="Email"></input>
            </form> <a className="waves-effect waves-light btn">Subscribe</a>
           <p id="txt5">Connect With US</p> <i class="fab fa-facebook-square social fa-2x"></i>
            <i class="fab fa-linkedin social fa-2x"></i> <i class="fab fa-twitter-square social fa-2x"></i>
       </div>
          </div>
         </div>
    {/*footer Bottom */}
       <div className="footer-bottom">
       <p className="text-xs-center">
       @copy:{new Date().getFullYear()} city Guide App - All rights 
     
       </p>
       </div>
        </div> 
        </div>
   
    );
};

export default Footer;