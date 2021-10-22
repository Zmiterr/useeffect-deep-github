import React, { FC } from "react";
import { UserDetails } from "../../types/types";

interface UserDetailsBoxProps {
  selectedUserData: UserDetails;
}

const UserDetailsBox: FC<UserDetailsBoxProps> = ({ selectedUserData }) => {
  console.log(selectedUserData);
  return (
    <div>
      <h2>{selectedUserData?.login}</h2>
      {selectedUserData && (
        <div>
          <img src={selectedUserData.avatar_url} alt="" />
          <br />
          Followers: {selectedUserData.followers}{" "}
          {selectedUserData.location && "From: "}
          {selectedUserData.location}
        </div>
      )}
    </div>
  );
};

export default UserDetailsBox;
