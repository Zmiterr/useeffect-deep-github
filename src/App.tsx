import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { SearchResult, SearchUser, UserDetails } from "./types/types";
import SearchPanel from "./components/search-panel/search-panel";
import UserList from "./components/user-list/user-list";

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
          <SearchPanel
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <UserList
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
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
