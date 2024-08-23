import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "react-modal";
import {
  BackIcon,
  CurrentCloth,
  Parent1,
  Parent2,
  Parent3,
  ProductDeImage,
  ClothNamebox,
  ClothName,
  Clothdebar,
  ClothdebarContainer,
  DetailName,
  DetailNamebox,
  DetailboxContainer,
  Detailbox,
  CurvedRectangle,
  NoteArea,
  EditButtons,
  EditButton,
  CurvedRectangle3,
  MeasureArea,
  MeasureNamebox,
  MeasureName,
  FullStar,
  EmptyStar,
  ProductContainer,
  StarContainer,
  Imgcontainer,
  ProductDeImagemin,
  ChangeButton,
  EmptyBookmark,
  FilledBookmark,
} from "./ClothdetailPage.style";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";
import ComparePopUp from "../../components/ComparePopUp/ComparePopUp";
import CompareInputPopUp from "../../components/CompareInputPopUp/CompareInputPopUp";
import CompareSearchPopUp from "../../components/CompareSearchPopUp/CompareSearchPopUp";
import CompareLoading from "../../components/CompareLoading/CompareLoading";
import CompareResult from "../../components/CompareResult/CompareResult";
import useAuthStore from "../../../data/store/userAuthStore"; // 토큰을 가져오기 위해 zustand의 store import

