import React from "react";
import axios from "axios";
import { Switch, Route, Router } from "react-router-dom";
import UserPosts from "./UserPosts.js";
import AddPost from "./AddPost.js";

class MyAccount extends React.Component {
  state = {
    user: [],
    posts: []
  };

  componentDidMount() {
    axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
      this.setState({
        posts: response.data.filter(p => p.user.id === 2)
      });
    });

    axios.get("https://makinahgram-api.herokuapp.com/users/").then(response => {
      this.setState({
        user: response.data[1]
      });
    });
  }

  render() {
    return (
      <div>
        <section className="userinfo">
          <figure>
            <img
              className="profilepic"
              alt="Profile Avatar"
              src={this.state.user.thumbnail}
            />
          </figure>
          <div className="profile-container">
            <h2 className="username">{this.state.user.name}</h2>
            <div className="numbers">
              <ul>
                <li>{this.state.user.followers} Followers</li>
                <li>{this.state.user.following} Following</li>
                <li>{this.state.posts.length} Posts</li>
              </ul>
            </div>
          </div>
        </section>
        <AddPost />
        <div className="profile-content">
          <UserPosts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default MyAccount;
