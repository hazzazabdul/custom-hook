/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Comment from "../Comment/Comment";
import useFetch from "../../../../Utilities/useFetch";
import "./Comments.css";

const Comments = () => {
  const { fetchData: commentsData, error: commentsError } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return (
    <section>
      <h1>Comments</h1>
      <div className="comments">
        {commentsError ? (
          <h1>{commentsError}</h1>
        ) : (
          commentsData
            .slice(0, 8)
            .map((comment) => <Comment comment={comment} />)
        )}
      </div>
    </section>
  );
};

export default Comments;
