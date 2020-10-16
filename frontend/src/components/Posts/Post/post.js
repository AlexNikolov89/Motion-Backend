import React from "react";
import { HeaderPost } from "../../../style/FeedStyle";
import { PostWrapper } from "../../../style/FeedStyle";
import AvatarImg from "../../../assets/svgs/avatar.svg";
import { AvatarPost } from "../../../style/FeedStyle";
import { UserName } from "../../../style/FeedStyle";
import { NameDate } from "../../../style/FeedStyle";
import { Date } from "../../../style/FeedStyle";
import { PostContent } from "../../../style/FeedStyle";
import Share from "../../../assets/svgs/share.svg";
import Like from "../../../assets/svgs/heart.svg";
import { FooterIcon } from "../../../style/FeedStyle";
import { LikeIcon } from "../../../style/FeedStyle";
import { ShareIcon } from "../../../style/FeedStyle";
import { Likes } from "../../../style/FeedStyle";

export const Post = ({ post }) => {
  return (
    <PostWrapper>
      <HeaderPost>
        <AvatarPost>
          <img src={AvatarImg} alt="user avatar" height="46" />
        </AvatarPost>
        <NameDate>
          <UserName>
            {post.user.first_name} {post.user.last_name}
          </UserName>
          <Date>{post.created}</Date>
        </NameDate>
      </HeaderPost>
      <PostContent>{post.content}</PostContent>
      <FooterIcon>
        <LikeIcon>
          <img src={Like} height="18px" width="20px" opacity="0.5" />
          <p>Likes</p>
        </LikeIcon>
        <ShareIcon>
          <img src={Share} height="18px" width="20px" opacity="0.5" />
          <p>Share</p>
        </ShareIcon>
        <Likes>0 Likes</Likes>
      </FooterIcon>
    </PostWrapper>
  );
};
