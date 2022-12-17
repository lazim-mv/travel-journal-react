import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <div className="img-container">
        <img className="image" src={props.imageUrl} alt="" />
      </div>
      <div className="wrap">
        <div className="country-container">
          <h4 className="japan">{props.location}</h4>
          <a className="google" href={props.googleMapsUrl}>View On Google Maps</a>
        </div>
        <div className="desc">
          <h1 className="title">{props.title}</h1>
          <p className="date">{props.startDate}</p>
          <p className="article">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
