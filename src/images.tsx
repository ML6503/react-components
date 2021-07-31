// Unsplash Source API for random images
import React from 'react';
import './app.css';

const imgArr: Array<number> = Array.from(Array(9).keys());

const Images = (): JSX.Element => (
  <div className="cards-container flex-center">
    {imgArr.map((el) => (
      <div key={el} className="card-container flex-center">
        <div className="card flex-center">
          <span className="details">
            <p>Photo Name</p>
            <p>by: Author Name</p>
          </span>
          <img
            className="img"
            src="https://picsum.photos/150"
            alt="Random photography fom the picsum stock"
          />
          <span className="card-bottom flex-center">
            <span  className="logo-wrapper flex-center">
              <img
              className="like-logo"
              src="../public/like.svg"
              alt="like logo"
              />
              <p>100</p>
            </span>
            <span  className="logo-wrapper flex-center">
              <img
              className="eye-logo"
              src="../public/eye.svg"
              alt="eye logo"
              />
              <p>1003</p>
            </span>
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default Images;
