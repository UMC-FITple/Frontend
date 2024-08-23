import React, { useState } from "react";
import HeartIcon from "../../../assets/filledheart.svg";
import OptionIcon from "../../../assets/Option.svg";
import {
  Brand,
  BrandWrap,
  Container,
  HeartImg,
  ImgWrap,
  ItemImg,
  ItemName,
  ItemWrap,
  OptionBTN,
  OptionBox,
  OptionImg,
  OptionItem,
  Size,
  SizeWrap,
  UserImg,
  UserInfo,
} from "./UserItem.style";
import { useNavigate } from "react-router-dom";

const UserItem = ({ item }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // 더미데이터
  const dummyItem = {
    nickname: "Anonymous",
    brand: "Generic Brand",
    cloth_name: "Unknown Cloth",
    size: "Unknown Size",
    fit: "Unknown Fit",
    cloth_image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8829244%2F88292446418.jpg&type=f372_372",
    user_image:
      "https://blog.kakaocdn.net/dn/mmiWC/btszy4hoVjM/JAHukeXLibgX76VaWsAqp1/img.jpg",
  };

  const currentItem = item || dummyItem; // props.item이 없을 경우 dummyItem 사용

  const navigateToDetail = () => {
    navigate(`/clothdetail/${currentItem.cloth_id}`);
  };

  const toggleOptionBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {/* 아이템 이미지 */}
      <ImgWrap onClick={navigateToDetail}>
        <ItemImg src={currentItem.cloth_image} alt={currentItem.cloth_name} />
        {currentItem.likes === 1 && <HeartImg src={HeartIcon} alt="Liked" />}
      </ImgWrap>

      {/* 유저정보 */}
      <UserInfo>
        <UserImg src={currentItem.user_image} alt={currentItem.nickname} />
        <p>{currentItem.nickname}</p>
      </UserInfo>

      <ItemWrap>
        <BrandWrap>
          <Brand>{currentItem.brand}</Brand>
          <OptionBTN onClick={toggleOptionBox}>
            <OptionImg src={OptionIcon} alt="Options" />
          </OptionBTN>
          {isOpen && (
            <OptionBox $active={isOpen}>
              <OptionItem $first>옷 정보 수정하기</OptionItem>
              <OptionItem $last>옷 정보 삭제하기</OptionItem>
            </OptionBox>
          )}
        </BrandWrap>
        <ItemName>{currentItem.cloth_name}</ItemName>
        <SizeWrap>
          <Size>{currentItem.size} ㆍ</Size>
          <Size>{currentItem.fit}</Size>
        </SizeWrap>
      </ItemWrap>
    </Container>
  );
};

export default UserItem;
