import React from "react";
import { UserListProps } from "../../types/types";

const UserList = ({ users, selectedUser, setSelectedUser }: UserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className={selectedUser === user.login ? "selected" : ""}
          onClick={() => {
            setSelectedUser(user.login);
          }}
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
