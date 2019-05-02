import React from "react";

const UserPost = props => {
  return (
    <section id={props.id}>
      <div>
        <img className="grid" src={props.image} alt={"Image " + props.id} />
      </div>
    </section>
  );
};

export default UserPost;
