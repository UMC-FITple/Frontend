import { useEffect, useState } from "react";
import {
  Container,
  Wrap,
  SubWrap,
  IndividualWrap,
  InformWrap,
} from "./RecomUserFeedPage.style";
import RecomInfom from "../../components/RecomInfom/RecomInfom";
import FeedButton from "../../components/FeedButton/FeedButton";
import FeedNav from "../../components/FeedNav/FeedNav";
import Closet from "../../components/Closet/Closet";
import { useLocation } from "react-router-dom";
import CloIcon from "/assets/ClosetBlue.svg";
import CloIconEmpty from "/assets/ClosetEmpty.svg";
import HeartIcon from "/assets/HeartBlue.svg";
import HeartIconEmpty from "/assets/HeartEmpty.svg";
import RecomFeedApi from "../../../data/RecomFeedApi";

function RecomUserFeedPage() {
  //유저 프로필 정보
  const location = useLocation();
  const data = location.state;

  //유저 옷 정보
  const [cloData, setCloData] = useState([]);
  const [likeCloData, setLikeCloData] = useState([]);
  const [filteredClothes, setFilteredClothes] = useState([]);
  const [isInCloset, setIsInCloset] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const DummyFetchUsers = async () => {
    try {
      const response = await RecomFeedApi();
      const data = await response;
      setCloData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const filterLikeClo = () => {
    const filteredData = cloData.filter((item) => item.like === "1");
    setLikeCloData(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      await DummyFetchUsers(); // 데이터 가져오기
    };
    fetchData();
  }, []); // 빈 배열로 초기 렌더링 시에만 실행

  useEffect(() => {
    // cloData가 업데이트될 때마다 likeCloData를 필터링
    filterLikeClo();
  }, [cloData]);

  useEffect(() => {
    // 초기 상태 설정
    if (isInCloset) {
      setFilteredClothes(cloData);
    } else {
      setFilteredClothes(likeCloData);
    }
  }, [isInCloset, cloData, likeCloData]); // 상태 변화에 따라 filteredClothes 업데이트

  useEffect(() => {
    if (selectedCategory === "전체") {
      setFilteredClothes(isInCloset ? cloData : likeCloData);
    } else {
      const filtered = (isInCloset ? cloData : likeCloData).filter(
        (item) => item.category === selectedCategory
      );
      setFilteredClothes(filtered);
    }
  }, [selectedCategory, cloData, likeCloData, isInCloset]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleToggleCloset = (isCloset) => {
    setIsInCloset(isCloset);
    setSelectedCategory("전체");
  };

  return (
    <Container>
      <InformWrap>
        <RecomInfom data={data} />
      </InformWrap>
      <Wrap>
        <IndividualWrap>
          <FeedButton
            icon={isInCloset ? CloIcon : CloIconEmpty}
            alt="옷장"
            color={isInCloset ? "#0276FE" : "#838383"}
            onClick={() => handleToggleCloset(true)}
          />
          <FeedButton
            icon={isInCloset ? HeartIconEmpty : HeartIcon}
            alt="즐겨찾는 옷"
            color={isInCloset ? "#838383" : "#0276FE"}
            onClick={() => handleToggleCloset(false)}
          />
        </IndividualWrap>
        <SubWrap>
          <FeedNav
            onCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
          />
          <Closet clothes={filteredClothes} />
        </SubWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserFeedPage;
