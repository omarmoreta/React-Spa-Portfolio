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
          marginBottom: "200px",
        }}
      >
        <Card.Img
          src={banner}
          alt="intro banner"
          style={{ marginTop: "250px", objectFit: "cover" }}
        />
        <Card.ImgOverlay
          style={{ color: "black", marginTop: "100px", fontSize: "30px" }}
        >
          <Card.Title style={{ fontSize: "30px" }}>
            Hello, My Name is Omar
          </Card.Title>
          <Card.Text>I am a full-stack web developer.</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Intro;
