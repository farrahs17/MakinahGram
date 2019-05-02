import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Post = props => {
  return (
    <div className="post" id={props.id}>
      <div className="post-header">
        <h2>
          <Link to={`/users/${props.user_id}`} id={props.user_id}>
            {props.user_name}
          </Link>
        </h2>
        <time>{moment(props.created_at).format("MMMM Do YYYY")}</time>
      </div>
      <figure>
        <img
          className="post-img"
          src={props.image}
          alt={props.user_name + "'s post"}
        />
      </figure>
    </div>
  );
};

export default Post;
