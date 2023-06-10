import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import '../App.css';
import { classNames } from '@syncfusion/ej2/buttons';


const Feedback = () => {
      const [feedback,setFeedBack] = useState('');
      const [submitted,setSubmitted] = useState(false);
      const[email,setEmail] = useState('');
      emailjs.init('1AkXF-PC-6FG2Ym15')

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams ={
            feedback:feedback,
            from_email:email,
            to_email:'swarnavo.pramanik8697@gmail.com',
        };
        emailjs
        .send('service_c8wox7q', 'template_47lh3vm', templateParams,'1AkXF-PC-6FG2Ym15')
    .then((response) => {
      console.log('Feedback sent!', response.status, response.text);
      setSubmitted(true);
      setFeedBack('');
      setEmail('')
    })
    .catch((error) => {
      console.error('Error sending feedback:', error);
    });


    };
  return (
    <>
      <div style={{
        backgroundColor: 'white',
        margin: '100px',
        marginBottom: '40px',
        marginTop:'100px',
        paddingTop:'40px',
        height: '500px',
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
      }}>
      
        
        <div style={{
          marginTop: '50px',
          width:'500px'
        }}>
          <form onSubmit={handleSubmit} >
            <div style={{marginLeft:'100px'}}>
          <h1 style={{marginBottom:'10px',fontSize:'30px',fontWeight:'bold'}}>Feedback Form</h1>
            <textarea placeholder="Enter your feedback"
              style={{
                border: '2px solid #ccc',
                boxSizing: 'border-box',
                borderRadius: '4px',
                resize: 'none',
                width: '200%',
                height: '150px',
                marginBottom: '20px',
                backgroundColor:'#f8f8f8'
              }}
            value = {feedback}
            onChange = {(e)=>setFeedBack(e.target.value)}>

            </textarea>
            <input
            name = "email"
              style={{
                display: 'flex',
                alignItems: 'right',
                border: '2px solid #ccc',
                width: '100%',
                height: '50px',
                borderRadius: '4px',
                backgroundColor:'#f8f8f8'
              }}
            placeholder='Enter your email'
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            />

            <button type="submit" onClick={handleSubmit}
              style={{
                borderRadius: '4px',
                border: '1px solid #ccc',
                height: '40px',
                width: '100px',
                marginTop: '30px',
                backgroundColor: '#40B5AD',
                borderRadius: '9px'
                }}>
                Submit</button>
              </div>
            </form>
            {submitted &&(
                <div>
              <p style={{
                marginLeft: '100px',
                marginTop: '10px',
                fontSize: '15px'
              }}>Sent!</p>
                </div>
          )}
          </div>
      </div>
    </>
  )
};
export default Feedback;