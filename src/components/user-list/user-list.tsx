import React, { FC } from "react";
import { UserListProps } from "../../types/types";

const UserList: FC<UserListProps> = ({
  users,
  selectedUser,
  setSelectedUser,
  setIsShowDetails,
}) => {
  return (
    <ul className="user_list">
      {users.map((user) => (
        <li
          key={user.id}
          className={selectedUser === user.login ? "selected" : ""}
          onClick={() => {
            setSelectedUser(user.login);
            setIsShowDetails(true);
          }}
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
