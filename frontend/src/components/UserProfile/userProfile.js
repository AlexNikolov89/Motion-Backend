import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BannerImg from "../../assets/banner.png";
import { UserProfileWrapper } from "../../style/FeedStyle";
import { Banner } from "../../style/FeedStyle";
import AvatarImg from "../../assets/users/jennifer.png";
import { UserInfoContainer } from "../../style/FeedStyle";
import { AvatarContainer } from "../../style/FeedStyle";
import { profilePostAction } from "../../store/actions/profilePostAction";
import { Button } from "../../style/FeedStyle";
import { UserDetailContainer } from "../../style/FeedStyle";
import { Top } from "../../style/FeedStyle";
import { UserDetails } from "../../style/FeedStyle";
import { ContactInfo } from "../../style/FeedStyle";
import { Bottom } from "../../style/FeedStyle";
import { UserPostsWrapper } from "../../style/FeedStyle";
import { Post } from "../Posts/Post/post";
import Header from "../Header/header";

const UserProfilePage = ({ userInfo }) => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(profilePostAction());
      setPosts(data);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Header />
      <UserProfileWrapper>
        <Banner>
          <img src={BannerImg} />
        </Banner>
        <UserInfoContainer>
          <AvatarContainer>
            <img src={AvatarImg} height="85px" width="95px" />
            <h3>Aleksandra Nikolov</h3>
            <p>Zurich, Switzerland</p>
            <Button editProfile>Edit profile</Button>
          </AvatarContainer>
          <UserDetailContainer>
            <Top>
              <UserDetails>
                <span>About</span>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
                <ContactInfo>
                  <div>
                    <span>Email</span>
                    <p>Email@gmail.com</p>
                  </div>
                  <div>
                    <span>Phone</span>
                    <p>+412842909</p>
                  </div>
                </ContactInfo>
              </UserDetails>
              {/*<HobbyContainer>
              <span>Things I like</span>
              <div className="things">
                <p>Workout</p>
                <p>Code</p>
                <p>Chill</p>
                <p>Game</p>
                <p>Travel</p>
              </div>
              </HobbyContainer>*/}
            </Top>
            <Bottom>
              <div className="numsWrapper">
                <p>0</p>
                <span>Posts</span>
              </div>
              <div className="numsWrapper">
                <p>0</p>
                <span>Likes</span>
              </div>
              <div className="numsWrapper">
                <p>0</p>
                <span>Friends</span>
              </div>
              <div className="numsWrapper">
                <p>0</p>
                <span>Followers</span>
              </div>
              <div className="numsWrapper">
                <p>0</p>
                <span>Following</span>
              </div>
            </Bottom>
          </UserDetailContainer>
        </UserInfoContainer>
        <UserPostsWrapper>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </UserPostsWrapper>
      </UserProfileWrapper>
    </Fragment>
  );
};

export default UserProfilePage;
