import {
  BackIcon,
  SS,
  Parent1,
  Parent2,
  Parent3,
  ProductDeImage,
  ProductDeImagemin,
  Imgcontainer,
  CurvedRectangle,
  DetailNamebox,
  DetailName,
  Detailbox,
  NoteArea,
  FullStar,
  EmptyStar,
  CurvedRectangle2,
  Toggledown,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  Dropdefault,
  MeasureArea,
  MeasureNamebox,
  MeasureName,
  CurvedRectangle3,
  StyledButton,
} from "./ClothupdatePage.style";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClothupdatePage = () => {
  //드롭다운
  const [isToggle, setIsToggle] = useState(false);
  const [selectedValue, setSelectedValue] = useState("아우터");
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsToggle(false);
  };
  //별점
  const [rating, setRating] = useState(0);
  const handleStarClick = (newRating) => {
    setRating(newRating);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilledStar = i < rating;
      const StarComponent = isFilledStar ? FullStar : EmptyStar;
      stars.push(
        <StarComponent
          key={i}
          onClick={() => handleStarClick(i + 1)}
          style={{ cursor: "pointer" }}
        />
      );
    }
    return stars;
  };
  return (
    <div>
      <Parent1>
        <Parent2>
          <Link to="/cloth">
            <BackIcon />
          </Link>
          <ProductDeImage />
          <Imgcontainer>
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
          </Imgcontainer>
        </Parent2>
        <Parent3>
          <DetailNamebox>
            <DetailName>브랜드</DetailName>
            <CurvedRectangle>
              <NoteArea>나이키</NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              제품명 <SS>*</SS>
            </DetailName>

            <CurvedRectangle>
              <NoteArea>에센셜 풀집 후디</NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              제품번호<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <NoteArea></NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              분류<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <Dropdefault>{selectedValue}</Dropdefault>
              <Toggledown onClick={handleToggle}>&lt;</Toggledown>
            </CurvedRectangle>
            <DropdownContainer isToggle={isToggle}>
              <DropdownList>
                <DropdownItem onClick={() => handleSelect("아우터")}>
                  아우터
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("반소매 상의")}>
                  반소매 상의
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("긴소매 상의")}>
                  긴소매 상의
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("슬리브리스 상의")}>
                  슬리브리스 상의
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("롱팬츠")}>
                  롱팬츠
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("숏팬츠")}>
                  숏팬츠
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("스커트")}>
                  스커트
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("원피스")}>
                  원피스
                </DropdownItem>
                <DropdownItem onClick={() => handleSelect("신발")}>
                  신발
                </DropdownItem>
              </DropdownList>
            </DropdownContainer>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>사이즈</DetailName>
            <CurvedRectangle>
              <NoteArea></NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>핏</DetailName>
            <CurvedRectangle>
              <NoteArea>세미</NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>URL</DetailName>
            <CurvedRectangle>
              <Detailbox>
                <a href="https:://adidas.co.kr/1245">
                  https:://adidas.co.kr/1245
                </a>
              </Detailbox>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>평가</DetailName>
            <Detailbox style={{ display: "flex", marginTop: "5px" }}>
              {renderStars()}
            </Detailbox>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>메모</DetailName>
            <CurvedRectangle2>
              <NoteArea>길이는 딱 맞고,팔이 조금 길다.</NoteArea>
            </CurvedRectangle2>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>실축 사이즈</DetailName>
            <MeasureNamebox>
              <MeasureName>총장</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>40</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>어깨너비</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>71</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>가슴단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>73</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>암홀단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>소매단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>소매길이</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>밑단단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <StyledButton>옷 정보 수정하기</StyledButton>
          </DetailNamebox>
        </Parent3>
      </Parent1>
    </div>
  );
};

export default ClothupdatePage;
