import React, { useState } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
  const [feedback, setFeedBack] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  emailjs.init("1AkXF-PC-6FG2Ym15");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      feedback: feedback,
      from_email: email,
      to_email: "swarnavo.pramanik8697@gmail.com",
    };
    emailjs
      .send(
        "service_c8wox7q",
        "template_47lh3vm",
        templateParams,
        "1AkXF-PC-6FG2Ym15"
      )
      .then((response) => {
        console.log("Feedback sent!", response.status, response.text);
        setSubmitted(true);
        setFeedBack("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error sending feedback:", error);
      });
  };
  return (
    <div
      style={{
        justifyItems: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div style={{ width: "50%", marginTop: "3rem" }}>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="enter your feedback"
            style={{
              border: "2px solid #ccc",
              boxSizing: "border-box",
              borderRadius: "4px",
              resize: "none",
              width: "85%",
              height: "100px",
            }}
            value={feedback}
            onChange={(e) => setFeedBack(e.target.value)}
          ></textarea>
          <input
            name="email"
            style={{
              display: "flex",
              alignItems: "right",
              border: "2px solid #ccc",
              width: "65%",
              height: "50px",
              borderRadius: "4px",
            }}
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              borderRadius: "4px",
              border: "1px solid #ccc",
              height: "40px",
              width: "100px",
              marginTop: "30px",
            }}
          >
            Submit
          </button>
        </form>
        {submitted && (
          <div>
            <p>Sent!</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Feedback;
