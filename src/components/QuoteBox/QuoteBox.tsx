import React, { useState } from "react";
import './QuoteBox.css';
import TwitterIcon from "../../img/twitter.png";

function QuoteBox() {
  return (
    <div id="quote-box">
      <p id="text">Education costs money. But then so does ignorance.</p>
      <span id="author">- Sir Claus Moser</span>
      <div className="btns">
        <button>
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="Twitter icon" />
          </a>
        </button>
        <button id="new-quote">New quote</button>
      </div>
    </div>
  );
}

export default QuoteBox;
