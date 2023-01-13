import React, { useEffect, useState } from "react";
import "./QuoteBox.css";
import TwitterIcon from "../../img/twitter.png";
import Quotes from "./quotes.json";

function QuoteBox() {
  let [currentQuote, setCurrentQuote] = useState("");
  let [currentAuthor, setCurrentAuthor] = useState("");
  let [currentColor, setCurrentColor] = useState("");

  const TWEETLINK =
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
    encodeURIComponent('"' + currentQuote + '"\n- ' + currentAuthor + "\n");

  let colors = [
    "#C7EAE4",
    "#311E10",
    "#EFCA08",
    "#E2AFDE",
    "#A7E8BD",
    "#FFD972",
    "#55DDE0",
    "#2F4858",
    "#EBB3A9",
    "#38A3A5",
    "#684A52",
    "#706C61",
  ];

  function newQuote() {
    getRandomQuote();
    getRandomColor();
  }

  function getRandomQuote() {
    const quote =
      Quotes.quotes[Math.floor(Math.random() * Quotes.quotes.length)];
    setCurrentQuote(quote.quote);
    setCurrentAuthor(quote.author);
  }

  function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(color);
    document.body.style.backgroundColor = color;
  }

  useEffect(() => {
    getRandomQuote();
    getRandomColor();
  }, []);

  return (
    <div id="quote-box">
      <p id="text" style={{ color: currentColor }}>
        <svg
          id="quote-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ fill: currentColor }}
        >
          {" "}
          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
        </svg>
        {currentQuote}
      </p>
      <span id="author" style={{ color: currentColor }}>
        - {currentAuthor}
      </span>
      <div className="btns">
        <button style={{ backgroundColor: currentColor }}>
          <a href={TWEETLINK} id="tweet-quote" target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt="Twitter icon" style={{ width: 24 }} />
          </a>
        </button>

        <button
          id="new-quote"
          onClick={newQuote}
          style={{ backgroundColor: currentColor }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
