import { useEffect, useState } from "react";
import RecomUser from "../../components/RecomUserCard/RecomUserCard";
import {
  Container,
  Highlight,
  SubTitleWrap,
  SubTitle,
  ShowAll,
  RecomUserWrap,
} from "./RecomMainPage.style";
import { useNavigate } from "react-router-dom";
import { RecomMainApi } from "../../../data/RecomMainApi";

function RecomMainPage() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const DummyFetchUsers = async () => {
    try {
      const response = await RecomMainApi();
      const data = await response;
      setUserData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    DummyFetchUsers();
  }, []);


  
  const bodyTypeUsers = userData.filter((user) => !user.isFollowed);

  const handleUserClick = (user) => {
    console.log(user);
    navigate("/recommendFeed", { state: user });
  };

  return (
    <Container>
      <SubTitleWrap>
        <SubTitle>
          <Highlight>핏플1004</Highlight>님과 비슷한 체형의 유저들이에요.
        </SubTitle>
        <ShowAll
          to={`/recommendall`}
          state={{ users: bodyTypeUsers, title: "체형" }}
        >
          모두 보기
        </ShowAll>
      </SubTitleWrap>

      <RecomUserWrap>
        {bodyTypeUsers.slice(0, 8).map((user) => (
          <RecomUser
            userName={user.userName}
            userProfile={`${user.userHeight}cm ${user.userWeight}kg`}
            userFit={user.userFit}
            userStyle={user.userStyle}
            isFollowed={user.isFollowed}
            follower={user.follower}
            follow={user.following}
            img={user.userImg}
            key={user.userId}
            onClick={() => handleUserClick(user)} // 클릭 핸들러
          />
        ))}
      </RecomUserWrap>

      <SubTitleWrap>
        <SubTitle>
          <Highlight>핏플1004</Highlight>님과 비슷한 스타일의 유저들이에요.
        </SubTitle>
        <ShowAll
          to={`/recommendall`}
          state={{ users: bodyTypeUsers, title: "스타일" }}
        >
          모두 보기
        </ShowAll>
      </SubTitleWrap>

      <RecomUserWrap>
        {bodyTypeUsers.slice(0, 8).map((user) => (
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
    </Container>
  );
}

export default RecomMainPage;
