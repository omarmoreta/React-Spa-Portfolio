import Card from "react-bootstrap/Card";
import img from "../images/software-developer.jpg";

const Intro = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Card
        className="bg-white"
        style={{ fontFamily: "Courier New", fontWeight: "bold" }}
      >
        <Card.Img
          src={img}
          alt="software-develops in office"
          style={{ width: "100vw", height: "100vh", objectFit: "contain" }}
        />
        <Card.ImgOverlay
          style={{ color: "black", marginTop: "2px", fontSize: "30px" }}
        >
          <Card.Title>Hello, My Name is Omar</Card.Title>
          <Card.Text>I am a full-stack web developer.</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Intro;
