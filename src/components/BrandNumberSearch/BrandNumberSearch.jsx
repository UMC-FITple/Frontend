import {
  SearchBox,
  Searchtitle,
  SearchInputBox,
  SearchIconBox,
  Container,
  TitleContainer,
  Xiconbox,
} from "./BrandNumberSearch.style";
import SearchIcon from "/assets/SearchIcon.svg";
import XIcon from "/assets/Xicon.svg";

const BrandNumberSearch = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Container>
      <TitleContainer>
        <Searchtitle>제품번호 검색</Searchtitle>
        <Xiconbox onClick={handleClose}>
          <img src={XIcon} />
        </Xiconbox>
      </TitleContainer>
      <SearchBox>
        <SearchIconBox>
          <img src={SearchIcon} />
        </SearchIconBox>
        <SearchInputBox type="text" placeholder="제품번호를 입력하세요." />
      </SearchBox>
    </Container>
  );
};
export default BrandNumberSearch;
