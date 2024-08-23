import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import {
  ProductDetail,
  ProductImage,
  ProductItem,
  ProductName,
  ProductBrand,
  ProductContainer,
  Parent,
  FilledHeart,
  Imgcontainer,
  PLUSbutton,
  EditButtons,
  EditButton,
  ClothdebarContainer,
  Clothdebar,
  SearchBar,
  SerchTitle,
  SerchTitle2,
  SerchTitleContainer,
  Container,
  FirstContainer,
  SecondContainer,
  SearchContainer,
  SearchBarWrap,
  SearchImg,
  SideBarWrap,
  Wrap,
  ItemListWrap,
} from "./ClothmainPage.style";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";
import { ClothApi } from "../../../data/ClothApi";
import SearchIcon from "../../../assets/search.svg";
import ItemList from "../../components/ItemList/ItemList";
import { useNavigate } from "react-router-dom";

const ClothmainPage = () => {
  const [category, setCategory] = useState(undefined);
  const [isEdit, setIsEdit] = useState({});
  const [clothData, SetClothData] = useState([]);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);

  const navigate = useNavigate();

  const toggleEdit = (clothId) => {
    setIsEdit((prev) => ({
      ...prev,
      [clothId]: !prev[clothId], // 현재 clothId의 값을 반전시킴
    }));
  };

  const goToResister = () => {
    navigate("/clothregister");
  };

  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
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
          <SerchTitleContainer>
            <SerchTitle>내 옷</SerchTitle>
            <SerchTitle2>을 검색해보세요.</SerchTitle2>
          </SerchTitleContainer>
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
