import React from "react";
import { Container, ImageWrapper } from "./MainPage.style";
import mainPageImage from "../../../assets/mainpage.svg";

function MainPage() {
  return (
    <Container>
      <ImageWrapper>
        <img src={mainPageImage} alt="Main Page" />
      </ImageWrapper>
    </Container>
  );
}

export default MainPage;
