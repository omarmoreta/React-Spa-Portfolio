import Card from "react-bootstrap/Card";
import banner from "../images/intro-banner.png";

const Intro = () => {
  return (
    <div>
      <Card
        className="bg-white"
        style={{
          fontFamily: "Courier New",
          fontWeight: "bold",
          marginBottom: "100px",
        }}
      >
        <Card.Img
          src={banner}
          alt="intro banner"
          style={{ marginTop: "230px", objectFit: "cover" }}
        />
        <Card.ImgOverlay
          style={{ color: "black", marginTop: "70px", fontSize: "30px" }}
        >
          <Card.Title style={{ fontSize: "30px" }}>
            Hello, my name is Omar
          </Card.Title>
          <Card.Text>I am a full-stack web developer.</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Intro;
