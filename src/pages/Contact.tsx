import React from 'react';
import '../index.css';
const Contact: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
