import React from "react";
import axios from "axios";

//Reusing User page components
import UserPost from "../user/UserPost.js";

class MyAccountPostGrid extends React.Component {
  //Sends a DELETE request and sets the display of image deleted to none
  deleteImage(id) {
    return function(e) {
      axios.delete(`https://makinahgram-api.herokuapp.com/posts/${id}`);
      e.currentTarget.parentNode.setAttribute("class", "post-hidden");
    };
  }

  //Renders similarly to UserPostGrid but adds a delete element
  render() {
    return this.props.posts.map(post => {
      return (
        <div className="close">
          <UserPost id={post.id} image={post.image} />
          <button className="closebtn" onClick={this.deleteImage(post.id)}>
            X
          </button>
        </div>
      );
    });
  }
}

export default MyAccountPostGrid;
