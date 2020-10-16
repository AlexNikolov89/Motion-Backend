import React from "react";
import MotionHeader from "../Header/header";
import { BodyContent } from "../../style/FeedStyle";
import SearchContent from "../SearchBox/search";
import PostContent from "../Posts/posts";
import NewPost from "../NewPost/newPost";

export const Home = () => {
  return (
    <BodyContent>
      <MotionHeader />
      <SearchContent />
      <NewPost />
      <PostContent />
    </BodyContent>
  );
};
