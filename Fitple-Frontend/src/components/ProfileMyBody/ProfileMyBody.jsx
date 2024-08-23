import React from "react";
import UserBodyInfo from "../UserInfoBody/UserInfoBody";
import { Container } from "./ProfileMyBody.style";
import { ProfileBodyApi } from "../../../data/ProfileBodyApi";
import { useState } from "react";
import { useEffect } from "react";
import UserInfoBody2 from "../UserInfoBody2/UserInfoBody2";

const ProfileMyBody = () => {
  const [bodyData, setBodyData] = useState({});
  const getProfileBodyData = async () => {
    const response = await ProfileBodyApi();
    console.log("response", response.result);
    setBodyData(response.result);
  };
  useEffect(() => {
    getProfileBodyData();
  }, []);
  return (
    <Container>
      <UserInfoBody2 $profile data={bodyData} />
      {/* <UserBodyInfo $profile /> */}
    </Container>
  );
};

export default ProfileMyBody;
