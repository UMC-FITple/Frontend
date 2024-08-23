import {
  SearchBox,
  Searchtitle,
  SearchInputBox,
  SearchIconBox,
  Container,
  TitleContainer,
  Xiconbox,
  BrandContainer,
  Brandname,
  ENBrand,
  BrandNameContainer,
  Nosearch,
} from "./BrandSearch.style";
import SearchIcon from "/assets/SearchIcon.svg";
import XIcon from "/assets/Xicon.svg";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const BrandSearch = ({ onClose, onSelectBrand }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // API 요청을 디바운스 처리하여 검색어 입력 후 일정 시간 대기 후 요청
  const fetchBrands = debounce(async (searchTerm) => {
    if (!searchTerm) {
      setFilteredBrands([]);
      return;
    }

    setIsLoading(true);
    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const response = await fetch(
        `http://localhost:3000/FITple/my/closet/brand?name=${encodedSearchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Data:", data); // 가져온 데이터를 콘솔에 출력
        setFilteredBrands(data.result.brandData || []); // 데이터가 없을 경우 빈 배열 설정
      } else {
        console.error("Error fetching brand data: Response not OK");
        setFilteredBrands([]); // 오류 발생 시 빈 배열 설정
      }
    } catch (error) {
      console.error("Failed to fetch brand data:", error);
      setFilteredBrands([]); // 오류 발생 시 빈 배열 설정
    } finally {
      setIsLoading(false);
    }
  }, 300); // 300ms의 딜레이 적용

  // 검색어 변경 시 API 호출
  useEffect(() => {
    fetchBrands(searchTerm);
  }, [searchTerm]);

  // 검색어 입력 핸들러
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // 브랜드 선택 시
  const handleBrandSelect = (brand) => {
    onSelectBrand(brand.brand_name);
    onClose(); // 모달 닫기
  };

  return (
    <Container>
      <TitleContainer>
        <Searchtitle>브랜드 검색</Searchtitle>
        <Xiconbox onClick={onClose}>
          <img src={XIcon} alt="닫기" />
        </Xiconbox>
      </TitleContainer>
      <SearchBox>
        <SearchIconBox>
          <img src={SearchIcon} alt="검색 아이콘" />
        </SearchIconBox>
        <SearchInputBox
          placeholder="브랜드를 입력하세요."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBox>
      <div>
        {isLoading ? (
          <Nosearch>검색 중...</Nosearch>
        ) : filteredBrands && filteredBrands.length > 0 && searchTerm !== "" ? (
          filteredBrands.map((item) => (
            <BrandContainer
              key={item.brand_id}
              onClick={() => handleBrandSelect(item)}
            >
              <BrandNameContainer>
                <Brandname>{item.brand_name}</Brandname>
                <ENBrand>{item.eng_name}</ENBrand>
              </BrandNameContainer>
            </BrandContainer>
          ))
        ) : searchTerm !== "" ? (
          <Nosearch>검색 결과가 없습니다.</Nosearch>
        ) : (
          <Nosearch>브랜드를 검색하세요.</Nosearch>
        )}
      </div>
    </Container>
  );
};

export default BrandSearch;
