import React, { Dispatch, FC, useEffect, useState } from "react";
import { UserDetails } from "../../types/types";
import Timer from "./timer/timer";

interface UserDetailsBoxProps {
  selectedUserData: UserDetails;
  setIsShowDetails: Dispatch<boolean>;
}

const initialTimerSeconds = 10;
const UserDetailsBox: FC<UserDetailsBoxProps> = ({
  selectedUserData,
  setIsShowDetails,
}) => {
  const [timer, setTimer] = useState(initialTimerSeconds);
  useEffect(() => {
    setTimer(initialTimerSeconds);
  }, [selectedUserData]);

  useEffect(() => {
    if (timer < 1) {
      setIsShowDetails(false);
    }
  }, [timer]);

  return (
    <main className="user_details">
      <h2>{selectedUserData?.login}</h2>
      <Timer
        timerOut={timer}
        setTimerOut={setTimer}
        selectedUserData={selectedUserData?.id}
      />
      {selectedUserData && (
        <div className="user_description">
          <img
            className="user_avatar"
            src={selectedUserData.avatar_url}
            alt=""
          />
          <div>
            <p>Followers: {selectedUserData.followers} </p>
            <p>
              {selectedUserData.location && "From: "}
              {selectedUserData.location}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserDetailsBox;
