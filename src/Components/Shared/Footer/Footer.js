import React from "react";
import { FaFacebook } from "react-icons/fa";
import{AiOutlineTwitter} from "react-icons/ai"
import {FaInstagramSquare} from "react-icons/fa"
import "./Footer.css";

const Footer = () => {
  return (
    <div className>
      <section style={{ height: "80px" }} />
      <div className="row" style={{ textAlign: "center" }}></div>
      {/*--------- Footer ----------*/}
      <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
            <h2>Logo</h2>
            <p>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
              eget faucibus faucibus, purus erat eleifend enim, porta
              pellentesque ex mi ut sem.
            </p>
            <p>© 2021 BS3 UI Kit, All rights reserved</p>
          </div>
          <div className="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div className="col-md-6">
             
            </div>
            <div className="col-md-6">
              <ul className="list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
             {/*link navar used*/}
            <ul>
              <li>
                <a href="#"> <FaFacebook></FaFacebook> Facebook</a>
               
              </li>
              <li>
                <a href="#"> <AiOutlineTwitter></AiOutlineTwitter> Twitter</a>
               
              </li>
              <li>
                <a href="#"> <FaInstagramSquare></FaInstagramSquare> Instagram</a>
               
              </li>
              <li>
                <a href="#">RSS</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
            <p></p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-envelope" />
                </button>
              </span>
            </div>
            {/* /input-group */}
            <p />
          </div>
        </div>
      </footer>
      <section style={{ textAlign: "center", margin: "10px auto" }}>
        <p>
          Designed by <a href="http://enfoplus.net">Mahabub alam</a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
