import styled from "styled-components";
import Background from "../assets/background_image.png";

export const BodyContent = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContentLeft = styled.div`
  height: 100vh;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Background}),
    linear-gradient(102deg, #c568ff 0%, #6e91f6);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoImage = styled.img`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const TitleLogo = styled.h1`
  font-size: 30px;
  color: #ffff;
  margin-bottom: 25px;
`;

export const TitleContent = styled.p`
  color: white;
  font-size: 16px;
  width: 274px;
  height: 48px
  padding-bottom: 25px;
  text-align: center;
  line-height: 24px
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AppleStore = styled.div`
  width: 126px;
  height: 40px;
  background: transparent;
  padding-top: 2px;
  margin-right: 8px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const GoogleStore = styled.div`
  width: 126px;
  height: 40px;
  background: transparent;
  padding-top: 7px;
  margin-right: 8px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const StoreButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 268px;
  margin: 10px;
`;

export const ContentRight = styled.div`
  flex: 60%;
  background-color: white;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  p {
    margin-top: 51px;
    marging-right: 0;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  height: 40px;
  width: 120px
  outline: none;
  font-size: 10px;
  margin-right: 30px;
  padding: 12px 30px;
  border-radius: 30px;
  text-align: center;
  line-height: 11px;
  margin: 40px 
`;

export const Form = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const SignIn = styled.h1`
  font-size: 38px;
  font-weight: normal;
  padding-right: 358px;
  padding-left: 359px;
`;

export const LoginInput = styled.input`
  border: none;
  padding: 0 0 0 15px;
  margin: 10px 0;
  opacity: 100%;
  line-height: 26px;
  font-size: 16px;
`;

export const ButtonSignIn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 167px;
  justify-items: center;
  align-content: center;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  color: #ffff;
  border-radius: 30px;
  width: 280px;
  height: 60px;
  border: 2px solid rgba(200, 200, 200, 0.45);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  margin-top: 20%;
`;
