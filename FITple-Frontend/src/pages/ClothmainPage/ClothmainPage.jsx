import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import {
  PLUSbutton,
  SearchBar,
  Container,
  FirstContainer,
  SecondContainer,
  SearchContainer,
  SearchBarWrap,
  SearchImg,
  SideBarWrap,
  Wrap,
  ItemListWrap,
  SearchTitleContainer,
  SearchTitle,
  SearchTitle2,
} from "./ClothmainPage.style";
import { ClothApi } from "../../../data/ClothApi";
import SearchIcon from "../../../assets/search.svg";
import ItemList from "../../components/ItemList/ItemList";
import { useNavigate } from "react-router-dom";

const ClothmainPage = () => {
  const [category, setCategory] = useState(undefined);

  const [clothData, SetClothData] = useState([]);

  const navigate = useNavigate();

  const goToResister = () => {
    navigate("/clothregister");
  };

  // Api 데이터 가져오기
  const getClothData = async () => {
    const response = await ClothApi(category);
    SetClothData(response.result.clothData);
    console.log("옷장확인", response.result.clothData);
  };
  useEffect(() => {
    getClothData();
  }, [category]);

  return (
    <Container>
      {/* 위에 컨테이너 */}
      <FirstContainer>
        <SearchContainer>
          <SearchTitleContainer>
            <SearchTitle>내 옷</SearchTitle>
            <SearchTitle2>을 검색해보세요.</SearchTitle2>
          </SearchTitleContainer>
          <SearchBarWrap>
            <SearchImg src={SearchIcon} />
            <SearchBar placeholder="" />
          </SearchBarWrap>
        </SearchContainer>
      </FirstContainer>
      <SecondContainer>
        <Wrap>
          <SideBarWrap>
            <SideBar setCategory={setCategory} />
          </SideBarWrap>
          <ItemListWrap>
            <ItemList $main data={clothData} />
            <PLUSbutton onClick={() => goToResister()} />
          </ItemListWrap>
        </Wrap>
      </SecondContainer>
    </Container>
  );
};

export default ClothmainPage;
