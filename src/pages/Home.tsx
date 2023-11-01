import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img src="/img/profile.png" alt="alt text" className="profile-image" />
      <h1>Anthony Lloyd</h1>
      <p>my name chef.</p>
      {/* Additional content can go here */}
    </div>
  );
}

export default Home;
