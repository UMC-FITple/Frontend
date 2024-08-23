import React from "react";
import {
  Container,
  LogoImg,
  TitleBox,
  TitleEng,
  TitleKor,
} from "./BrandBox.style";
import Logo from "../../../assets/Converse.svg";
const BrandBox = ({ data }) => {
  return (
    <Container>
      <LogoImg src={Logo} />
      <TitleBox>
        <TitleEng>{data.eng_name}</TitleEng>
        <TitleKor>{data.brand_name}</TitleKor>
      </TitleBox>
    </Container>
  );
};

export default BrandBox;
