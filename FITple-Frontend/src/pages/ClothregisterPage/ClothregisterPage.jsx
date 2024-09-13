import { useState } from "react";
import Modal from "react-modal";
import {
  SS,
  Parent1,
  Parent2,
  Parent3,
  CurvedRectangle,
  DetailNamebox,
  DetailName,
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
  SearchIconBox,
  ModalContainer,
  ModalInput,
  ModalButton,
  Container,
  Wrap,
  FirstWrap,
  BackArrow,
  SecondWrap,
  LeftWrap,
  RightWrap,
  DetailTitle,
  DetailItemWrap,
  RightWrap2,
  SearchIconImg,
  MemoTextArea,
  SimpleWrap,
  SizeWrap,
  SizeList,
  SizeItem,
  SizeText,
  CurvedRectangle4,
  Detailbox,
} from "./ClothregisterPage.style";
import SearchIcon from "/assets/SearchIcon.svg";
import BrandSearch from "../../components/BrandSearch/BrandSearch";
import RegisterPopUp from "../../components/RegisterPopUp/RegisterPopUp";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import FullStarIcon from "../../../assets/Star8.svg";
import EmptyStarIcon from "../../../assets/Star5.svg";

const localhost = "http://localhost:3000";

const ClothregisterPage = () => {
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

  const [dropdown, setDropdown] = useState({
    category: { isOpen: false, value: null },
    fit: { isOpen: false, value: null },
  });
  const [imageUrl, setImageUrl] = useState("");
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState("");
  const [brand, setBrand] = useState(""); // 브랜드 이름 상태
  const [name, setName] = useState("");
  const [productCode, setProductCode] = useState(""); // 제품 번호 입력
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [memo, setMemo] = useState("");
  const [measurements, setMeasurements] = useState({
    length: null,
    shoulder: null,
    chest: null,
    armhole: null,
    sleeve: null,
    sleeve_length: null,
    hem: null,
  });
  const [registerpopup, setRegisterpopup] = useState(false);
  const [brandSearchOpen, setBrandSearchOpen] = useState(false);

  // 브랜드 검색 핸들러
  const handleBrandSearch = () => {
    setBrandSearchOpen(!brandSearchOpen);
  };

  // 브랜드 선택 시
  const handleBrandSelect = (selectedBrandName) => {
    setBrand(selectedBrandName);
    setBrandSearchOpen(false);
  };

  // 옷 정보 등록 함수
  const handleRegister = async () => {
    // 필수 값이 없는 경우 처리
    if (
      !name ||
      !productCode ||
      dropdown.category.value === null ||
      !size ||
      dropdown.fit.value === null
    ) {
      alert("필수 정보를 모두 입력해 주세요.");
      return;
    }

    const requestBody = {
      image: imageUrl || null,
      brand: brand || null,
      name,
      product_code: productCode,
      category: dropdown.category.value, // 숫자 값으로 전송
      size,
      fit: dropdown.fit.value, // 숫자 값으로 전송
      color: color || null,
      url: url || null,
      rating: rating || null,
      memo: memo || null,
      length: measurements.length || null,
      shoulder: measurements.shoulder || null,
      chest: measurements.chest || null,
      armhole: measurements.armhole || null,
      sleeve: measurements.sleeve || null,
      sleeve_length: measurements.sleeve_length || null,
      hem: measurements.hem || null,
    };

    console.log("Request Body:", requestBody); // 디버깅을 위해 출력

    try {
      const response = await fetch(`${localhost}/FITple/my/closet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        credentials: "include",
      });

      if (response.ok) {
        setRegisterpopup(true);
      } else {
        console.error("Failed to register clothing:", response.statusText);
      }
    } catch (error) {
      console.error("Clothing registration error:", error);
    }
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

  const handelDropdownSelect = (type, value) => {
    setDropdown((prevstate) => ({
      ...prevstate,
      [type]: {
        ...prevstate[type],
        isOpen: false,
        value,
      },
    }));
  };

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilledStar = i < rating;
      const StarComponent = isFilledStar ? FullStar : EmptyStar;
      i < rating
        ? stars.push(
            <FullStar
              src={FullStarIcon}
              key={i}
              onClick={() => handleStarClick(i + 1)}
            />
          )
        : stars.push(
            <EmptyStar
              src={EmptyStarIcon}
              key={i}
              onClick={() => handleStarClick(i + 1)}
            />
          );
    }
    return stars;
  };

  return (
    <Container>
      <Wrap>
        <FirstWrap>
          <BackArrow to="/clothes">&lt;</BackArrow>
        </FirstWrap>
        <SecondWrap>
          <LeftWrap>
            {/* 이미지 업로드 컴포넌트 */}
            <ImageUpload setImageUrl={setImageUrl} />
          </LeftWrap>
          <RightWrap>
            <RightWrap2>
              {/* 브랜드 */}
              <DetailItemWrap>
                <DetailTitle>브랜드</DetailTitle>
                <CurvedRectangle onClick={handleBrandSearch} $cursor>
                  <Dropdefault $icon>{brand}</Dropdefault>
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
                  제품명 <SS>*</SS>
                </DetailTitle>
                <CurvedRectangle>
                  <NoteArea
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                  />
                </CurvedRectangle>
              </DetailItemWrap>

              {/* 분류 */}
              <DetailItemWrap>
                <DetailTitle>
                  분류<SS>*</SS>
                </DetailTitle>
                <CurvedRectangle
                  onClick={() => handleDropdown("category")}
                  $cursor
                >
                  <Dropdefault>{dropdown.category.value}</Dropdefault>
                  <Toggledown>&lt;</Toggledown>
                </CurvedRectangle>

                <DropdownContainer isToggle={dropdown.category.isOpen}>
                  <DropdownList>
                    {clothingCategories.map((category, index) => (
                      <DropdownItem
                        key={category.value}
                        onClick={
                          () => handelDropdownSelect("category", category.label) // 숫자 값으로 선택
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
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </CurvedRectangle>
              </DetailItemWrap>

              <DetailItemWrap>
                <DetailTitle>
                  핏<SS>*</SS>
                </DetailTitle>
                <CurvedRectangle onClick={() => handleDropdown("fit")} $cursor>
                  <Dropdefault>{dropdown.fit.value}</Dropdefault>
                  <Toggledown>&lt;</Toggledown>
                </CurvedRectangle>
                <DropdownContainer isToggle={dropdown.fit.isOpen}>
                  <DropdownList>
                    {fitOptions.map((fit, index) => (
                      <DropdownItem
                        key={fit.value}
                        onClick={() => handelDropdownSelect("fit", fit.value)} // 숫자 값으로 선택
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
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </CurvedRectangle>
              </DetailItemWrap>

              <DetailItemWrap>
                <DetailTitle>URL</DetailTitle>
                <CurvedRectangle>
                  <NoteArea
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
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
                {/* <CurvedRectangle2>
                  <NoteArea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                  />
                </CurvedRectangle2> */}
                <MemoTextArea />
              </DetailItemWrap>

              <SimpleWrap>
                <DetailTitle>실축 사이즈</DetailTitle>
                <SizeWrap>
                  <SizeList>
                    <SizeItem>
                      <SizeText>총장</SizeText>
                      <CurvedRectangle4
                        value={measurements.length || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            length: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                    <SizeItem>
                      <SizeText>어깨너비</SizeText>
                      <CurvedRectangle4
                        value={measurements.shoulder || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            shoulder: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                    <SizeItem>
                      <SizeText>가슴단면</SizeText>
                      <CurvedRectangle4
                        value={measurements.chest || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            chest: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                    <SizeItem>
                      <SizeText>암홀단면</SizeText>
                      <CurvedRectangle4
                        value={measurements.armhole || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            armhole: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                    <SizeItem>
                      <SizeText>소매단면</SizeText>
                      <CurvedRectangle4
                        value={measurements.sleeve || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            sleeve: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                    <SizeItem>
                      <SizeText>소매길이</SizeText>
                      <CurvedRectangle4
                        value={measurements.sleeve_length || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            sleeve_length: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                    <SizeItem>
                      <SizeText>밑단단면</SizeText>
                      <CurvedRectangle4
                        value={measurements.hem || ""}
                        onChange={(e) =>
                          setMeasurements({
                            ...measurements,
                            hem: e.target.value,
                          })
                        }
                      />
                      <SizeText>cm</SizeText>
                    </SizeItem>
                  </SizeList>
                </SizeWrap>
              </SimpleWrap>
              <StyledButton onClick={handleRegister}>
                옷 정보 등록하기
              </StyledButton>
              {registerpopup && (
                <Modal
                  isOpen={registerpopup}
                  onRequestClose={() => setRegisterpopup(false)}
                  style={{
                    overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                    content: {
                      border: "none",
                      backgroundColor: "transparent",
                      overflow: "hidden",
                    },
                  }}
                >
                  <RegisterPopUp onClose={() => setRegisterpopup(false)} />
                </Modal>
              )}
            </RightWrap2>
          </RightWrap>
        </SecondWrap>
        <Parent1>
          <Parent2>
            {/* <ProductDeImage>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Clothing"
                  style={{ width: "100%", height: "auto" }}
                  onClick={handleImageModalOpen}
                />
              ) : (
                <Registerimage onClick={handleImageModalOpen} />
              )}
            </ProductDeImage> */}

            {/* <Imgcontainer>
              <ProductDeImagemin />
              <ProductDeImagemin />
              <ProductDeImagemin />
              <ProductDeImagemin />
              <ProductDeImagemin />
              <ProductDeImagemin />
            </Imgcontainer> */}
          </Parent2>
          <Parent3>
            {/* 이미지 URL 입력 모달 */}
            {/* <Modal
              isOpen={imageModalOpen}
              onRequestClose={handleImageModalClose}
              style={{
                overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                content: {
                  border: "none",
                  backgroundColor: "transparent",
                  overflow: "hidden",
                },
              }}
            >
              <ModalContainer>
                <h2>이미지 URL 입력</h2>
                <ModalInput
                  type="text"
                  placeholder="이미지 URL을 입력하세요"
                  value={tempImageUrl}
                  onChange={(e) => setTempImageUrl(e.target.value)}
                />
                <ModalButton onClick={handleImageUrlSubmit}>확인</ModalButton>
              </ModalContainer>
            </Modal> */}
            {/* 
            <DetailNamebox>
              <DetailName>실축 사이즈</DetailName>
              <MeasureNamebox>
                <MeasureName>총장</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.length || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        length: e.target.value,
                      })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <MeasureNamebox>
                <MeasureName>어깨너비</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.shoulder || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        shoulder: e.target.value,
                      })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <MeasureNamebox>
                <MeasureName>가슴단면</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.chest || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        chest: e.target.value,
                      })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <MeasureNamebox>
                <MeasureName>암홀단면</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.armhole || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        armhole: e.target.value,
                      })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <MeasureNamebox>
                <MeasureName>소매단면</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.sleeve || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        sleeve: e.target.value,
                      })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <MeasureNamebox>
                <MeasureName>소매길이</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.sleeve_length || ""}
                    onChange={(e) =>
                      setMeasurements({
                        ...measurements,
                        sleeve_length: e.target.value,
                      })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <MeasureNamebox>
                <MeasureName>밑단단면</MeasureName>
                <CurvedRectangle3>
                  <MeasureArea
                    value={measurements.hem || ""}
                    onChange={(e) =>
                      setMeasurements({ ...measurements, hem: e.target.value })
                    }
                  />
                </CurvedRectangle3>
                <MeasureName>cm</MeasureName>
              </MeasureNamebox>

              <StyledButton onClick={handleRegister}>
                옷 정보 등록하기
              </StyledButton>
              {registerpopup && (
                <Modal
                  isOpen={registerpopup}
                  onRequestClose={() => setRegisterpopup(false)}
                  style={{
                    overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                    content: {
                      border: "none",
                      backgroundColor: "transparent",
                      overflow: "hidden",
                    },
                  }}
                >
                  <RegisterPopUp onClose={() => setRegisterpopup(false)} />
                </Modal>
              )}
            </DetailNamebox> */}
          </Parent3>
        </Parent1>
      </Wrap>
    </Container>
  );
};

export default ClothregisterPage;
