import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./Gallery.scss";

/* slide Image settings */
// const imageCount = 15;
// const images = require.context("../../assets/images/celebrity", true);
// const slideImages = [];

// for (let i = 1; i <= imageCount; i++) {
//   const image = images(`./${i}.png`);
//   slideImages.push(image);
// }
/**********************/

import slideImg1 from "../../assets/images/celebrity/1.png";
import slideImg2 from "../../assets/images/celebrity/2.png";
import slideImg3 from "../../assets/images/celebrity/3.png";
import slideImg4 from "../../assets/images/celebrity/4.png";
import slideImg5 from "../../assets/images/celebrity/5.png";
import slideImg6 from "../../assets/images/celebrity/6.png";
import slideImg7 from "../../assets/images/celebrity/7.png";
import slideImg8 from "../../assets/images/celebrity/8.png";
import slideImg9 from "../../assets/images/celebrity/9.png";

const slideImages = [
  slideImg1,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
  slideImg6,
  slideImg7,
  slideImg8,
  slideImg9,
];

export const Gallery = () => {
  const slideRef = useRef();

  const properties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    slidesToShow: 4,
  };

  return (
    <section className="gallery" id="gallery">
      
      <div className="container">
        <div className="gallery__slider">
          <div className="gallery__slider__wrapper">
            <Slide easing="ease" {...properties} ref={slideRef}>
              {slideImages.map((each, index) => (
                <div key={index} className="gallery__slider__eachItem">
                  <div >

                    <img alt="slide" src={each}></img>

                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
