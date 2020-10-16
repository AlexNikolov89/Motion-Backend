import React, { useState } from "react";
import { BodyContent, Button } from "../style/Content";
import { ContentLeft } from "../style/Content";
import LogoImg from "../assets/logo_white.png";
import { LogoImage } from "../style/Content";
import { TitleLogo } from "../style/Content";
import { TitleContent } from "../style/Content";
import { ContentRight } from "../style/Content";
import { LoginContainer } from "../style/Content";
import { Form } from "../style/Content";
import { SignIn } from "../style/Content";
import { LoginInput } from "../style/Content";
import { ButtonSignIn } from "../style/Content";
import { useDispatch } from "react-redux";
import { authAction } from "../store/actions/authAction";
import { useHistory } from "react-router-dom";
import { Wrapper } from "../style/Content";
import Google from "../assets/svgs/google.svg";
import Apple from "../assets/svgs/apple.svg";
import { StoreButton } from "../style/Content";
import { AppleStore } from "../style/Content";
import { GoogleStore } from "../style/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    // console.log("test");
    e.preventDefault();
    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ email, password }),
    };
    fetch("https://motion.propulsion-home.ch/backend/api/auth/token/", config)
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          dispatch(authAction(data.access));
          localStorage.setItem("token", data.access);
          // console.log(localStorage);
          setEmail("");
          setPassword("");
          history.push("/Home");
        }
      });
  };

  return (
    <BodyContent>
      <ContentLeft>
        <Wrapper>
          <LogoImage src={LogoImg} />
          <TitleLogo>Motion</TitleLogo>
          <TitleContent>
            Connect with friends and the world <br />
            around you with Motion.
          </TitleContent>
          <StoreButton>
            <AppleStore>
              <img src={Apple} height="17px" width="78px" />
            </AppleStore>
            <GoogleStore>
              <img src={Google} width="85px" height="15px" />
            </GoogleStore>
          </StoreButton>
          <footer></footer>
        </Wrapper>
      </ContentLeft>
      <ContentRight>
        <LoginContainer>
          <p>Don't have an account?</p>
          <Button>SIGN UP</Button>
        </LoginContainer>
        <Form>
          <SignIn>Sign In</SignIn>
          <LoginInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            id="user"
            placeholder="Username"
            value={email}
            required
          />
          <LoginInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            required
          />
          <ButtonSignIn onClick={handleSubmit}>Sign In</ButtonSignIn>
        </Form>
      </ContentRight>
    </BodyContent>
  );
};

export default LandingPage;
