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
        <UserImg src={item.brand_image} />
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
