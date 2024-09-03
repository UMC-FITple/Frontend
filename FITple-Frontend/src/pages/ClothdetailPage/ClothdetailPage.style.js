import styled from "styled-components";

export const Parent1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 12%;
`;
export const Parent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 18%;
`;
export const Parent3 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 2.5rem;
  width: 40.25rem;
`;
export const ProductContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 3%;
  margin-bottom: 4rem;
`;
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 50%;
  margin-top: 1.25rem;
`;

export const Imgcontainer = styled.div`
  display: flex;
  width: 25rem;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-top: 1rem;
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
  width: 5rem;
  height: 5rem;
  flex: 0 0 auto;
  border: 1px solid gray;
  border-radius: 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
  background-color: #efefef;
  background-position: center;
  background-size: cover;
`;

export const ClothNamebox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  width: 25rem;
`;
export const ClothName = styled.div`
  font-size: 2.1875rem;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 700;
  color: #000000;
  margin-top: 1.25rem;
`;
export const ClothdebarContainer = styled.div`
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
  font-size: 1.25rem;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #000000;
  margin-left: 27%;
`;

export const ProductDeImage = styled.img`
  width: 25rem;
  height: 25rem;
  border: 1px solid gray;
  border-radius: 0.625rem;
  background-color: #d9d9d9;
  background-position: center;
  background-size: cover;
  margin-bottom: 38.75rem;
  margin-left: 3%;
`;

export const CurvedRectangle = styled.div`
  width: 31.25rem;
  height: 6.25rem;
  border: 1px solid #d9d9d9;
  border-radius: 1.25rem;
  padding: 1.25rem;
  margin-top: 1.25rem;
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
export const Detailbox = styled.div`
  font-size: 1.5625rem;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 700;
  color: #000000;
  margin-left: 2%;
  margin-top: 1.25rem;
  width: 6rem;
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

export const MeasureName = styled.div`
  font-size: 1.25rem;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #838383;
  margin-top: 1.25rem;
  width: 100%;
`;
export const MeasureNamebox = styled.div`
  display: flex;
  width: 80%;
  margin-left: 4.375rem;
  justify-content: center;
  align-items: center;
`;
export const CurvedRectangle3 = styled.div`
  width: 11.25rem;
  height: 1.25rem;
  border: 1px solid #efefef;
  border-radius: 1rem;
  padding: 0.625rem;
  margin-top: 1.25rem;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
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
  width: 6rem;
  height: 6rem;
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

export const FilledBookmark = styled.img`
  position: fixed;
  width: 6rem;
  height: 6rem;
  top: 34.375rem;
  left: 80%;
  cursor: pointer;
  z-index: 1;
`;
