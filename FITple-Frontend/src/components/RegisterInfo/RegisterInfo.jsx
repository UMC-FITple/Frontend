import React from "react";
import Modal from "react-modal";
import {
  Container,
  CurvedRectangle,
  CurvedRectangle4,
  DetailItemWrap,
  DetailTitle,
  Detailbox,
  Dropdefault,
  DropdownItem,
  DropdownList,
  EmptyStar,
  FullStar,
  MemoTextArea,
  NoteArea,
  SS,
  SearchIconImg,
  SimpleWrap,
  SizeItem,
  SizeList,
  SizeText,
  SizeWrap,
  StyledButton,
  Toggledown,
  DropdownContainer,
} from "./RegisterInfo.style";
import { useState } from "react";
import BrandSearch from "../BrandSearch/BrandSearch";
import SearchIcon from "/assets/SearchIcon.svg";
import FullStarIcon from "../../../assets/Star8.svg";
import EmptyStarIcon from "../../../assets/Star5.svg";
// 카테고리 객체
const clothingCategories = [
  { value: 1, label: "아우터" },
  { value: 2, label: "상의" },
  { value: 3, label: "바지" },
  { value: 4, label: "스커트" },
  { value: 5, label: "원피스" },
  { value: 6, label: "신발" },
];
// 핏 나타내는 객체
const fitOptions = [
  { value: "레귤러", label: "레귤러" },
  { value: "오버", label: "오버" },
  { value: "세미오버", label: "세미오버" },
  { value: "슬림", label: "슬림" },
];
const RegisterInfo = ({ setRegisterpopup, value, setValue }) => {
  const [dropdown, setDropdown] = useState({
    category: { isOpen: false, label: null },
    fit: { isOpen: false, label: null },
  });
  const [brandSearchOpen, setBrandSearchOpen] = useState(false);

  const [requestBody, SetRequestBody] = useState({});

  console.log("value", value);
  const handleValueChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // 브랜드 검색 핸들러
  const handleBrandSearch = () => {
    setBrandSearchOpen(!brandSearchOpen);
  };
  // 브랜드 선택 시
  const handleBrandSelect = (selectedBrandName) => {
    setValue({
      ...value,
      brand: selectedBrandName,
    });
    setBrandSearchOpen(false);
  };
  const handleDropdown = (type) => {
    setDropdown((prevstate) => ({
      ...prevstate,
      [type]: {
        ...prevstate[type],
        isOpen: !prevstate[type].isOpen,
      },
    }));
  };

  const handelDropdownSelect = (type, label, index) => {
    setValue({
      ...value,
      [type]: index,
    });
    setDropdown((prevstate) => ({
      ...prevstate,
      [type]: {
        ...prevstate[type],
        isOpen: false,
        label,
      },
    }));
  };

  const handleStarClick = (newRating) => {
    setValue({
      ...value,
      rating: newRating,
    });
  };

  // 옷 정보 등록 함수
  const handleRegister = async () => {
    // 필수 값이 없는 경우 처리
    console.log(
      !value.name,
      !value.productCode,
      !value.category,
      !value.size,
      !value.fit
    );
    if (
      !value.name ||
      !value.product_code ||
      !value.category ||
      !value.size ||
      !value.fit
    ) {
      alert("필수 정보를 모두 입력해 주세요.");
      return;
    }
    setRegisterpopup(true);
  };
  // 별 그리는 함수
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      i < value.rating
        ? stars.push(
            <FullStar
              src={FullStarIcon}
              name="rating"
              key={i}
              onClick={() => handleStarClick(i + 1)}
            />
          )
        : stars.push(
            <EmptyStar
              src={EmptyStarIcon}
              key={i}
              name="rating"
              onClick={() => handleStarClick(i + 1)}
            />
          );
    }
    return stars;
  };

  return (
    <Container>
      {/* 브랜드 */}
      <DetailItemWrap>
        <DetailTitle>브랜드</DetailTitle>
        <CurvedRectangle onClick={handleBrandSearch} $cursor>
          <Dropdefault $icon>{value.brand}</Dropdefault>
          <SearchIconImg src={SearchIcon} />
        </CurvedRectangle>
        {brandSearchOpen && (
          <Modal
            isOpen={brandSearchOpen}
            onRequestClose={handleBrandSearch}
            style={{
              overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
              content: {
                border: "none",
                backgroundColor: "transparent",
                overflow: "hidden",
              },
            }}
          >
            <BrandSearch
              onClose={handleBrandSearch}
              onSelectBrand={handleBrandSelect}
            />
          </Modal>
        )}
      </DetailItemWrap>
      {/* 제품명 */}
      <DetailItemWrap>
        <DetailTitle>
          제품명<SS>*</SS>
        </DetailTitle>
        <CurvedRectangle>
          <NoteArea
            name="name"
            value={value.name}
            onChange={handleValueChange}
          />
        </CurvedRectangle>
      </DetailItemWrap>
      {/* 제품 번호 */}
      <DetailItemWrap>
        <DetailTitle>
          제품번호<SS>*</SS>
        </DetailTitle>
        <CurvedRectangle>
          <NoteArea
            name="product_code"
            value={value.product_code}
            onChange={handleValueChange}
          />
        </CurvedRectangle>
      </DetailItemWrap>

      {/* 분류 */}
      <DetailItemWrap>
        <DetailTitle>
          분류<SS>*</SS>
        </DetailTitle>
        <CurvedRectangle onClick={() => handleDropdown("category")} $cursor>
          <Dropdefault>{dropdown.category.label}</Dropdefault>
          <Toggledown>&lt;</Toggledown>
        </CurvedRectangle>

        <DropdownContainer $isToggle={dropdown.category.isOpen}>
          <DropdownList>
            {clothingCategories.map((category, index) => (
              <DropdownItem
                key={category.value}
                onClick={
                  () =>
                    handelDropdownSelect(
                      "category",
                      category.label,
                      category.value
                    ) // 숫자 값으로 선택
                }
                $isFirst={index == 0} //첫번째 항목 체크
                $isLast={index === clothingCategories.length - 1} // 마지막 항목 체크
              >
                {category.label}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      </DetailItemWrap>

      <DetailItemWrap>
        <DetailTitle>
          사이즈<SS>*</SS>
        </DetailTitle>
        <CurvedRectangle>
          <NoteArea
            name="size"
            value={value.size}
            onChange={handleValueChange}
          />
        </CurvedRectangle>
      </DetailItemWrap>

      <DetailItemWrap>
        <DetailTitle>
          핏<SS>*</SS>
        </DetailTitle>
        <CurvedRectangle onClick={() => handleDropdown("fit")} $cursor>
          <Dropdefault>{dropdown.fit.label}</Dropdefault>
          <Toggledown>&lt;</Toggledown>
        </CurvedRectangle>
        <DropdownContainer $isToggle={dropdown.fit.isOpen}>
          <DropdownList>
            {fitOptions.map((fit, index) => (
              <DropdownItem
                key={fit.value}
                onClick={() =>
                  handelDropdownSelect("fit", fit.value, fit.label)
                } // 숫자 값으로 선택
                $isFirst={index == 0} //첫번째 항목 체크
                $isLast={index === fitOptions.length - 1} // 마지막 항목 체크
              >
                {fit.label}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      </DetailItemWrap>

      <DetailItemWrap>
        <DetailTitle>색상</DetailTitle>
        <CurvedRectangle>
          <NoteArea
            name="color"
            value={value.color}
            onChange={handleValueChange}
          />
        </CurvedRectangle>
      </DetailItemWrap>

      <DetailItemWrap>
        <DetailTitle>URL</DetailTitle>
        <CurvedRectangle>
          <NoteArea name="url" value={value.url} onChange={handleValueChange} />
        </CurvedRectangle>
      </DetailItemWrap>

      <DetailItemWrap>
        <DetailTitle>평가</DetailTitle>
        <Detailbox style={{ display: "flex", marginTop: "5px" }}>
          {renderStars()}
        </Detailbox>
      </DetailItemWrap>

      <DetailItemWrap>
        <DetailTitle>메모</DetailTitle>
        <MemoTextArea
          name="memo"
          value={value.memo}
          onChange={handleValueChange}
        />
      </DetailItemWrap>

      <SimpleWrap>
        <DetailTitle>실축 사이즈</DetailTitle>
        <SizeWrap>
          <SizeList>
            <SizeItem>
              <SizeText>총장</SizeText>
              <CurvedRectangle4
                name="length"
                value={value.length}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
            <SizeItem>
              <SizeText>어깨너비</SizeText>
              <CurvedRectangle4
                name="shoulder"
                value={value.shoulder}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
            <SizeItem>
              <SizeText>가슴단면</SizeText>
              <CurvedRectangle4
                name="chest"
                value={value.chest}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
            <SizeItem>
              <SizeText>암홀단면</SizeText>
              <CurvedRectangle4
                name="armhole"
                value={value.armhole}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
            <SizeItem>
              <SizeText>소매단면</SizeText>
              <CurvedRectangle4
                name="sleeve"
                value={value.sleeve}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
            <SizeItem>
              <SizeText>소매길이</SizeText>
              <CurvedRectangle4
                name="sleeve_length"
                value={value.sleeve_length}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
            <SizeItem>
              <SizeText>밑단단면</SizeText>
              <CurvedRectangle4
                name="hem"
                value={value.hem}
                onChange={handleValueChange}
              />
              <SizeText>cm</SizeText>
            </SizeItem>
          </SizeList>
        </SizeWrap>
      </SimpleWrap>
      <StyledButton onClick={handleRegister}>옷 정보 등록하기</StyledButton>
    </Container>
  );
};

export default RegisterInfo;
