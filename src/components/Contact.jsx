import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: 'This field is required' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_74lhqsi', 
      'template_skslzy1', 
      e.target,
      'x0Rdj5YGUZyG6nXXf' 
    )
      .then((result) => {
        console.log(result.text);
        setStatus('SUCCESS');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        setStatus('ERROR');
      });
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleBlur}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={handleBlur}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Send</button>
        </form>
        {status === 'SUCCESS' && <p>Thanks for your message!</p>}
        {status === 'ERROR' && <p>Oops! There was an error.</p>}
      </div>
      <div className="contact-info">
        <p>Email: <a href="mailto:berroadanny@gmail.com">berroadanny@gmail.com</a></p>
        <p>Phone: <a href="tel:3059121443">(305) 912-1443</a></p>
      </div>
    </section>
  );
};

export default Contact;