function ClothdetailPage() {
  const { clothId } = useParams(); // URL에서 clothId 가져오기
  const [clothData, setClothData] = useState(null); // 가져온 데이터를 저장할 상태
  const [note, setNote] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);
  const [popupOpen, setPopUpOpen] = useState(""); // 팝업 상태 관리
  const [compareData, setCompareData] = useState([]);

  // Zustand를 통해 token 가져오기
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchClothDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/FITple/my/closet/${clothId}`, // API 주소
          {
            method: "GET",
            headers: {},
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.result && data.result.clothData.length > 0) {
            const clothDetail = data.result.clothData[0]; // 첫 번째 아이템을 사용
            setClothData(clothDetail); // 받아온 데이터를 상태에 저장
            setNote(clothDetail.memo || ""); // 서버에서 받아온 메모를 초기화
            setRating(clothDetail.rating || 0); // 평점이 있다면 초기화
          } else {
            console.error("No cloth data found");
          }
        } else {
          console.error("Failed to fetch cloth detail:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cloth detail:", error);
      }
    };

    fetchClothDetail();
  }, [clothId, token]); // clothId 또는 token이 변경될 때마다 데이터를 다시 가져옴

  useEffect(() => {
    // 팝업이 열릴 때에도 기본 UI 요소가 사라지지 않도록 관리
    if (popupOpen) {
      document.body.style.overflow = "hidden"; // 팝업이 열릴 때 스크롤 막기 (선택 사항)
    } else {
      document.body.style.overflow = "unset";
    }
  }, [popupOpen]);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleInputchange = (e) => {
    setNote(e.target.value);
  };

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

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const comparePopUpOpen = () => {
    setPopUpOpen("ComparePopUp");
  };

  const compareInputPopUpOpen = () => {
    setPopUpOpen("CompareInputPopUp");
  };

  const compareSearchPopUpOpen = () => {
    setPopUpOpen("CompareSearchPopUp");
  };

  const compareLoadingOpen = () => {
    setPopUpOpen("CompareLoading");
  };

  const compareResultOpen = () => {
    setPopUpOpen("CompareResult");
  };

  const popupClose = () => {
    setPopUpOpen(""); // 팝업 상태 초기화
  };

  const handleSave = (newData) => {
    setCompareData([...compareData, ...newData]);
  };

  const cleanCompareData = () => {
    setCompareData([]);
  };

  const renderPopup = () => {
    switch (popupOpen) {
      case "ComparePopUp":
        return (
          <ComparePopUp
            popupClose={popupClose}
            compareInputPopUpOpen={compareInputPopUpOpen}
          />
        );
      case "CompareInputPopUp":
        return (
          <CompareInputPopUp
            comparePopUpOpen={comparePopUpOpen}
            compareSearchPopUpOpen={compareSearchPopUpOpen}
            popupClose={popupClose}
            onSave={handleSave}
          />
        );
      case "CompareSearchPopUp":
        return (
          <CompareSearchPopUp
            compareInputPopUpOpen={compareInputPopUpOpen}
            popupClose={popupClose}
            compareData={compareData}
            cleanCompareData={cleanCompareData}
            compareLoadingOpen={compareLoadingOpen}
          />
        );
      case "CompareLoading":
        return (
          <CompareLoading
            popupClose={popupClose}
            compareSearchPopUpOpen={compareSearchPopUpOpen}
            cleanCompareData={cleanCompareData}
            compareResultOpen={compareResultOpen}
          />
        );
      case "CompareResult":
        return (
          <CompareResult
            popupClose={popupClose}
            compareData={compareData}
            cleanCompareData={cleanCompareData}
            compareLoadingOpen={compareLoadingOpen}
            compareSearchPopUpOpen={compareSearchPopUpOpen}
          />
        );
      default:
        return null;
    }
  };

  if (!clothData) {
    return <div>Loading...</div>; // 데이터가 로드되기 전 로딩 표시
  }

  return (
    <div>
      <Parent1>
        <ChangeButton
          onClick={comparePopUpOpen}
          src="../assets/changebutton.svg"
        />
        {isBookmark ? (
          <FilledBookmark
            onClick={handleBookmark}
            src="../assets/filledbookmark.svg"
          />
        ) : (
          <EmptyBookmark
            onClick={handleBookmark}
            src="../assets/emptybookmark.svg"
          />
        )}
        <Link to="/cloth">
          <BackIcon src="../assets/BackArrow.svg" />
        </Link>
        <CurrentCloth>옷장{">"}아우터</CurrentCloth>
      </Parent1>
      <Parent2>
        <ProductDeImage src={clothData.cloth_image} /> {/* 이미지 추가 */}
        <ProductContainer>
          <Imgcontainer>
            {/* 다중 이미지 로딩 가능 */}
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
          </Imgcontainer>
          <StarContainer>{renderStars()}</StarContainer>
        </ProductContainer>
        <Parent3>
          <ClothNamebox>
            <ClothName>
              {clothData.brand}
              <br />
              <b>{clothData.cloth_name}</b>
            </ClothName>

            <ClothdebarContainer onClick={toggleEdit}>
              <Clothdebar src="../assets/detailbar.svg" />
              <Clothdebar src="../assets/detailbar.svg" />
              <Clothdebar src="../assets/detailbar.svg" />
              {isEdit && (
                <EditButtons isEdit={isEdit}>
                  <Link to="/clothupdate">
                    <EditButton>옷 정보 수정하기</EditButton>
                  </Link>
                  <EditButton onClick={handleDeleteCloth}>
                    옷 정보 삭제하기
                  </EditButton>
                </EditButtons>
              )}
              {isDeletePopupOpen && (
                <Modal
                  isOpen={isDeletePopupOpen}
                  onRequestClose={() => setisDeletePopupOpen(false)}
                  style={{
                    overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                    content: {
                      border: "none",
                      backgroundColor: "transparent",
                      overflow: "hidden",
                    },
                  }}
                >
                  <DeletePopUp
                    isOpen={isDeletePopupOpen}
                    onClose={() => setisDeletePopupOpen(false)}
                  />
                </Modal>
              )}
            </ClothdebarContainer>
          </ClothNamebox>
          <DetailNamebox>
            <DetailName>사이즈</DetailName>
            <DetailName>핏</DetailName>
            <DetailName> 색상</DetailName>
            <DetailName>제품번호</DetailName>
          </DetailNamebox>
          <DetailboxContainer>
            <Detailbox>{clothData.size}</Detailbox>
            <Detailbox>{clothData.fit}</Detailbox>
            <Detailbox>{clothData.color}</Detailbox>
            <Detailbox>{clothData.product_code}</Detailbox>
          </DetailboxContainer>
          <DetailName>URL</DetailName>
          <Detailbox>
            <a href={clothData.URL} target="_blank" rel="noopener noreferrer">
              {clothData.URL}
            </a>
          </Detailbox>
          <DetailName>메모</DetailName>
          <CurvedRectangle>
            <NoteArea
              id="note-area"
              placeholder="메모를 입력하세요"
              value={note}
              onChange={handleInputchange}
            />
          </CurvedRectangle>
          <DetailName>실축 사이즈</DetailName>
          <MeasureNamebox>
            <MeasureName>총장</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.length || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>어깨너비</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.shoulder || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>가슴단면</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.chest || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>암홀단면</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.armhole || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>소매단면</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.sleeve || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>소매길이</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.sleeve_length || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>밑단단면</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.hem || "-"}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
        </Parent3>
      </Parent2>
      {renderPopup()} {/* 팝업 렌더링 */}
    </div>
  );
}

export default ClothdetailPage;
