import React from "react";
import { SearchBox } from "../../style/FeedStyle";
import { SearchBar } from "../../style/FeedStyle";
import { SocialButtons } from "../../style/FeedStyle";
import SearchIcon from "../../assets/svgs/search_icon.svg";

const SearchContent = () => {
  return (
    <SearchBox>
      <SearchBar>
        <img src={SearchIcon} />
        <input type="text" placeholder="Search posts..." />
      </SearchBar>
      <SocialButtons>
        <a href="#">Liked</a>
        <a href="#">Friends</a>
        <a href="#">Follow</a>
      </SocialButtons>
    </SearchBox>
  );
};

export default SearchContent;
