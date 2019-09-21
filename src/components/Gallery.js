import React, {Component} from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
    'images/g.jpg',
    'images/a.jpg',
    'images/c.jpg',
    'images/d.jpg',
    'images/e.jpg',
    'images/f.jpg',
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
                <h1>Gallery</h1>
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