"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SliderItem from "./SliderItem";

import experience from "./images/experience.png";
import planning from "./images/planning.png";
import evolution from "./images/evolution.png";

export default class Slider extends React.Component {
  render() {
    return (
      <>
        <div id="home" className="bg-epp-default pt-10">
          <div className="mt-1 md:max-w-screen-xl mx-auto">
            <Carousel
              emulateTouch={true}
              infiniteLoop={true}
              autoPlay={true}
              autoFocus={true}
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
              className="presentation-mode"
            >
              <div key="content-0">
                <SliderItem
                  image={experience}
                  title="Take your events to the next level"
                  message="Experience the synergy of innovation and reliability in the
            technology that's celebrated and adopted by premier event
            organisers globally."
                />
              </div>
              <div key="content-1">
                <SliderItem
                  image={planning}
                  title={"Take your events to the next level"}
                  message="Dive deep into the cutting-edge platform that has been the first choice for leading event organisers across continents."
                />
              </div>
              <div key="content-2">
                <SliderItem
                  image={evolution}
                  title={"Take your events to the next level"}
                  message="Experience first-hand the cutting-edge technology that has garnered the trust and endorsement of professional event organisers and industry leaders across the globe."
                />
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
