import React from 'react';
import Feature from '../../components/feature/Feature';
import ai9 from '../../assets/ai9.png';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="what is GPT3" text="In May 2020, OpenAI, an AI research lab founded by Elon Musk, launched the latest version of an AI-based Natural Language Processing system named GPT-3 that can mimic human language. This 175-billion parameter deep learning language model was trained on larger text datasets that contain hundreds of billions of words." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <img src={ai9} alt="ai9"/>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Providing context-sensitive help is quite common in software. But most times users will have secondary questions, and now it’s common to provide chatbots for this purpose." />
        <Feature title="coding" text="There are numerous online demos where users demonstrated GPT-3’s abilities to turn human language instructions into code. However, please note that none of these are robust , production ready systems. They are based on online demonstrations of GPT-3’s potential:" />
        <Feature title="Mathematical Decoders" text="More than language learning, GPT-3 can learn math. Note that the program will not know all mathematical theories, but it can generate accurate answers to given equations, such as those used in accounting." />
      </div>
    </div>
  )
}

export default WhatGPT3