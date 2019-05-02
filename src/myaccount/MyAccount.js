import React from "react";
import axios from "axios";
import MyAccountPostGrid from "./MyAccountPostGrid.js";

//Reusing User page components
import UserHeader from "../user/UserHeader.js";
import AddPost from "./AddPost.js";

class MyAccount extends React.Component {
  state = {
    user: [],
    posts: []
  };

  componentDidMount() {
    //GET request to get user data
    axios.get("https://makinahgram-api.herokuapp.com/users/").then(response => {
      // eslint-disable-next-line
      this.setState({ user: response.data.filter(u => u.id == 2)[0] });
    });

    //GET request to get all user posts
    axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
      // eslint-disable-next-line
      this.setState({ posts: response.data.filter(p => p.user.id == 2) });
    });
  }

  render() {
    // axios.post("https://makinahgram-api.herokuapp.com/posts",{user_id: 2, image: "https://i.imgur.com/Doloveb.jpg"})
    return (
      <div>
        <UserHeader user={this.state.user} posts={this.state.posts} />
        <AddPost />
        <div className="profile-content">
          <MyAccountPostGrid posts={this.state.posts} className="post-grid" />
        </div>
      </div>
    );
  }
}

export default MyAccount;
