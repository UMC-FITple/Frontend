import React from "react";
import {
  Arrow,
  Container,
  SubTitle,
  Title,
  TitleWrap,
  UserImg,
  Wrap,
} from "./BrandCard.style";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ item }) => {
  const navigate = useNavigate();

  const goToBrand = () => {
    navigate(`/brand/${item.brand_id}`);
  };

  return (
    <Container onClick={() => goToBrand()}>
      <Wrap>
        <UserImg src="https://i.namu.wiki/i/eZiA7Yvh06E5jv5IsGTaiut615o4hpjALOlnqfIAvmHPnf3Je4JvglFmo635duNRly8aeOqMgS_oLWL8G_y1WQ.webp" />
        <TitleWrap>
          <Title>{item.brand_name}</Title>
          <SubTitle>{item.eng_name}</SubTitle>
        </TitleWrap>

        <Arrow>&gt;</Arrow>
      </Wrap>
    </Container>
  );
};

export default BrandCard;
