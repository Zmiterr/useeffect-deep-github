import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { SearchResult, SearchUser, UserDetails } from "./types/types";

function App() {
  const [selectedUserData, setSelectedUserData] = useState<UserDetails | null>(
    null
  );
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [users, setUsers] = useState<SearchUser[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState("zmiterr");

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser;
      (async function () {
        const response = await axios.get<UserDetails>(
          `https://api.github.com/users/${selectedUser}`
        );
        setSelectedUserData(response.data);
      })();
    }
  }, [selectedUser]);

  useEffect(() => {
    (async function () {
      const response = await axios.get<SearchResult>(
        `https://api.github.com/search/users?q=${searchInput}`
      );
      setUsers(response.data.items);
    })();
    // axios
    //   .get<SearchResult>(`https://api.github.com/search/users?q=${searchInput}`)
    //   .then((res) => setUsers(res.data.items));
  }, [searchInput]);

  return (
    <div className="App">
      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button>Find</button>
        </div>

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
      </div>
      <div>
        <h2>{selectedUserData?.login}</h2>
        {selectedUserData && (
          <div>
            <img src={selectedUserData.avatar_url} alt="" />
            <br />
            Followers: {selectedUserData.followers} From:{" "}
            {selectedUserData.location}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
