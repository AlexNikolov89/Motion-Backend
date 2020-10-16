import React, { useState } from "react";
import Favicon from "../../assets/favicon.png";
import PostsImg from "../../assets/posts_logo.png";
import { Header } from "../../style/FeedStyle";
import { Logowrap } from "../../style/FeedStyle";
import { PostLink } from "../../style/FeedStyle";
import { FindFriends } from "../../style/FeedStyle";
import { HeaderLeft } from "../../style/FeedStyle";
import { HeaderRight } from "../../style/FeedStyle";
import NotificationBell from "../../assets/svgs/notification_bell.svg";
import FriendsIcon from "../../assets/svgs/icon-friends.svg";
import ProfileImg from "../../assets/users/jennifer.png";
import MenuImage from "../../assets/svgs/menu.svg";
import { Notification } from "../../style/FeedStyle";
import { Menu } from "../../style/FeedStyle";
import { Avatar } from "../../style/FeedStyle";
import { DropdownMenu } from "../../style/FeedStyle";
import { ProfileWrapper } from "../../style/FeedStyle";
import { profileImg } from "../../assets/svgs/avatar.svg";
import { Link } from "react-router-dom";
import { LogoutWrapper } from "../../style/FeedStyle";

const MotionHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownHandler = () => {
    setShowDropdown((showDropdown) => !showDropdown);
  };

  return (
    <Header>
      <HeaderLeft>
        <Logowrap>
          <img src={Favicon} width="26px" height="26px" />
          <h2>Motion</h2>
        </Logowrap>
        <PostLink>
          <img src={PostsImg} alt="posts" />
          <span href="">Posts</span>
        </PostLink>
        <FindFriends>
          <img src={FriendsIcon} />
          <span href="">Find Friends</span>
        </FindFriends>
      </HeaderLeft>
      <HeaderRight>
        <Notification>
          <img src={NotificationBell} height="18px" width="18px" />
        </Notification>
        <Avatar>
          <img src={ProfileImg} />
        </Avatar>
        <Menu>
          <img src={MenuImage} onClick={dropdownHandler} />
          {showDropdown ? (
            <DropdownMenu>
              <ProfileWrapper>
                <Link to="/user-profile">
                  <img src={profileImg} width="23px" alt="" />
                  <p>Profile</p>
                </Link>
              </ProfileWrapper>
              <LogoutWrapper>
                <Link to="#">
                  <img src={profileImg} width="23px" alt="" />
                  <p>Logout</p>
                </Link>
              </LogoutWrapper>
            </DropdownMenu>
          ) : null}
        </Menu>
      </HeaderRight>
    </Header>
  );
};

export default MotionHeader;
