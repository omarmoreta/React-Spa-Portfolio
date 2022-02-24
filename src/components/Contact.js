import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mobileContact from "../images/mobileContact.webp";
import contact from "../images/contact.jpg";

const Contact = () => {
  const Footer = React.lazy(() => import("./Footer"));

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_i6l3yvf",
        form.current,
        "user_GIi8LXDh6SEAlZ5rawr0e"
      )
      .then(
        (result) => {
          console.log(result.staturs, result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
    alert("Email was was submitted! I will reach out as soon as possible!");
  };

  return (
    <div>
      <Card style={{ border: "none" }}>
        <Card.Img style={{ objectFit: "scale-down" }} />
        <source
          src-set={mobileContact}
          alt="mobile banner"
          media="(min-width: 800px)"
        />
        <img src={contact} alt="contact banner" />

        <Card.ImgOverlay>
          <Card.Title>
            <h1 id="contactME">Contact Me</h1>
          </Card.Title>
          <div>
            <p style={{ color: "red" }}>Fields marked with * are required.</p>
            <form ref={form} onSubmit={sendEmail} style={{ marginTop: "30px" }}>
              <label htmlFor="name">Name*</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Justin Case"
                pattern="[a-zA-Z\s]+"
                required
              />

              <br />
              <label htmlFor="email">Email*</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="JustinCase@mail.com"
                pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                required
              />

              <br />
              <label htmlFor="Subject">Subject</label>
              <br />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Networking"
              />
              <br />
              <label htmlFor="message">Message*</label>
              <br />
              <textarea
                name="message"
                type="text"
                placeholder="Hi there,
                              Thank you for reach out! I will respond back as soon as 
                              Best,
                              Omar"
                rows="6"
                cols="30"
                required
              ></textarea>
              <br />
              <Button as="input" type="submit" value="Submit" />
            </form>
            <Footer />
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Contact;
