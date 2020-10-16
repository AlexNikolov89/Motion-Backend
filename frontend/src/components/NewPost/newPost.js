import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SendBtn from "../../assets/svgs/send_button.svg";
import { NewPostContainer } from "../../style/FeedStyle";
import AvatarImg from "../../assets/users/jennifer.png";
import { AvatarImage } from "../../style/FeedStyle";
import { Input } from "../../style/FeedStyle";
import { SendButton } from "../../style/FeedStyle";
import NewPostAction from "../../store/actions/NewPostAction";

const NewPost = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const submitPost = () => {
    const getData = async () => {
      const data = await dispatch(NewPostAction(content));
      console.log(data);
    };
    getData();
  };

  return (
    <NewPostContainer>
      <AvatarImage src={AvatarImg} height="71px" width="63px" />
      <Input>
        <input
          onChange={(e) => setContent(e.currentTarget.value)}
          type="text"
          placeholder="What's on your mind, Aleksandra?"
        />
      </Input>
      <SendButton onClick={submitPost}>
        <img src={SendBtn} />
      </SendButton>
    </NewPostContainer>
  );
};

export default NewPost;
