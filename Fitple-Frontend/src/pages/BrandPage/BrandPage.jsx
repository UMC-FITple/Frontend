import React from "react";
import {
  BlueText,
  IconImg,
  InformContainer,
  InputBox,
  ItemContainer,
  ItemWrap,
  NonWrap,
  PlaceholderText,
  RegisterBTN,
  RegisterBox,
  RegisterText,
  SearchContainer,
  SubMenuItem,
  SubMenuWrap,
  Wrap,
} from "./BrandPage.style";
import BrandBox from "../../components/BrandBox/BrandBox";
import SearchIcon from "../../../assets/SearchIcon.svg";
import { useState } from "react";
import UserItem from "../../components/UserItem/UserItem";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BrandApi } from "../../../data/BrandApi";
import { useEffect } from "react";

const BrandPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [brandData, setBrandData] = useState({});
  const { id } = useParams();
  const subMenuItem = [
    "전체",
    "아우터",
    "상의",
    "바지",
    "스커트",
    "원피스",
    "신발",
  ];
  const getBrandData = async () => {
    const response = await BrandApi(id);
    setBrandData(response.result);
    console.log("브랜드 데이터확인", response);
  };
  useEffect(() => {
    getBrandData();
  }, []);
  return (
    <>
      {/* 위에 Container */}
      <InformContainer>
        {/* 브랜드정보 */}
        <BrandBox data={brandData} />
        {/* 검색 박스 */}
        <SearchContainer>
          <IconImg src={SearchIcon} />
          {/* inputBox에 포커스가 되어있고, 입력값이 없으면 placeholder띄우기 */}
          {!isFocused && inputValue == "" && (
            <PlaceholderText>
              <BlueText>{brandData.brand_name}</BlueText>의 제품을 검색해보세요.
            </PlaceholderText>
          )}

          <InputBox
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
            }}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </SearchContainer>
      </InformContainer>

      {/* 아래 container */}
      <ItemContainer>
        <Wrap>
          {/* 서브메뉴 */}
          <SubMenuWrap>
            {subMenuItem.map((item, index) => (
              <SubMenuItem key={index}>{item}</SubMenuItem>
            ))}
          </SubMenuWrap>
          {/* 아이템들 */}
          {/* <ItemWrap>
            <ItemList />
          </ItemWrap> */}

          {/* 아이템이 없을때 */}
          <NonWrap>
            <RegisterBox>
              <RegisterText>해당 제품은 등록되어 있지 않아요.</RegisterText>
              <RegisterBTN>직접 등록하기</RegisterBTN>
            </RegisterBox>
          </NonWrap>
        </Wrap>
      </ItemContainer>
    </>
  );
};

export default BrandPage;
