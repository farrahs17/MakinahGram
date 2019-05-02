import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Permanent.js";
import Main from "./Main.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    );
  }
}

export default App;
