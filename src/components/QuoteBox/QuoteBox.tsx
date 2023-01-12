import React, { useEffect, useState } from "react";
import "./QuoteBox.css";
import TwitterIcon from "../../img/twitter.png";
import QuoteLeft from "../../img/quote-left.svg";
import Quotes from "./quotes.json";

function QuoteBox() {
  let [currentQuote, setCurrentQuote] = useState("");
  let [currentAuthor, setCurrentAuthor] = useState("");
  let [currentColor, setCurrentColor] = useState("");

  const TWEETLINK = "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
  encodeURIComponent('"' + currentQuote + '"\n- ' + currentAuthor + '\n')

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
      <img src={QuoteLeft} alt="Quote Left" />
      <p id="text" style={{"color": currentColor}}>{currentQuote}</p>
      <span id="author" style={{"color": currentColor}}>- {currentAuthor}</span>
      <div className="btns">
        <button style={{"backgroundColor": currentColor}}>
          <a
            href={TWEETLINK}
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterIcon} alt="Twitter icon" />
          </a>
        </button>
        <button id="new-quote" onClick={newQuote} style={{"backgroundColor": currentColor}}>New quote</button>
      </div>
    </div>
  );
}

export default QuoteBox;
