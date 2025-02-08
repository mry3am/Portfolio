import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
  
    // Add your API key
    formData.append("access_key", "41ae4cb4-6416-4ad6-996f-40117823c703");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    console.log("Form Data:", json); // Log form data for debugging
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      // Check if the response is ok
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Failed to submit form:", errorText);
        alert("Something went wrong. Please try again.");
        return;
      }
  
      const data = await res.json();
      console.log("Response Data:", data); // Log response data for debugging
  
      if (data.success) {
        console.log("Success", data);
        alert("Thank you for reaching out! Your message has been sent.");
      } else {
        console.error("Submission error:", data);
        alert("There was an issue with your submission. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  
  



  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm always open to new projects and opportunities. Whether you're
            looking for freelance work, have a question, or just want to discuss
            potential collaborations, don’t hesitate to reach out. Let’s connect
            and bring your ideas to life!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>hypervadesolutions@gmailcom</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="" /> <p>+923044999749</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />{" "}
              <p>Faisalabad, Punjab, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
