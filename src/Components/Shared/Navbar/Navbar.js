import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            FVALLY
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item ms-5">
                <a class="nav-link active" aria-current="page" href="/home">
                  HOME
                </a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link active" aria-current="page" href="/product">
                  COLlECTIONS
                </a>
              </li>
              <li class="nav-item ms-5">
              <a class="nav-link" href="">
                  OUR STORY
                </a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link active" aria-current="page" href="/login">
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
