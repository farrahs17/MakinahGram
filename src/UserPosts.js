import React from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class UserPosts extends React.Component {
  render() {
    return this.props.posts.map(post => {
      return (
        <div>
          <section className="post-grid" id={post.id}>
            <div>
              <img className="grid" src={post.image} />
            </div>
          </section>
        </div>
      );
    });
  }
}
export default UserPosts;
