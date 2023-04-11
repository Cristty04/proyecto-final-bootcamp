import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static.comunicae.com/photos/notas/1197128/1530787521_Connect_2018.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://extra.codemotion.com/app/uploads/2023/02/hero_img-1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://csscamp.tech/images/seo/csscamp_card_2021.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
