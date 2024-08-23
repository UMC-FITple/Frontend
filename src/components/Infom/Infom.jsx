import {
  Container,
  Wrap,
  SubWrap,
  UserImg,
  UserName,
  InformContainer,
  Items,
  SubItems,
  FollowContainer,
  FollowerNum,
  Text,
} from "./Infom.style";
import SetUserImg from "/assets/UserImg.svg";

import Profile from "../../components/Profile/Profile";
import Followcom from "../../components/Follow/Follow";
import Follower from "../../components/Follower/Follower";
import OneLine from "../../components/OneLine/OneLine";
import FollowButton from "../../components/FollowButton/FollowButton";

function Infom({ showFollowButton = true, data }) {
  return (
    <Container>
      <Wrap>
        <SubWrap>
          <UserImg
            src={data?.userData?.length > 0 && data.userData[0].user_image}
          ></UserImg>
        </SubWrap>
        <UserName>
          {data?.userData?.length > 0 && data.userData[0].nickname}
        </UserName>
        <SubWrap>
          <InformContainer>
            <Items>
              {data?.userData?.length > 0 && data.userData[0].height}cm{" "}
              {data?.userData?.length > 0 && data.userData[0].weight}kg
            </Items>
            <SubItems>
              <img src="/assets/HeartGray.svg" height={16} />
              {data?.fit?.length > 0 && data.fit[0]},{" "}
              {data?.fit?.length > 0 && data.fit[1]}
            </SubItems>
            <SubItems>
              <img src="/assets/HangerGray.svg" height={16} />
              {data?.style?.length > 0 && data.style[0]},{" "}
              {data?.style?.length > 0 && data.style[1]}
            </SubItems>
          </InformContainer>
        </SubWrap>
        <SubWrap>
          <FollowContainer>
            <FollowerNum>{data?.follower}</FollowerNum>
            <Text>팔로워</Text>
          </FollowContainer>
          <FollowContainer>
            <FollowerNum>{data?.following}</FollowerNum>
            <Text>팔로잉</Text>
          </FollowContainer>
        </SubWrap>
      </Wrap>
      <Wrap>
        {/* showFollowButton이 True면 기본 값유지 False면 FollowButton제거하고  OneLine 크기증가*/}
        {showFollowButton ? (
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

export default Infom;