import styled from "styled-components";
//삭제버튼 누를 씨 팝업
export const DeletePopup = styled.div`
  display: flex;
  border: 1px solid #ffffff;
  width: 650px;
  height: 250px;
  border-radius: 20px;
  background-color: white;
  position: absolute;
  right: 420px;
  bottom: 150px;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;
export const DeletePopupText = styled.div`
  align-items: center;
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #000000;
  margin-left: 230px;
`;
export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const DeletePopupBack = styled.button`
  padding: 10px 40px;
  border: 1px solid #d9d9d9;
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  font-family: "SUIT Variable", sans-serif;
  border-radius: 10px;
  background-color: #d9d9d9;
  cursor: pointer;
`;
export const DeletePopupDelete = styled.button`
  padding: 10px 40px;
  border: 1px solid;
  color: white;
  font-size: 16px;
  font-weight: 700;
  font-family: "SUIT Variable", sans-serif;
  border-radius: 10px;
  background-color: #ff004c;
  cursor: pointer;
`;
