"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
        <div key="content-0" className="my-slide primary">
            Slider 1
        </div>
        <div key="content-1" className="my-slide content">
            Slider 2
        </div>
      </Carousel>
    );
  }
}
