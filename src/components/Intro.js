import Card from "react-bootstrap/Card";
import banner from "../images/intro-banner.png";

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
        <Card.Img
          src={banner}
          alt="intro banner"
          style={{ marginTop: "230px", objectFit: "none" }}
        />
        <Card.ImgOverlay
          style={{ color: "black", marginTop: "100px", fontSize: "30px" }}
        >
          <Card.Title>
            <h1>Hello, my name is Omar</h1>
          </Card.Title>
          <Card.Text>
            <h2>I am a full-stack software developer.</h2>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Intro;
