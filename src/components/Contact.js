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
        "Portfolio",
        form.current,
        "user_GIi8LXDh6SEAlZ5rawr0e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
          srcSet={contact}
          alt="contact banner"
          media="(min-width: 800px)"
        />
        <img src={mobileContact} alt="mobile banner" />

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
                pattern="\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                required
              />

              <br />
              <label htmlFor="subject">Subject</label>
              <br />
              <select size="1">
                <option id="subject1" name="subject" value="business">
                  Business
                </option>
                <option id="subject2" name="subject" value="employment">
                  Employment
                </option>
                <option id="subject3" name="subject" value="networking">
                  Networking
                </option>
                <option id="subject4" name="subject" value="more info">
                  More Info
                </option>
              </select>
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
                rows="5"
                cols="50"
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
