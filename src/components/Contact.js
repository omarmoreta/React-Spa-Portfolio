const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form style={{ marginTop: "50px" }}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" name="name" placeholder="Justin Case" />
        <br />
        <label htmlFor="subject">Subject</label>
        <br />
        <input
          type="text"
          id="sybject"
          name="subject"
          placeholder="Reaching out!"
        />
        <br />
        <label htmlFor="reason">Reason</label>
        <br />
        <select size="1">
          <option value="1">Business</option>
          <option value="2">Employment</option>
          <option value="3">Networking</option>
          <option value="3">Browsing</option>
        </select>
        <br />
        <textarea placeholder="Message here!" rows="3" cols="40"></textarea>
        <br />
        <input id="contact" type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
};

export default Contact;
