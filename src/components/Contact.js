const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <label for="firstname">First name:</label>
        <br />
        <input type="text" id="firstname" name="firstname" value="John" />
        <br />
        <label for="lastname">Last name:</label>
        <br />
        <input type="text" id="lastname" name="lastname" value="Doe" />
        <br />
        <br />
        <textarea>Message Me!</textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
