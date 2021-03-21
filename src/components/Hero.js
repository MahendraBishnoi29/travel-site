import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/videoblocks-flight-over-dramatic-autumn-sunset-landscape-small-mountain-village-in-canyon-surrounded-meadows-orange-hills-pine-tree-forests-carpathians-ukraine-europe-vintage-retro-dark-toning-filter-__5b4a2d854702e3211252044a2058c469__P360.mp4"
        autoPlay
        loop
        muted
      /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
