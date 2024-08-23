import React from "react";
import {} from "./SearchTotalPage.style";
import SearchIconWhite from "../../../assets/searchIcon-white.svg";
import {
  Blur,
  Container,
  ItemContainer,
  ItemListWrap,
  MainContainer,
  SearchContainer,
  SearchText,
  SideBarWrap,
  Wrap,
} from "../SearchMainPage/SearchMainPage.style";
import SearchBox from "../../components/SearchBox/SearchBox";
import SideBar from "../../components/SideBar/SideBar";
import ItemList from "../../components/ItemList/ItemList";
import { useState } from "react";
const SearchTotalPage = () => {
  const [dataCount, setDataCount] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [category, setCategory] = useState(undefined);
  const [keyword, setKeyword] = useState("");
  return (
    <Container>
      <Blur />
      <MainContainer>
        <SearchContainer>
          <SearchText>내 아이템들을 검색해서 등록해보세요!</SearchText>
          <SearchBox
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
            <ItemList $user data={itemData} />
          </ItemListWrap>
        </Wrap>
      </ItemContainer>
    </Container>
  );
};

export default SearchTotalPage;
