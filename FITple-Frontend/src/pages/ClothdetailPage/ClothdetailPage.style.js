import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
`;
export const Wrap = styled.div`
  width: 80%;
`;

export const SimpleWrap = styled.div`
  margin-bottom: 30px;
`;
export const FirstWrap = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const BrandWrap = styled.div`
  width: 80%;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const BrandName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
export const OptionBTN = styled.button`
  padding: 0 10px;
  cursor: pointer;
  background: none;
  border: none;
`;
export const OptionBox = styled.div`
  width: 230px;
  height: 92px;
  position: absolute;
  right: 10px;
  top: 27px;
  border-radius: 10px;
  box-shadow: 8px 8px 20px 0px #c9c7c730;
  background-color: #efefef;
  display: ${(props) => (props.$active ? "block" : "none")};
  z-index: 1;
`;

export const OptionItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: block;
  width: 230px;
  height: 46px;
  padding: 13px 0 13px 36px;
  box-sizing: border-box;
  border-bottom: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
  /* 처음일때 */
  ${(props) =>
    props.$first &&
    css`
      border-radius: 10px 10px 0 0;
    `}
  /* 마지막일때 */
  ${(props) =>
    props.$last &&
    css`
      border-bottom: "1px solid #d9d9d9";
      border-radius: 0 0 10px 10px;
    `}
`;
export const ItemName = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const BackArrow = styled(Link)`
  font-size: 36px;
  text-decoration: none;
  color: black;
`;
export const SecondWrap = styled.div`
  display: flex;
`;
export const LeftWrap = styled.div`
  width: 40%;
`;

export const RightWrap = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding-left: 3%;
`;
export const ProductContainer = styled.div``;
export const StarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Imgcontainer = styled.div`
  margin-bottom: 8px;
  gap: 3%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 0.3125rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
export const ProductDeImagemin = styled.img`
  min-width: 20%;
  height: auto;
  aspect-ratio: 1 / 1; /* 1:1 비율로 설정 */
  object-fit: cover; /* 이미지를 잘라서 비율을 유지 */
  overflow-x: scroll;
  border-radius: 0.625rem;
  margin-bottom: 0.625rem;
  background-color: #efefef;
`;

export const ClothNameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const ClothName = styled.div`
  font-size: 2.1875rem;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 700;
  color: #000000;
  margin-top: 1.25rem;
`;
export const ClothdebarContainer = styled.div`
  border: 2px solid red;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 15%;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Clothdebar = styled.img`
  width: 0.4375rem;
  height: 0.4375rem;
  margin-bottom: 0.1875rem;
`;

export const BackIcon = styled.img`
  margin-left: 4.375rem;
  margin-top: 1.25rem;
`;

export const CurrentCloth = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

export const ProductDeImage = styled.img`
  margin-bottom: 8px;
  border-radius: 20px;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* 1:1 비율로 설정 */
  object-fit: cover; /* 이미지를 잘라서 비율을 유지 */
`;

export const CurvedRectangle = styled.div`
  width: 31.25rem;
  height: 3.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 1.25rem;
  padding: 1.25rem;
`;

export const NoteArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: sans-serif;
  background-color: transparent;
`;

export const DetailName = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.5625rem;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #0276fe;
  margin-left: 2.3%;
  margin-top: 2.5rem;
  width: 20rem;
`;
export const DetailNamebox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27rem;
`;
export const DetailboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1.5%;
  margin-top: 0.625rem;
  width: 26rem;
`;
export const UrlBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;
export const UrlLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const EditButtons = styled.div`
  display: flex;
  position: absolute;
  right: 80%;
  top: 3rem;
  width: 14.5rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.isEdit ? "flex" : "block")};
  transition: opacity 0.2s ease-in-out;
`;
export const EditButton = styled.button`
  padding: 0.57rem 3.9rem;
  border: 1px solid #000000;
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
  font-family: "SUIT Variable", sans-serif;
  border-radius: 0.625rem;
  background-color: #efefef;
  cursor: pointer;
  &:hover {
    background-color: #626262;
  }
`;

export const FullStar = styled.img.attrs({ src: "/assets/star8.svg" })`
  width: 2.375rem;
  height: 2.3125rem;
`;

export const EmptyStar = styled.img.attrs({ src: "/assets/star5.svg" })`
  width: 2.375rem;
  height: 2.3125rem;
`;

export const SizeText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #838383;
  white-space: nowrap;
`;

export const SizeList = styled.div`
  width: 40%;
`;
export const SizeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-end;
`;
export const CurvedRectangle3 = styled.div`
  width: 30%;
  font-size: 20px;
  font-weight: 600;
  text-align: right;
  border-radius: 12px;
  padding: 8px 24px 8px 0;
  margin-left: 16px;
  margin-right: 8px;
  background-color: #efefef;
`;
export const MeasureArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: "SUIT Variable", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  margin-left: 8.125rem;
  margin-right: 1.25rem;
`;

export const ChangeButton = styled.img`
  position: fixed;
  top: 28.125rem;
  left: 80%;
  cursor: pointer;
  z-index: 1;
`;

export const EmptyBookmark = styled.img`
  position: fixed;
  width: 6rem;
  height: 6rem;
  top: 34.375rem;
  left: 80%;
  cursor: pointer;
  z-index: 1;
`;

export const BookMarkIcon = styled.img`
  position: fixed;
  top: 34.375rem;
  left: 80%;
  cursor: pointer;
  z-index: 1;
`;

export const DetailWrap = styled.div`
  display: flex;
  gap: 4%;
  margin-bottom: 30px;
`;

export const DetailItemWrap = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const DetailTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #0276fe;
  margin-bottom: 8px;
  white-space: nowrap;
`;
export const DetailContext = styled.div`
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
`;
export const OptionImg = styled.img`
  width: 5px;
  height: 19px;
`;

export const SizeWrap = styled.div``;
export const DeleteModal = styled(ReactModal)`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
