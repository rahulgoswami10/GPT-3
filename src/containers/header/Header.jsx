import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai8 from '../../assets/ai8.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.

          <br />
          <br />GPT-3's deep learning neural network is a model with over 175 billion machine learning parameters. To put things into scale, the largest trained language model before GPT-3 was Microsoft's Turing NLG model, which had 10 billion parameters. As of early 2021, GPT-3 is the largest neural network ever produced. As a result, GPT-3 is better than any prior model for producing text that is convincing enough to seem like a human could have written it.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Subscribe</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>2400+ people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai8} alt="ai8" />
      </div>
    </div>
  )
}

export default Header