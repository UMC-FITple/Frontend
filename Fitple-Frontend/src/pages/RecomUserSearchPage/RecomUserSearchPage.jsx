import {
  Container,
  Blur,
  Title,
  SubTitle,
  SearchWrap,
  SearchBox,
  SearchInputBox,
} from "./RecomUserSearchPage.style";
import SearchIcon from "/assets/SearchIcon.svg";
import RecomUserCard from "../../components/RecomUserCard/RecomUserCard";

function RecomUserSearchPage() {
  return (
    <Container>
      <Blur />
      <Title>검색결과</Title>
      <SubTitle>유저를 검색해보세요.</SubTitle>
      <SearchWrap>
        <div>
          <img src={SearchIcon} height={40} width={40} />
        </div>
        <SearchInputBox placeholder="핏플" />
      </SearchWrap>
      <SearchBox>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
      </SearchBox>
    </Container>
  );
}

export default RecomUserSearchPage;
