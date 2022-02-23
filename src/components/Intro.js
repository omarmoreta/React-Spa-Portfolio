import React from "react";
import Card from "react-bootstrap/Card";
const banner = React.lazy(() => import("../images/intro-banner.jpg"));
const bannerMobile = React.lazy(() => import("../images/BannerMobile.webp"));

const Intro = () => {
  return (
    <div id="home">
      <Card
        style={{
          fontSize: "100px",
          marginBottom: "50px",
          border: "none",
        }}
      >
        <Card.Img style={{ marginTop: "230px", objectFit: "none" }} />
        <source srcSet={banner} alt="intro banner" media="(min-width: 800px)" />
        <img src={bannerMobile} alt="mobile banner" />

        <Card.ImgOverlay
          style={{ color: "black", marginTop: "100px", fontSize: "30px" }}
        >
          <Card.Title>
            <h1>Hello, my name is Omar</h1>
          </Card.Title>
          <h2>I am a full-stack software developer.</h2>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Intro;
