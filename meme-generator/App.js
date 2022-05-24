import React, { Component } from "react";
import logo from "./logo2.svg";
import MemeGenerator from "./components/MemeGenerator";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Meme Generator</h2>
        </header>
        <MemeGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
