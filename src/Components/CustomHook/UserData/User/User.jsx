/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import useFetch from "../../../../Utilities/useFetch";
import Users from "../Users/Users";
import "./User.css";

export default function User() {
  const { fetchData: userData, error: userError } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  //   console.log(userData);
  return (
    <section>
    <h1>Users</h1>
      <div className="userContainer">
        {
          userError ? <h1>{userError}</h1> : userData.map((user) => (
          <Users userDetails={user} />
        ))
        }
      </div>
    </section>
  );
}
