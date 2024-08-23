import React from "react";
import {
  Container,
  Header,
  LogoContainer,
  Logo,
  MainText,
  Button,
  ImageWrapper,
} from "./MainPage.style";
import fitpleLogo from "../../../assets/Logo.svg";
import mainPageImage from "../../../assets/mainpage.svg";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      {/* Navbar추가하였습니다! */}
      {/* <Header>
            <LogoContainer>
                <Logo src={fitpleLogo} alt="Fitple Logo" />
                <MainText>FITple</MainText>
            </LogoContainer>
            <Button onClick={handleLoginClick}>로그인 / 회원가입</Button>
        </Header> */}
      <ImageWrapper>
        <img src={mainPageImage} alt="Main Page" />
      </ImageWrapper>
    </Container>
  );
}

export default MainPage;
