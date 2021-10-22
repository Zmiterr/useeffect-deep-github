import React, { FC } from "react";
import { UserListProps } from "../../types/types";

const UserList: FC<UserListProps> = ({
  users,
  selectedUser,
  setSelectedUser,
}) => {
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
