import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PostContainer } from "../../style/FeedStyle";
import { Post } from "./Post/post";
import { postAction } from "../../store/actions/postAction";

const PostContent = () => {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(postAction());
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <PostContainer>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </PostContainer>
  );
};

export default PostContent;
