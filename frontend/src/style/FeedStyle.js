import styled from "styled-components";

export const BodyContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const Header = styled.div`
  height: 80px;
  background-color: white;
  display: flex;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const Logowrap = styled.div`
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-around;
  font-size: 22px;
  h2 {
    padding-left: 12px;
  }
`;
export const PostLink = styled.div`
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  border-bottom: 2px solid #ad73fd;
  cursor: pointer;
  span {
    padding-left: 12px;
  }
`;

export const FindFriends = styled.div`
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  cursor: pointer;
  span {
    padding-left: 12px;
    padding-right: 703px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Notification = styled.div`
  height: 18px;
  width: 18px;
  padding-right: 57px;
`;
export const Avatar = styled.div`
  height: 47px;
  width: 42px;
`;
export const Menu = styled.div`
  width: 4px;
  height: 16px;
  padding-left: 50px;
`;

export const SearchBox = styled.div`
  height: 80.5px;
  background: #f2f2f2;
  border-bottom: 2px solid #dddddd;
  border-opacity: 0.05;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  color: #000000;
  opacity: 0.5;
  padding-left: 148px;
  padding-right: 771px;

  input[type="text"] {
    border: none;
    background: #f2f2f2;
    margin-left: 28px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  float: right;
  padding-right: 115px;
  a {
    text-decoration: none;
    margin-right: 43px;
    color: #000000;
    font-size: 16px;
    opacity: 0.5;
  }

  a:nth-child(1) {
    color: #000000;
  }
`;

export const NewPostContainer = styled.div`
display: flex
  height: 120px;
  width: 560px;
  margin-left: 175px;
  margin-top: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const AvatarImage = styled.img`
  margin-left: 24px;
  margin-top: 30px;
  margin-bottom: 26px;
`;

export const Input = styled.div`
  width: 220px;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  opacity: 0.5;
  border: none;
  margin-top: 45px;
  margin-bottom: 45px;
  margin-left: 23px;
  display: grid;
`;

export const SendButton = styled.button`
  margin-left: 132px;
  width: 60px;
  height: 60px;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  border: none;
  margin-top: 30px;
`;

export const PostContainer = styled.div`
  background: #f2f2f2;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 144px;
  border-radius: 4px;
`;
export const PostWrapper = styled.div`
  heigh: 230px;
  width: 560px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  margin: 32px;
  border-radius: 4px;
`;

export const HeaderPost = styled.div`
  height: 94px;
  background: #ffffff;
  display: flex;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const AvatarPost = styled.div`
  margin-left: 26px;
  margin-top: 30px;
  cursor: pointer;
`;

export const UserName = styled.div`
  marging-top: 31;
  marging-left: 14px;
  cursor: pointer;
  font-weight: 400;
`;

export const NameDate = styled.div`
  margin-left: 14px;
  margin-top: 30px;
  cursor: pointer;
`;

export const Date = styled.div`
  padding-top: 7px;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  opacity: 0.5;
`;

export const PostContent = styled.div`
  marging-top: 24px;
  background-color: white;
  padding-left: 30px;
  font-size: 16px;
  line-height: 26px;
`;

export const FooterIcon = styled.div`
  display: flex;
  background-color: white;
  padding-top: 34px;
  padding-bottom: 34px;
  border-bottom-left-radius: 4px;
  border-botto-right-radius: 4px;
`;

export const LikeIcon = styled.div`
  display: inline-flex;
  margin-left: 32px;
  cursor: pointer;
  p {
    font-size: 14px;
    line-height: 16px;
    padding-left: 14px;
  }
`;

export const ShareIcon = styled.div`
  display: inline-flex;
  margin-left: 41px;
  cursor: pointer;
  p {
    font-size: 14px;
    line-height: 16px;
    padding-left: 14px;
  }
`;

export const Likes = styled.p`
  margin-left: 278px;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  opacity: 0.5;
`;

export const ModalBoxContainer = styled.div`
  height: 100vh;
  width: 100wh;
  bcakground-color: #000000;
  opacity: 0.8;
`;

export const DropdownMenu = styled.div`
  width: 180px;
  height: 96px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  height: 40px;
  background: #ffffff;
  a {
    display: flex;
    text-decoration: none;
    text-align: center;
    height: 40px;
    width: 180px;
    padding-top: 12px;
    &:hover {
      background: #f2f2f2;
    }
  }

  img {
    background-color: #000000;
    width: 23px;
    height: 23px;
    display: flex;
    margin-left: 16px;

    p {
      padding-left: 25px;
    }
  }
`;

export const LogoutWrapper = styled.div`
display: flex;
flex-direction: row;
width: 180px;
height: 40px;

a {
  display: flex;
  text-decoration: none;
  text-align: center;
  height: 48px;
  width: 180px;
  padding-top: 12px;
  &:hover {
    background: #f2f2f2;
  }
}

img {
  background-color: #000000;
  width: 23px;
  height: 23px;
  display: flex;
  margin-left: 16px;

`;

export const UserProfileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.section`
  width: 100vw;
  height: 45vh;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const UserInfoContainer = styled.div`
  background: #fff;
  width: 1152px;
  height: 400px;
  display: flex;
  margin-top: -12rem;
  border-radius: 4px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.15);
`;

export const AvatarContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid rgba(0, 0, 0, 0.1);

  img {
    border-radius: 50%;
  }

  h3 {
    margin-top: 12px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  p {
    padding-top: 8px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
`;

export const Button = styled.button`
  width: 158px;
  height: 40px;
  border: 1px solid #000000;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
  margin-top: 39px;
`;

export const UserDetailContainer = styled.div`
  width: 833px;
  height: 400px;
`;

export const Top = styled.div`
  height: 262px;
  width: 400px;
  display: flex;
  flex-direction: row;
`;

export const UserDetails = styled.div`
  height: 135px;
  width: 833px;
  line-height: 20px;
  margin-top: 40px;

  span {
    margin-left: 60px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }

  p {
    margin-left: 60px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin-top: 11px;
    height: 104px;
    width: 320px;
  }
`;

export const UserPostsWrapper = styled.section`
  padding: 0 12rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2.5rem;
  grid-column-gap: 5rem;
`;

export const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const HobbyContainer = styled(UserDetails)``;

export const Bottom = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const Post = styled.div`
  background: #f2f2f2;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 144px;
  border-radius: 4px;
`;
