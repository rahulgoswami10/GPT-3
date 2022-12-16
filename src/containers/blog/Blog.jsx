import React from 'react';
import me9 from '../../assets/me9.png';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__myself" id="blog">
      <div className="gpt3__myself-content">
        <h3>WebSite Developed By-</h3>
        <h1 className="gradient__text">Rahul Goswami</h1>
      </div>
      <div className="gpt3__myself-socials">
        <a href="https://www.facebook.com"><AiFillFacebook /></a>
        <a href="https://www.instagram.com"><AiFillInstagram /></a>
        <a href="https://rahulgoswami.netlify.app/"><BiWorld /></a>
      </div>
      <div className="gpt3__myself-image">
        <img src= {me9} alt="profilephoto" />
      </div>
    </div>
  )
}

export default Blog