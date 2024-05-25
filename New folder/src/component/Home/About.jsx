import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section-about" id="section-about">
      <div className="about">
        <h2>Explore the Depths of Knowledge!</h2>
        <br />
        <p>Test your knowledge with our quiz section.</p>
        <p>Dive into challenging questions and discover your score.</p>

        <div className="columns">
          <div className="items">
            <h5 className="h1st">User-Friendly Interface</h5>
            <br />
            <p>Effortlessly explore our platform with an intuitive interface, making your learning experience seamless and enjoyable.</p>
          </div>

          <div className="items">
            <h5 className="h1st">Range of Subjects</h5>
            <br />
            <p>Discover a world of knowledge with quizzes covering math, science, and more. Always something new to learn.</p>
          </div>

          <div className="items">
            <h5 className="h1st">Free Access</h5>
            <br />
            <p>Enjoy unlimited learning without cost, as our platform provides free access to a wealth of knowledge for all.</p>
          </div>

          <div className="items">
            <h5 className="h1st">Multi-Device Syncing</h5>
            <br />
            <p>Seamlessly continue your learning across devices, ensuring your progress is always in sync for uninterrupted enjoyment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
