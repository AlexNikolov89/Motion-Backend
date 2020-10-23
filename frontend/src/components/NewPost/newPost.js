import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SendBtn from "../../assets/svgs/send_button.svg";
import { NewPostContainer } from "../../style/FeedStyle";
import AvatarImg from "../../assets/users/jennifer.png";
import { AvatarImage } from "../../style/FeedStyle";
import { Input } from "../../style/FeedStyle";
import { SendButton } from "../../style/FeedStyle";
import {newPostAction} from "../../store/actions/newPostAction";
import {NEW_POST} from '../../store/actions/actionTypes'

const NewPost = () => {
  //const [content, setContent] = useState("");
  const [newPost, setNewPost] = useState('')
  const dispatch = useDispatch();

  const onSubmitHandler = async e => {
      e.preventDefault();
      const data = `{"content": "${newPost}"}`;
      dispatch(newPostAction('social/posts/', NEW_POST, data))
      // const data = await dispatch(NewPostAction(content));
      // console.log(data)
      // if (data) {
      //   setContent('')
    };
   

  return (
    <NewPostContainer>
      <AvatarImage src={AvatarImg} height="71px" width="63px" />
      <Input>
        <input
          onChange={onSubmitHandler}
          type="text"
          placeholder="What's on your mind, Aleksandra?"
        />
      </Input>
      <SendButton>
        <img src={SendBtn} />
      </SendButton>
    </NewPostContainer>
  );
};

export default NewPost;
