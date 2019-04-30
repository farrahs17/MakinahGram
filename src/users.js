import React from "react";
import axios from "axios";
import { Switch, Route, Router } from "react-router-dom";
import UserPosts from "./UserPosts.js";

class Users extends React.Component {
  state = {
    users: [],
    currentUser: {},
    posts: []
  };

  componentDidMount() {
    axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
      this.setState({
        posts: response.data.filter(
          p => p.user.id == this.props.match.params.id
        )
      });
    });

    axios.get("https://makinahgram-api.herokuapp.com/users/").then(response => {
      this.setState({
        users: response.data
      });
      this.setState({
        currentUser: this.state.users.filter(
          u => u.id == this.props.match.params.id
        )[0]
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
              src={this.state.currentUser.thumbnail}
            />
          </figure>
          <div className="profile-container">
            <h2 className="username">{this.state.currentUser.name}</h2>
            <div className="numbers">
              <ul>
                <li>{this.state.currentUser.followers} Followers</li>
                <li>{this.state.currentUser.following} Following</li>
                <li>{this.state.posts.length} Posts</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="profile-content">
          <UserPosts posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Users;
