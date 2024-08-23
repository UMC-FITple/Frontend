import {
  Container,
  UserName,
  UserProfile,
  UserFit,
  UserStyle,
  Follow,
  UserImg,
} from "./RecomUserCard.style";
import SetUserImg from "/assets/UserImg.svg";

import { useEffect } from "react";

function RecomUser({ ...props }) {
  // const { fetchUsers } = RecomStore();

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  // const updateFollowStatus = useStore((state) => state.updateFollowStatus);

  // const handleFollowClick = () => {
  //   updateFollowStatus(userId, !isFollowed); // 팔로우 상태 업데이트
  // };

  return (
    <Container onClick={props.onClick}>
      <UserImg src={props.img} alt="User Image" />
      <UserName>{props.userName}</UserName>
      <UserProfile>{props.userProfile}</UserProfile>
      <UserFit>
        <img src="/assets/Heart.svg" width={16} height={16} alt="Fit" />
        {props.userFit}
      </UserFit>
      <UserStyle>
        <img src="/assets/Hanger.svg" width={16} height={16} alt="Style" />
        {props.userStyle}
      </UserStyle>
      <Follow
      // isFollowed={isFollowed}
      // onClick={handleFollowClick}
      // disabled={isFollowed} // isFollowed에 따라 비활성화
      >
        팔로잉{/* {isFollowed ? "팔로잉" : "팔로우"} */}
      </Follow>
    </Container>
  );
}

export default RecomUser;
