import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
import ai7 from '../../assets/ai7.png';
import {BsWhatsapp} from 'react-icons/bs';
// import {SiGmail} from 'react-icons/si';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-photo">
        <img src={ai7} alt="ai7" />
      </div>
      
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src= {gpt3Logo} alt="logo" />
          <p>&copy; <span className="danger">Rahul Goswami</span> | All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy & Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Get in touch</h4>
          {/* <p>Rahul Goswami</p> */}
          <a href="https://www.facebook.com"><span className="danger">Rahul Goswami</span></a>
          <p>therahulgoswami99@gmail.com</p>
          <p><BsWhatsapp /> +91 9679441193</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
        <span>UI designing credits: AS Shakir</span>
      </div>
    </div>
  )
}

export default Footer