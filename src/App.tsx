import React from "react";
import "./App.css";

import QuoteBox from "./components/QuoteBox/QuoteBox";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <QuoteBox />
      <Footer />
    </React.Fragment>
  );
}

export default App;
