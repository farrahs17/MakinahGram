import React from "react";
import UserHeader from "./UserHeader.js";
import UserPostGrid from "./UserPostGrid.js";
import axios from "axios";

class User extends React.Component {
  state = {
    users: [],
    currentUser: [],
    posts: []
  };

  componentDidMount() {
    //GET request to get all user data
    axios.get("https://makinahgram-api.herokuapp.com/users/").then(response => {
      this.setState({ users: response.data });

      //Saving the data of the user as a state
      // eslint-disable-next-line
      this.setState({
        currentUser: this.state.users.filter(
          u => u.id == this.props.match.params.id
        )[0]
      });
    });

    axios.get("https://makinahgram-api.herokuapp.com/posts").then(response => {
      // eslint-disable-next-line
      this.setState({
        posts: response.data.filter(
          p => p.user.id == this.props.match.params.id
        )
      });
    });
  }

  render() {
    return (
      <div>
        <UserHeader user={this.state.currentUser} posts={this.state.posts} />
        <div className="profile-content">
          <UserPostGrid posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default User;
