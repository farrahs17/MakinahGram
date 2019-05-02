import React from "react";
import axios from "axios";
import Post from "./Post.js";

class PostsList extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    //GET request and saving response in state posts
    axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
      this.setState({
        posts: response.data
      });
    });
  }

  render() {
    //create a Post component for each item in the array state posts
    return this.state.posts.map(post => {
      return (
        <div className="post" id={post.id}>
          <Post
            id={post.id}
            user_id={post.user_id}
            user_name={post.user.name}
            created_at={post.created_at}
            image={post.image}
          />
        </div>
      );
    });
  }
}
export default PostsList;
