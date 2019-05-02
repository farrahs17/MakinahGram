import React from "react";
import axios from "axios";

class AddPost extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    axios.post("https://makinahgram-api.herokuapp.com/posts", {
      user_id: 2,
      image: this.state.value
    });
    this.setState({
      value: ""
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="addpost">
        <form className="form">
          <h1>Add a post</h1>
          <div className="form-margin">
            <label>
              Image url:
              <input type="text" name="image" onChange={this.handleChange} />
            </label>
            <button onClick={this.handleSubmit} type="submit" value="submit">
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
