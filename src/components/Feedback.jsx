import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  emailjs.init('YOUR_USER_ID');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      feedback: feedback,
      from_email: email,
      to_email: 'swarnavo.pramanik8697@gmail.com',
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Feedback sent!', response.status, response.text);
        setSubmitted(true);
        setFeedback('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your feedback"
          style={{
            border: '2px solid #ccc',
            boxSizing: 'border-box',
            borderRadius: '4px',
            resize: 'none',
            width: '50%',
            height: '100px',
          }}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <input
          name="email"
          style={{
            display: 'flex',
            alignItems: 'right',
            border: '2px solid #ccc',
            width: '50%',
            height: '50px',
            borderRadius: '4px',
          }}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          style={{
            borderRadius: '4px',
            border: '1px solid #ccc',
            height: '40px',
            width: '100px',
            marginTop: '30px',
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
  );
};

export default Feedback;
