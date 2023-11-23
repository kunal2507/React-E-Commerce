import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/banner4.jpg"
            alt="Card"
            height={400}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bolder text-dark ">New Season Arrivals. Shop With Us. Save With Us.🛒</h5>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
