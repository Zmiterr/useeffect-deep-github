import React from "react";

export interface SearchResult {
  items: SearchUser[];
}

export interface SearchUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers: number;
}

export interface UserDetails {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers: number;
  location: string;
}

export interface SearchPanelProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}
