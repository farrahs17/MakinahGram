import React from "react";
import axios from "axios";
import moment from "moment";
import { BrowserRouter as Router, Link } from "react-router-dom";

class PostsList extends React.Component {
  state = {
    posts: [],
    users: []
  };

  componentDidMount() {
    axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
      this.setState({
        posts: response.data
      });
    });
  }
  render() {
    return this.state.posts.map(post => {
      return (
        <div className="post" id={post.id}>
          <div className="post-header">
            <h2>
              <Link to={`/users/${post.user_id}`} id={post.user_id}>
                {post.user.name}
              </Link>
            </h2>
            <time>{moment(post.created_at).format("MMMM Do YYYY")}</time>
          </div>
          <figure>
            <img src={post.image} />
          </figure>
        </div>
      );
    });
  }
}
export default PostsList;
