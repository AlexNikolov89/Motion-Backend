import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import userInfoAction from "../store/Actions/userInfoAction";
import Header from "../components/Header/header";
import UserProfile from "../components/UserProfile/userProfile";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(userInfoAction());
      setUserInfo(data);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Header />
      <UserProfile userInfo={userInfo} />
    </Fragment>
  );
};

export default UserProfPage;
