import OptionIcon from "../../../assets/Option.svg";
import {
  ProfileContainer,
  ClothContainer,
  OptionBtn,
  ProfileBox,
  OptionBox,
  OptionItem,
  OptionItemA,
} from "./ProfilePage.style";
import TabBox from "../../components/TabBox/TabBox";
import { useState } from "react";
import ProfileLove from "../../components/ProfileLove/ProfileLove";
import ProfileFavor from "../../components/ProfileFavor/ProfileFavor";
import ProfileMyBody from "../../components/ProfileMyBody/ProfileMyBody";
import Infom from "../../components/Infom/Infom";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../../data/GetProfileApi";
import useAuthStore from "../../../data/store/userAuthStore";
import { useEffect } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [profileLoveData, setProfileLoveData] = useState([]);

  const { token } = useAuthStore();

  // render
  const renderContent = () => {
    switch (selectItem) {
      case 0:
        return <ProfileLove />;
      case 1:
        return <ProfileFavor data={profileLoveData} />;
      case 2:
        return <ProfileMyBody />;
    }
  };

  const showOptionBox = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const goToEdit = () => {
    navigate("/profile/edit");
  };

  const getProfileData = async () => {
    const response = await getProfile();
    setProfileData(response.result);
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
            <OptionItem $last>로그아웃</OptionItem>
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
