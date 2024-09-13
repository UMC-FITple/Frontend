import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 30px;
`;
export const Wrap = styled.div`
  width: 996px;
`;
export const FirstWrap = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const SecondWrap = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const LeftWrap = styled.div`
  width: 400px;
`;
export const RightWrap = styled.div`
  width: 400px;
`;

export const RightWrap2 = styled.div``;
export const StarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const BackArrow = styled(Link)`
  font-size: 36px;
  text-decoration: none;
  color: black;
`;
export const Parent1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;
export const BackIcon = styled.div`
  //뒤로가기 아이콘
  width: 11px;
  height: 40px;
  background: url(assets/back.svg);
  cursor: pointer;
`;
// *모양
export const SS = styled.span`
  font-weight: bold;
  color: #ff84a9;
`;

export const FullStar = styled.img`
  width: 38px;
  height: 37px;
  cursor: pointer;
`;
export const EmptyStar = styled.img`
  width: 38px;
  height: 37px;
  cursor: pointer;
`;
export const Parent2 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 80px;
  margin-top: 20px;
  margin-right: 150px;
`;

export const Registerimage = styled.div`
  margin-left: 140px;
  margin-top: 120px;
  width: 105px;
  height: 141px;
  background: url(assets/registerimage.svg);
  cursor: pointer;
`;

export const SimpleWrap = styled.div`
  margin-bottom: 30px;
`;
export const SizeWrap = styled.div``;
export const SizeList = styled.div`
  width: fit-content;
`;
export const SizeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const SizeText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #838383;
  white-space: nowrap;
`;
export const CurvedRectangle4 = styled.input`
  width: 30%;
  font-size: 16px;
  font-weight: 500;
  text-align: right;
  border-radius: 12px;
  border: none;
  outline: none;

  padding: 8px 24px 8px 0;
  margin-left: 16px;
  margin-right: 8px;
  background-color: #efefef;
`;

export const CurvedRectangle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ${(props) =>
    props.$cursor &&
    css`
      cursor: pointer;
    `}
`;
export const DetailItemWrap = styled.div`
  height: fit-content;
  margin-bottom: 16px;
`;
export const DetailTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #0276fe;
  margin-bottom: 8px;
  white-space: nowrap;
`;
export const CurvedRectangle2 = styled.div`
  /*메모*/
  height: 70px;
  width: 100%;
`;
export const NoteArea = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;

  outline: none;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 30px 12px 30px;
  background-color: #efefef;
`;
export const DetailName = styled.div`
  display: flex;
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #0075ff;
  margin-left: 30px;
  margin-top: 20px;
`;
export const DetailNamebox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Parent3 = styled.div`
  display: flex;
  align-items: column;
  justify-content: column;
  flex-direction: column;
  margin-top: 50px;
`;
export const Detailbox = styled.div``;

export const MemoTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: none;
  resize: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 30px 12px 30px;
  background-color: #efefef;
`;

export const SearchIconImg = styled.img`
  position: absolute;
  left: 20px;
`;

export const Toggledown = styled.div`
  position: absolute;
  right: 20px;
  font-weight: 500;
  font-size: 28px;
  color: #838383;
  transform: rotate(-90deg);
  cursor: pointer;
`;
export const DropdownContainer = styled.div`
  position: relative;
  display: ${(props) => (props.isToggle ? "block" : "none")};
`;
export const DropdownList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  /* top: 100%;
  right: 210px; */
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 0;
  z-index: 1;
`;
export const DropdownItem = styled.li`
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #d9d9d9")};

  display: flex;
  padding: 1rem 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  ${(props) =>
    props.$isFirst &&
    css`
      border-radius: 10px 10px 0px 0px;
    `}
  ${(props) =>
    props.$isLast &&
    css`
      border-radius: 0px 0px 10px 10px;
    `}
`;
export const Dropdefault = styled.div`
  display: flex;
  align-items: center;
  min-height: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0 12px 30px;
  background-color: #efefef;
  border-radius: 10px;
  ${(props) =>
    props.$icon &&
    css`
      padding: 12px 0 12px 42px;
    `}
`;

/*실축사이즈 */

export const MeasureName = styled.div`
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #838383;
  margin-top: 20px;
  width: 100%;
`;
export const MeasureNamebox = styled.div`
  display: flex;
  width: 100%;
  margin-left: 70px;
  justify-content: center;
  align-items: center;
`;
export const CurvedRectangle3 = styled.div`
  /*메모*/
  width: 180px;
  height: 20px;
  border: 1px solid #efefef;
  border-radius: 16px;
  padding: 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #efefef;
`;
export const MeasureArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: "SUIT Variable", sans-serif;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  padding: 5px; /* 기본 패딩 추가 */
  margin: 0; /* 기존 margin 제거 */
  box-sizing: border-box;
`;
export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #0075ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
export const SearchIconBox = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  padding: 0px;
  margin-left: 10px;
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  font-family: "SUIT Variable", sans-serif;
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #0075ff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
