import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilty" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request for early access</h4>
        <h1 className="gradient__text">How does GPT-3 work?</h1>
        <p>
          GPT-3 is a language prediction model. This means that it has a neural network machine learning model that can take input text as an input and transform it into what it predicts the most useful result will be. This is accomplished by training the system on the vast body of internet text to spot patterns. More specifically, GPT-3 is the third version of a model that is focused on text generation based on being pre-trained on a huge amount of text.
          <br />
          <br />
          When a user provides text input, the system analyzes the language and uses a text predictor to create the most likely output. Even without much additional tuning or training, the model generates high-quality output text that feels similar to what humans would produce.
        </p>
        <h4>Request to get notification</h4>
      </div>
    </div>
  );
}

export default Possibility;