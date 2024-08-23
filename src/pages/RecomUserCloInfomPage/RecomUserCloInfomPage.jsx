import { useLocation, useNavigate } from "react-router-dom";
import Dimension from "../../components/Dimension/Dimension";
import InfomBox from "../../components/InfomBox/InfomBox";
import {
  Container,
  RightWrap,
  LeftWrap,
  LineWrap,
  Item,
  ImgWrap,
  SubImgWrap,
  ImgItem,
  Wrap,
  Rate,
  Root,
  Like,
  Bookmark,
  Brand,
  Product,
  MemoBox,
  MemoWrap,
} from "./RecomUserCloInfomPage.style";
import { useState, useEffect } from "react";
import RecomFeedApi from "../../../data/RecomFeedApi";

function RecomUserCloInfomPage() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [cloData, setCloData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템 상태 추가

  const DummyFetchUsers = async () => {
    try {
      const response = await RecomFeedApi();
      const data = await response;
      setCloData(data);
      console.log(data);

      // 특정 cloth_id 찾기
      const foundItem = data.find((item) => item.cloth_id === data.cloth_id);
      setSelectedItem(foundItem); // 찾은 아이템을 상태에 저장

      console.log(selectedItem);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await DummyFetchUsers(); // 데이터 가져오기
    };
    fetchData();
  }, []); // 빈 배열로 초기 렌더링 시에만 실행

  return (
    <Container>
      <Wrap>
        <LeftWrap>
          <LineWrap>
            <img
              src="/assets/Back.svg"
              width={22}
              alt="Back"
              onClick={() => navigate(-1)} // 클릭 시 이전 페이지로 이동
              style={{ cursor: "pointer" }}
            />
            <Root>핏플 아우터</Root>
          </LineWrap>
          <ImgWrap>
            <img
              src={`${selectedItem ? selectedItem.clothImg : data.clothImg}(${
                data.cloth_id
              }).png`}
              width={550}
              height={550}
              alt="Item"
            />
            <Like src="/assets/Heart.svg" alt="Like" />
          </ImgWrap>

          <SubImgWrap>
            <ImgItem src="/assets/ExImg (1).png" />
            <ImgItem src="/assets/ExImg (3).png" />
            <ImgItem src="/assets/ExImg (4).png" />
            <ImgItem src="/assets/ExImg (5).png" />
            <ImgItem src="/assets/ExImg (3).png" />
            <ImgItem src="/assets/ExImg (4).png" />
            <ImgItem src="/assets/ExImg (5).png" />
            <ImgItem src="/assets/ExImg (2).png" />
          </SubImgWrap>
          <Rate>
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStarEmpty.svg" width={46} height={42} />
          </Rate>
        </LeftWrap>

        <RightWrap>
          <LineWrap>
            <Item>
              <Brand>{selectedItem ? selectedItem.brand : data.brand}</Brand>
              <Product>
                {selectedItem ? selectedItem.cloth_name : data.cloth_name}
              </Product>
            </Item>
            <Bookmark src="/assets/Bookmark.svg" alt="Bookmark" />
          </LineWrap>
          <LineWrap>
            <Item>
              <InfomBox
                Name="사이즈"
                Infom={`${selectedItem ? selectedItem.size : data.size}`}
              />
            </Item>
            <Item>
              <InfomBox
                Name="핏"
                Infom={`${selectedItem ? selectedItem.fit : data.fit}`}
              />
            </Item>
            <Item>
              <InfomBox
                Name="색상"
                Infom={`${selectedItem ? selectedItem.color : data.color}`}
              />
            </Item>
            <Item>
              <InfomBox
                Name="제품번호"
                Infom={`${
                  selectedItem ? selectedItem.cloth_num : data.cloth_num
                }`}
              />
            </Item>
          </LineWrap>
          <LineWrap>
            <InfomBox Name="URL" Infom={`${data.url}`}></InfomBox>
          </LineWrap>
          <MemoWrap>
            <Item>메모</Item>
            <MemoBox>{data.memo}</MemoBox>
          </MemoWrap>
          <Dimension />
        </RightWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserCloInfomPage;
