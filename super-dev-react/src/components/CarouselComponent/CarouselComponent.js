import React from 'react'


const CarouselComponent = () =>{
  return (
    <div>

      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe className="d-block w-100" src="https://open.spotify.com/embed?uri=spotify:playlist:5EgHMRAr7SBqmK6HSX8dRP" alt="First slide" />
          </div>
          <div className="carousel-item">
            <iframe className="d-block w-100" src="https://open.spotify.com/embed?uri=spotify:playlist:5j8Si4303MCM3wMqXScMF4" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://open.spotify.com/embed?uri=spotify:playlist:5PqMbsx7V1y1YfjZfTlDku" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default CarouselComponent