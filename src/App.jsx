import Comments from "./Components/CustomHook/CommentsData/Comments/Comments";
import Posts from "./Components/CustomHook/PostData/Posts/Posts";
import User from "./Components/CustomHook/UserData/User/User";
import "./App.css"

export default function App() {
  return (
    <div className="container">
      <User/>
      <Comments/>
      <Posts/>
    </div>
  )
}
