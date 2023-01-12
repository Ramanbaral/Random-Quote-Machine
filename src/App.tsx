import React from "react";
import "./App.css";

function App() {
  return (
    <div id="quote-box">
      <p id="text">Education costs money. But then so does ignorance.</p>
      <span id="author">- Sir Claus Moser</span>
      <div className="btns">
        <button><a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noreferrer">Twitter Icon</a></button>
        <button id="new-quote">New quote</button>
      </div>
    </div>
  );
}

export default App;
