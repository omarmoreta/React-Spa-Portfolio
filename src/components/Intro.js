import React from "react";
import Card from "react-bootstrap/Card";
import banner from "../images/intro-banner.jpg";
import bannerMobile from "../images/BannerMobile.webp";

const Intro = () => {
  return (
    <div id="home">
      <Card style={{ fontSize: "100px", marginBottom: "50px", border: "none" }}>
        <Card.Img style={{ marginTop: "230px" }} />
        <source
          src-set={bannerMobile}
          alt="mobile banner"
          media="(min-width: 800px)"
        />
        <img src={banner} alt="intro banner" style={{ objectFit: "none" }} />
        <Card.ImgOverlay
          alt="card container for overlay"
          style={{ color: "black", marginTop: "100px", fontSize: "30px" }}
        >
          <Card.Title>
            <h1>Hello, my name is Omar</h1>
          </Card.Title>
          <h2>I am a full-stack software engineer.</h2>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Intro;
