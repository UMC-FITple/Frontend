import { Container, Wrap, SubWrap, UserImg, UserName } from "./RecomInfom.style";
import SetUserImg from "/assets/UserImg.svg";

import Profile from "../../components/Profile/Profile";
import Follow from "../../components/Follow/Follow";
import Follower from "../../components/Follower/Follower";
import OneLine from "../../components/OneLine/OneLine";
import FollowButton from "../../components/FollowButton/FollowButton";

function RecomInfom({ data }) {
  console.log(data);

  return (
    <Container>
      <Wrap>
        <SubWrap>
          <UserImg src={data.userImg}></UserImg>
        </SubWrap>
        <UserName>{data.userName}</UserName>
        <SubWrap>
          <Profile
            userProfile={`${data.userHeight}cm ${data.userWeight}kg`}
            userFit={data.userFit}
            userStyle={data.userStyle}
          />
        </SubWrap>
        <SubWrap>
          <Follower follower={data.follower} />
          <Follow follow={data.following} />
        </SubWrap>
      </Wrap>
      <Wrap>
        {/* showFollowButton이 True면 기본 값유지 False면 FollowButton제거하고  OneLine 크기증가*/}
        {!data.isFollowed ? (
          <>
            <OneLine />
            <FollowButton />
          </>
        ) : (
          <>
            <OneLine width={"100%"} />
          </>
        )}
      </Wrap>
    </Container>
  );
}

export default RecomInfom;
