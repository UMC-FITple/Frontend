import React from "react";
import HeartIcon from "../../../assets/filledheart.svg";
import OptionIcon from "../../../assets/Option.svg";
import {
  Brand,
  BrandWrap,
  Container,
  DeleteModal,
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeletePopUp from "../DeletePopUp/DeletePopUp";

const UserItem = ({ ...props }) => {
  const navigate = useNavigate();
  const navgateToDetail = () => {
    navigate(`/clothes/${item.cloth_id}`);
  };
  const navgateToEdit = () => {
    navigate(`/clothupdate/${item.cloth_id}`);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
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

  const item = props.item || dummyItem; // props.item이 없을 경우 dummyItem 사용
  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      {props.data[0] !== "해당 제품은 등록되어 있지 않아요." ? (
        <Container>
          {/* 아이템 이미지 */}
          <ImgWrap onClick={navgateToDetail}>
            <ItemImg
              src={
                item.cloth_image ||
                "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8829244%2F88292446418.jpg&type=f372_372"
              }
            />
            {item.likes == 1 && <HeartImg src={HeartIcon} />}
          </ImgWrap>
          {/* 유저정보 */}
          <UserInfo {...props}>
            {/* 유저 프로필 */}
            <UserImg
              src={
                item.user_image ||
                "https://blog.kakaocdn.net/dn/mmiWC/btszy4hoVjM/JAHukeXLibgX76VaWsAqp1/img.jpg"
              }
            />
            <p>{item.nickname}</p>
          </UserInfo>
          <ItemWrap>
            <BrandWrap>
              <Brand>{item.brand}</Brand>
              <OptionBTN {...props} onClick={() => setIsOpen(!isOpen)}>
                <OptionImg src={OptionIcon} />
              </OptionBTN>
              <OptionBox $active={isOpen}>
                <OptionItem $first onClick={navgateToEdit}>
                  옷 정보 수정하기
                </OptionItem>
                <OptionItem $last onClick={handleDeleteCloth}>
                  옷 정보 삭제하기
                </OptionItem>
              </OptionBox>
            </BrandWrap>
            <ItemName>{item.cloth_name}</ItemName>
            <SizeWrap>
              <Size>{item.size} ㆍ</Size>
              <Size> {item.fit}</Size>
            </SizeWrap>
          </ItemWrap>
        </Container>
      ) : (
        <div>데이터가없습니다.</div>
      )}
      {isDeletePopupOpen && (
        <DeleteModal
          isOpen={isDeletePopupOpen}
          onRequestClose={() => setisDeletePopupOpen(false)}
          style={{
            overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
          }}
        >
          <DeletePopUp
            clothId={item.cloth_id}
            isOpen={isDeletePopupOpen}
            onClose={() => setisDeletePopupOpen(false)}
          />
        </DeleteModal>
      )}
    </>
  );
};

export default UserItem;
