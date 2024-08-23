import React from "react";
import {
  BTNWrap,
  Container,
  EditBTN,
  InfoWrap,
  InputBox,
  InputBoxWrap,
  InputWrapper,
  MainText,
  PwdEditBox,
  PwdWrap,
  SaveBTN,
  SaveBTNWrap,
  SubText,
} from "./ProfileEditPage.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfoBasic from "../../components/UserInfoBasic/UserInfoBasic";

const ProfileEditPage = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedFits, setSelectedFits] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const navigate = useNavigate();

  const handleStyleClick = (style) => {
    setSelectedStyles((prevSelectedStyles) =>
      prevSelectedStyles.includes(style)
        ? prevSelectedStyles.filter((selectedStyle) => selectedStyle !== style)
        : [...prevSelectedStyles, style]
    );
  };

  const handleFitClick = (fit) => {
    setSelectedFits((prevSelectedFits) =>
      prevSelectedFits.includes(fit)
        ? prevSelectedFits.filter((selectedFit) => selectedFit !== fit)
        : [...prevSelectedFits, fit]
    );
  };
  return (
    <Container>
      <InfoWrap>
        <UserInfoBasic
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedFits={selectedFits}
          setSelectedFits={setSelectedFits}
          selectedStyles={selectedStyles}
          setSelectedStyles={setSelectedStyles}
          handleFitClick={handleFitClick}
          handleStyleClick={handleStyleClick}
        />
      </InfoWrap>
      <PwdWrap>
        <PwdEditBox>
          <MainText>계정정보 수정</MainText>
          <InputWrapper>
            <InputBoxWrap>
              <SubText>이메일</SubText>
              <InputBox type="text" id="userinfo-email" />
            </InputBoxWrap>
            <InputBoxWrap>
              <SubText>비밀번호 수정</SubText>
              <InputBox type="password" id="userinfo-email" />
            </InputBoxWrap>
            <BTNWrap>
              <EditBTN to="/profile/edit/repw">비밀번호 수정하기</EditBTN>
            </BTNWrap>
          </InputWrapper>
        </PwdEditBox>
      </PwdWrap>
      <SaveBTNWrap>
        <SaveBTN>변경사항 저장</SaveBTN>
      </SaveBTNWrap>
    </Container>
  );
};

export default ProfileEditPage;
