/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import useFetch from "../../../../Utilities/useFetch";
import Post from "../Post/Post";
import "./Posts.css"

const Posts = () => {
  const { fetchData: postsData, error: postsError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(postsError);
  return (
    <section>
    <h1>Posts</h1>
    <div className="posts">
      {postsError ? (
        <h1>{postsError}</h1>
      ) : (
        postsData.slice(0, 8).map((post) => <Post post={post} />)
      )}
    </div>
    </section>
  );
};

export default Posts;
