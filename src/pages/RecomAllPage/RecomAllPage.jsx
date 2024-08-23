import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecomUser from "../../components/RecomUserCard/RecomUserCard";
import {
  Container,
  Highlight,
  SubTitle,
  RecomUserWrap,
} from "./RecomAllPage.style";

function RecomAllPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { users, title } = location.state || { users: [], title: "" }; // title을 포함하도록 수정

  console.log(users);

  const handleUserClick = (user) => {
    console.log(user);
    navigate("/recommendFeed", { state: user });
  };

  return (
    <Container>
      <SubTitle>
        <Highlight>핏플1004</Highlight>님과 비슷한 {title}의 유저들이에요.
      </SubTitle>
      {users.length === 0 ? (
        <p>유저 데이터가 없습니다.</p>
      ) : (
        <RecomUserWrap>
          {users.map((user) => (
            <RecomUser
              userName={user.userName}
              userProfile={`${user.userHeight}cm ${user.userWeight}kg`}
              userFit={user.userFit}
              userStyle={user.userStyle}
              isFollowed={user.isFollowed}
              img={user.userImg}
              key={user.userId}
              onClick={() => handleUserClick(user)} // 클릭 핸들러
            />
          ))}
        </RecomUserWrap>
      )}
    </Container>
  );
}

export default RecomAllPage;
