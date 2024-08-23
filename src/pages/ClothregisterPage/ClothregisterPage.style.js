import styled from "styled-components";

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
export const SS = styled.div`
  font-family: "SUIT";
  font-size: 20px;
  font-weight: bold;
  color: #ff84a9;
`;

export const FullStar = styled.div`
  width: 38px;
  height: 37px;
  background: url(assets/Star8.svg);
`;
export const EmptyStar = styled.div`
  width: 38px;
  height: 37px;
  background: url(assets/Star5.svg);
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
export const ProductDeImage = styled.div`
  width: 400px;
  height: 400px;
  border-color: gray;
  border-radius: 10px;
  background-color: #efefef;
  background-image: url();
  background-position: center;
  background-size: cover;
`;
export const Registerimage = styled.div`
  margin-left: 140px;
  margin-top: 120px;
  width: 105px;
  height: 141px;
  background: url(assets/registerimage.svg);
  cursor: pointer;
`;

export const Imgcontainer = styled.div`
  display: flex;
  width: 400px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-top: 10px;
  &::-webkit-scrollbar {
    width: 7px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
export const ProductDeImagemin = styled.img`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  border-color: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #efefef;
  background-image: url();
  background-position: center;
  background-size: cover;
`;

export const CurvedRectangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 20px;
  border: 1px solid #efefef;
  border-radius: 15px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #efefef;
`;
export const CurvedRectangle2 = styled.div`
  /*메모*/
  width: 400px;
  height: 70px;
  border: 1px solid #efefef;
  border-radius: 15px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: #efefef;
`;
export const NoteArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  margin-left: 30px;
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
export const Detailbox = styled.div`
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: bold;
  color: #000000;
  margin-left: 20px;
`;

export const Toggledown = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #838383;
  transform: rotate(-90deg);
  margin-right: 20px;
  cursor: pointer;
`;
export const DropdownContainer = styled.div`
  position: relative;
  width: 400px;
  left: 260px;
  display: ${(props) => (props.isToggle ? "block" : "none")};
`;
export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  right: 210px;
  background-color: #f8f8f8;
  padding: 0;
  z-index: 1;
`;
export const DropdownItem = styled.li`
  display: flex;
  padding: 1rem 1.5rem;
  width: 370px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Dropdefault = styled.div`
  width: 100%;
  height: 70%;
  font-family: "SUIT";
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
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
  width: 500px;
  height: 50px;
  background-color: #0075ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
`;
export const SearchIconBox = styled.button`
  background: none;
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
