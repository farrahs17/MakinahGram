import React from "react";

const UserHeader = props => {
  return (
    <section className="userinfo">
      <figure>
        <img
          className="profilepic"
          alt="Profile Avatar"
          src={props.user.thumbnail}
        />
      </figure>
      <div className="profile-container">
        <h2 className="username">{props.user.name}</h2>
        <div className="numbers">
          <ul>
            <li>{props.user.followers} Followers</li>
            <li>{props.user.following} Following</li>
            <li>{props.posts.length} Posts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserHeader;
