import React from "react";
import { SearchBox } from "../../style/FeedStyle";
import { SearchBar } from "../../style/FeedStyle";
import { SocialButtons } from "../../style/FeedStyle";
import SearchIcon from "../../assets/svgs/search_icon.svg";
import {Link} from 'react-router-dom'

const SearchContent = () => {
  return (
    <SearchBox>
      <SearchBar>
        <img src={SearchIcon} />
        <input type="text" placeholder="Search posts..." />
      </SearchBar>
      <SocialButtons>
        <Link to='/liked'>Liked</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/followers'>Follow</Link>
      </SocialButtons>
    </SearchBox>
  );
};

export default SearchContent;
