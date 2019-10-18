import React, {Component} from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
    'images/gallery/kamie.jpg',
    'images/gallery/集合写真.jpg',
];

const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1 style={{
          fontSize: '40px',
        }}>Gallery</h1>
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {
              images.map((each, index) => <img key={index} style={{width: "100%", height: "100%"}} src={each} />)
            }
          </Zoom>
        </div>
      </section>
    );
  }
}
