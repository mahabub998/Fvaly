import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner slider-img">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/hWBv36Q/head-Phone.jpg"  className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/4txcYbY/Banner-Two.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/VvvRWNd/banner-Three.jpg" className="d-block w-100 img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Header;