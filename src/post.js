import React from "react";
import "./App.css";
import PostsList from "./postsList";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user_id: "",
      image: "",
      created_at: "",
      updated_at: ""
    };
  }

  render() {
    return (
      <div className="post" id={this.state.id}>
        <div className="post-header">
          <h2>
            <a href="#">{this.state.user_id}</a>
          </h2>
          <time>{this.state.created_at}</time>
        </div>
        <figure>
          <img src={this.state.image} />
        </figure>
      </div>
    );
  }
}

export default Post;
