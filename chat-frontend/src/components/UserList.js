import React from "react";
import { useSelector } from "react-redux";
import { selectUserList } from "../app/slices/userSlice";
import User from "./User";

function UserList() {
  const users = useSelector(selectUserList);
  return (
    <div className="user-list">
      <h1>User List ({users.length})</h1>
      <div className="users">
        {users.map((user) => (
          <User key={user.userId} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
