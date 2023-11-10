import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormSubmitted(true);
      } else {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          console.error('Felmeddelande från servern:', errorData.message);

        } else {
          console.error('Okänt fel på servern');
        }
        
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <section className="contact-form">
      <div className="container">
        {formSubmitted ? (
          <p>Formuläret har skickats.</p>
        ) : (
          <div>
            <h1>Leave us a message for any information.</h1>
            <form className="contactform" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="your-massage">
                <input
                  type="text"
                  placeholder="Your Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="btn-yellow" type="submit">
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;





