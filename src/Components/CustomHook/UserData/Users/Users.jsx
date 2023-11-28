/* eslint-disable react/prop-types */
import "./Users.css";

export default function Users({ userDetails }) {
  const {
    name,
    username,
    email,
    phone,
    address: { city },
  } = userDetails;
  return (
    <div className="userInformation">
      <img
        src="https://picsum.photos/200"
        alt=""
      />
      <div className="user__overlay">
        <div className="user__details">
          <h4 className="user__name"><b>Name:</b> {name}</h4>
          <p><b>UserName:</b> {username}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Phone:</b> {phone}</p>
          <p><b>Address:</b> {city}</p>
        </div>
      </div>
    </div>
  );
}
