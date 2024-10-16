import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please complete the form above");
    }

    setLoading(true);

    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      to_email: "karanraval424@gmail.com",
    };

    emailjs
      .sendForm("service_xgzuufa", "template_0prqimr", form.current, {
        publicKey: "AzNwrnyWk3bsAAfhz",
      })
      .then(
        () => {
          setLoading(false);
          toast.success("Successfully sent email.");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error in sending email: " + (error.text || error));
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <br />
          <p className="contact__details">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. 
            <br />
            <br />
            Please wait for a while all major projects will be
            listed soon. Till then keep visiting. Connect with me over live
            chat !
            <br />
            <br />
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form ref={form} onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              value={subject}
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  );
};

export default Contact;
