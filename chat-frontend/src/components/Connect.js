import { useState } from "react";
import { register } from "../app/stompClientOperations";
import { useDispatch } from "react-redux";
import { connect } from "../app/slices/sessionSlice";
import { v4 as uuidv4 } from "uuid";

function Connect({ client }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(
    window.localStorage.getItem("username") || ""
  );
  const login = () => {
    let userId = window.localStorage.getItem("userId");
    let name = window.localStorage.getItem("username");
    if (userId === null || name === null) {
      name = username;
      userId = uuidv4();
      window.localStorage.setItem("userId", userId);
      window.localStorage.setItem("username", name);
    }
    register(client.current);
    dispatch(connect());
  };
  return (
    <div className="connect">
      <input
        type="text"
        name="username"
        placeholder="Type a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={login}>Connect</button>
    </div>
  );
}

export default Connect;
