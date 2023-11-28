/* eslint-disable react/prop-types */
import "./Post.css"

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h3 className="post__heading" >Post No: {id}</h3>
      <h3 className="post__heading">Title: {title}</h3>
      <p><b>Content:</b> {body}</p>
    </div>
  );
};

export default Post;
