const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <label htmlFor="firstname">First name:</label>
        <br />
        <input type="text" id="firstname" name="firstname" placeholder="John" />
        <br />
        <label htmlFor="lastname">Last name:</label>
        <br />
        <input type="text" id="lastname" name="lastname" placeholder="Doe" />
        <br />
        <br />
        <textarea placeholder="Message here!"></textarea>
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
};

export default Contact;
