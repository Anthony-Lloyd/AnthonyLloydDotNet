import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <form action="/submit_contact" method="post">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
