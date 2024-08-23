import SearchBox from "../../components/SearchBox/SearchBox";
import SearchIconWhite from "../../../assets/searchIcon-white.svg";
import SunIcon from "../../../assets/Sun.svg";
import FireIcon from "../../../assets/Fire.svg";
import SpringIcon from "../../../assets/Spring.svg";
import ThumbIcon from "../../../assets/Thumb.svg";
import ThunderIcon from "../../../assets/Thunder.svg";
import HeartRedIcon from "../../../assets/Heart-red.svg";
import StarRedIcon from "../../../assets/Star-red.svg";
import {
  BlueText,
  Blur,
  BoldText,
  Box,
  BrandWrap,
  Container,
  FireIconImg,
  HeartIconImg,
  ImpactText,
  ItemContainer,
  ItemListWrap,
  ItemWrap,
  MainContainer,
  RegisterBTN,
  RegisterBox,
  RegisterText,
  ResultText,
  SearchContainer,
  SearchText,
  SideBarWrap,
  SpringIconImg,
  StartRedIconImg,
  SubTitle,
  SunIconImg,
  ThumbIconImg,
  ThunderIconImg,
  Title,
  TitleBackground,
  TitleBox,
  TitleContainer,
  UserWrap,
  Wrap,
} from "./SearchMainPage.style";

import SideBar from "../../components/SideBar/SideBar";
import ItemList from "../../components/ItemList/ItemList";
import { searchMain } from "../../../data/SearchMainApi";
import { searchTotal } from "../../../data/SearchTotalApi";
import { React, useState, useEffect } from "react";
import UserList from "../../components/UserList/UserList";
import BrandCard from "../../components/BrandCard/BrandCard";
import BrandList from "../../components/BrandList/BrandList";

// 1. 데이터 갯수 확인하기

const SearchMainPage = () => {
  const [itemData, setItemData] = useState([]);
  // totalData - 이름, 브랜드, 유저 객체형식으로 저장
  const [totalData, setTotalData] = useState({
    clothData: [],
    brandData: [],
    userData: [],
  });
  const [category, setCategory] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  // 데이터 메인 가져오기
  const getData = async () => {
    const response = await searchMain(category);
    console.log("확인용", response);
    setItemData(response.result.clothData);
  };

  //검색 데이터 가져오기
  const getSearchData = async () => {
    const response = await searchTotal(keyword);
    console.log(response);
    setTotalData(response.result);
  };

  // 젤처음 데이터 불러오기
  useEffect(() => {
    getData();
    console.log("category", category);
  }, [category]);

  // useEffect(() => {
  //   if (dataCount > 0) {
  //     getData();
  //   }
  // }, [dataCount, ]);

  // keyword가 ""일때만 API불러오기
  useEffect(() => {
    if (keyword !== "") getSearchData();
  }, [keyword]);

  return (
    <Container>
      <Blur />
      {/* 위에 파란색 영역 */}
      <MainContainer>
        {/* <SunIconImg src={SunIcon} />
        <FireIconImg src={FireIcon} />
        <SpringIconImg src={SpringIcon} />
        <HeartIconImg src={HeartRedIcon} />
        <ThumbIconImg src={ThumbIcon} />
        <ThunderIconImg src={ThunderIcon} />
        <StartRedIconImg src={StarRedIcon} /> */}
        {/* <TitleBox>
          <SubTitle>
            옷장에 <ImpactText>많이 담긴</ImpactText> 아이템이에요.
          </SubTitle>
          <Title>
            <Box>(</Box>
            <TitleBackground>
              1. <ImpactText>컨버스</ImpactText> 척테일러 올스타 클래식 하이
            </TitleBackground>
            <Box>)</Box>
          </Title>
        </TitleBox> */}

        <SearchContainer>
          <SearchText>내 아이템들을 검색해서 등록해보세요!</SearchText>
          <SearchBox
            keyword={keyword}
            setKeyword={setKeyword}
            src={SearchIconWhite}
            placeholder={"ex) 아디다스 에센셜 풀집 후디"}
            $white
          />
        </SearchContainer>
      </MainContainer>
      {/* 밑에 아이템 나오는 영역 */}
      <ItemContainer>
        <Wrap>
          <SideBarWrap>
            <SideBar setCategory={setCategory} />
          </SideBarWrap>
          <ItemListWrap>
            {keyword ? (
              <>
                {totalData?.clothData[0] ===
                "해당 제품은 등록되어 있지 않아요." ? (
                  <ItemWrap>
                    <ResultText>
                      <BoldText>제품이름</BoldText> 검색 결과
                      <BlueText> 0건</BlueText>
                    </ResultText>
                    <RegisterBox>
                      <RegisterText>
                        해당 제품은 등록되어 있지 않습니다.
                      </RegisterText>
                      <RegisterBTN>직접 등록하기</RegisterBTN>
                    </RegisterBox>
                  </ItemWrap>
                ) : (
                  <ItemWrap>
                    <ResultText>
                      <BoldText>제품이름</BoldText> 검색 결과
                      <BlueText> {totalData.clothData.length}건</BlueText>
                    </ResultText>
                    <ItemList $user data={totalData.clothData} />
                  </ItemWrap>
                )}

                {totalData?.brandData[0] ===
                "해당 브랜드는 등록되어 있지 않아요." ? (
                  <BrandWrap>
                    <ResultText>
                      <BoldText>브랜드</BoldText> 검색 결과
                      <BlueText> 0건</BlueText>
                    </ResultText>
                    <RegisterBox>
                      <RegisterText>
                        해당 브랜드는 등록되어 있지 않습니다.
                      </RegisterText>
                      {/* <RegisterBTN>직접 등록하기</RegisterBTN> */}
                    </RegisterBox>
                  </BrandWrap>
                ) : (
                  <BrandWrap>
                    <ResultText>
                      <BoldText>브랜드</BoldText> 검색 결과
                      <BlueText> {totalData.brandData.length}건</BlueText>
                    </ResultText>
                    <BrandList data={totalData.brandData} />
                  </BrandWrap>
                )}

                {totalData?.userData[0] ===
                "해당 유저는 등록되어 있지 않아요." ? (
                  <UserWrap>
                    <ResultText>
                      <BoldText>유저</BoldText> 검색 결과
                      <BlueText> 0건</BlueText>
                    </ResultText>
                    <RegisterBox>
                      <RegisterText>해당 유저를 찾을 수 없습니다.</RegisterText>
                      {/* <RegisterBTN>직접 등록하기</RegisterBTN> */}
                    </RegisterBox>
                  </UserWrap>
                ) : (
                  <UserWrap>
                    <ResultText>
                      <BoldText>유저</BoldText> 검색 결과
                      <BlueText> {totalData.userData.length}건</BlueText>
                    </ResultText>
                    <UserList data={totalData.userData} />
                  </UserWrap>
                )}
              </>
            ) : (
              <ItemList $user data={itemData} />
            )}
          </ItemListWrap>
        </Wrap>
      </ItemContainer>
    </Container>
  );
};

export default SearchMainPage;
