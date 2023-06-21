import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';

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

    <div className="absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 z-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Share Your Feedback</p>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-2">
        <textarea
          className="p-2 outline-none"
          placeholder="Enter Your Feedback"
          style={{ border: '2px solid #ccc', boxSizing: 'border-box', borderRadius: '4px', resize: 'none', width: '100%', height: '100px' }}
          value={feedback}
          onChange={(e) => setFeedBack(e.target.value)}
        />
        <input
          className="p-2 outline-none"
          name="email"
          type="email"
          style={{ display: 'flex', alignItems: 'right', border: '2px solid #ccc', width: '100%', height: '50px', borderRadius: '4px' }}
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white hover:drop-shadow-xl" type="submit" onClick={handleSubmit} style={{ borderRadius: '4px', border: '1px solid #ccc', height: '40px', width: '100px', marginTop: '30px' }}>Submit</button>
        </div>
      </form>
      {submitted && (
        <div className="text-center">
          <p style={{ width: '80%', margin: 'auto', padding: '2px' }}>Sent!</p>
        </div>
      )}
    </div>
  );
};
export default Feedback;
