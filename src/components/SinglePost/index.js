import React from "react";

const SinglePost = ({ postData, key }) => {
  return (
    <div key={key} className="postWrapper">
      <h3>{postData.title}</h3>
      <p>{postData.body}</p>
    </div>
  );
};

export default SinglePost;
