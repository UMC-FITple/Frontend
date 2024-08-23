import React from "react";
import {
  EditBox,
  PWDContainer,
  Container,
  SaveBTN,
  SubTitle,
  InputPWD,
  LogoImg,
} from "./ChangepwdPage.style";
import Logo from "../../../assets/Logo.svg";

const ChangepwdPage = () => {
  return (
    <Container>
      <LogoImg src={Logo} />
      <PWDContainer>
        <EditBox>
          <SubTitle>비밀번호 수정</SubTitle>
          <InputPWD placeholder="새 비밀번호를 입력해주세요." />
          <InputPWD placeholder="새 비밀번호를 한 번 더 입력해주세요." />
        </EditBox>
        <SaveBTN>저장하기</SaveBTN>
      </PWDContainer>
    </Container>
  );
};

export default ChangepwdPage;
