import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostsList from "./postsList.js";
import Users from "./users.js";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from "react-router-dom";
import Main from "./Router.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <h1>
                <a href="/">Makinahgram</a>
              </h1>
              <ul>
                <li className="home">
                  <NavLink exact to="/" className="homebutton">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/users/2" className="myAccount">
                    My Account
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section className="container">
            <Main />
          </section>

          <footer>
            <p>
              <small>Copyright © 2015 Makinahgram. All rights reserved.</small>
            </p>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">My Account</a>
              </li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
