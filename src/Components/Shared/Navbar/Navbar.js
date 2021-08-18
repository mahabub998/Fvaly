import React from "react";
import Login from './../../Login/Login';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            FVALLY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="/home">
                  ALL PRODUCTS
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="*">
                  GIFT CARDS
                </a>
              </li>
              <li className="nav-item ms-5">
              <a className="nav-link active" aria-current="page" href="*">
                  NEWS FEED
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="/login">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
