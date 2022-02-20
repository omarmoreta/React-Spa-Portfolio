const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form style={{ marginTop: "50px" }}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" placeholder="John Doe" />
        <br />
        <label htmlFor="lastname">Subject</label>
        <br />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Reaching out!"
        />
        <br />
        <br />
        <select size="1">
          <option>Reason</option>
          <option value="1">Business</option>
          <option value="2">Employment</option>
          <option value="3">Networking</option>
          <option value="3">Browsing</option>
        </select>
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
