import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Feedback = () => {
  const [feedback, setFeedBack] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  emailjs.init('1AkXF-PC-6FG2Ym15');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      feedback,
      from_email: email,
      to_email: 'swarnavo.pramanik8697@gmail.com',
    };
    emailjs
      .send('service_c8wox7q', 'template_47lh3vm', templateParams, '1AkXF-PC-6FG2Ym15')
      .then((response) => {
        console.log('Feedback sent!', response.status, response.text);
        setSubmitted(true);
        setFeedBack('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
      });
  };
  return (

    <div>
      <form onSubmit={handleSubmit} style={{ width: '80%', margin: 'auto' }}>
        <textarea
          placeholder="Enter your feedback"
          className="border border-gray-300 rounded-md resize-none w-1/2 h-24 p-5 text-gray-500 dark:text-gray-100 dark:bg-[#484B52]"
          value={feedback}
          onChange={(e) => setFeedBack(e.target.value)}
        />
        <input
          name="email"
          type="email"
          className="flex items-end border border-gray-300 w-1/2 h-12 rounded-md p-5 text-gray-500 dark:text-gray-100 dark:bg-[#484B52]"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit} className="border border-gray-300 rounded-md h-10 w-24 mt-8 bg-[#03c9d7] text-gray-100" bgHoverColor="light-gray">Submit</button>
      </form>
      {submitted && (
        <div>
          <p className="w-80 mx-auto p-2">Sent!</p>
        </div>
      )}
    </div>
  );
};
export default Feedback;
