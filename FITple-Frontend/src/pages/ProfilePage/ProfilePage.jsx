import OptionIcon from "../../../assets/Option.svg";
import {
  ProfileContainer,
  ClothContainer,
  OptionBtn,
  ProfileBox,
  OptionBox,
  OptionItem,
} from "./ProfilePage.style";
import TabBox from "../../components/TabBox/TabBox";
import { useState, useEffect } from "react";
import ProfileLove from "../../components/ProfileLove/ProfileLove";
import ProfileFavor from "../../components/ProfileFavor/ProfileFavor";
import ProfileMyBody from "../../components/ProfileMyBody/ProfileMyBody";
import Infom from "../../components/Infom/Infom";
import { useNavigate } from "react-router-dom";
import { getInform } from "../../../data/ProfileApi";
import { logout } from "../../../data/LoginApi";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({});

  // render
  const renderContent = () => {
    switch (selectItem) {
      case 0:
        return <ProfileLove />;
      case 1:
        return <ProfileFavor />;
      case 2:
        return <ProfileMyBody />;
    }
  };

  const showOptionBox = () => {
    setIsOpen(!isOpen);
  };

  const goToEdit = () => {
    navigate("/profile/edit");
  };

  const getProfileData = async () => {
    const response = await getInform();
    setProfileData(response.result);
  };

  // 로그아웃 함수
  const handleLogout = async () => {
    const response = await logout();
    navigate("/");
    console.log("response");
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      {/* 위에 box */}
      <ProfileContainer>
        <ProfileBox>
          {/* 컴포넌트 사용 */}
          <Infom showFollowButton={false} data={profileData} />
          {/* 옵션 버튼 */}
          <OptionBtn onClick={() => showOptionBox()}>
            <img src={OptionIcon} />
          </OptionBtn>
          {/* 옵션 내용 띄워줄 div */}
          <OptionBox $active={isOpen}>
            <OptionItem $first onClick={goToEdit}>
              설정
            </OptionItem>
            <OptionItem
              as="a"
              href="https://form.naver.com/response/ZqTvEg2PFSHkZ9AdbyTc8w"
              target="_blank"
              rel="noopener noreferrer"
            >
              문의하기
            </OptionItem>
            <OptionItem $last onClick={() => handleLogout()}>
              로그아웃
            </OptionItem>
          </OptionBox>
        </ProfileBox>
      </ProfileContainer>
      {/* 아래 box */}
      <ClothContainer>
        <TabBox selectItem={selectItem} setSelectItem={setSelectItem} />
        {renderContent()}
      </ClothContainer>
    </>
  );
};

export default ProfilePage;
