import Card from "react-bootstrap/Card";
import img from "../images/software-developer.jpg";

const About = () => {
  return (
    <div>
      <Card
        className="bg-white"
        style={{ fontFamily: "Courier New", fontWeight: "bold" }}
      >
        <Card.Img
          src={img}
          alt="software-develops in office"
          style={{ width: "100vw", height: "100vh", objectFit: "contain" }}
        />
        <Card.ImgOverlay style={{ color: "black", marginTop: "2px" }}>
          <Card.Title>
            <h1>Hello, My Name is Omar Moreta</h1>
          </Card.Title>
          <Card.Text>
            <h2>I am a full-stack web developer.</h2>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default About;
