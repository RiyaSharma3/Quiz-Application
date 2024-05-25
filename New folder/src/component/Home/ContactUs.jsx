import React from 'react';
import './ContactUs.css';
import footvideo from './images/footer_video.mp4'

const ContactUs = () => {
  return (
    <section className="section-contactUs" id="section-contactUs">
      <div className="video-container">
        <video autoPlay muted loop className="bg-video">
          <source src={footvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="contactUs">
          <h2>Drop Us a Note!</h2>
          <input className="input" placeholder="Name" /><br />
          <input className="input" placeholder="Email" /><br />
          <input className="input" placeholder="Message" /><br />
          <button id="submitt">SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
