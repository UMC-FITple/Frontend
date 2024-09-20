import { css, styled } from "styled-components";

export const Container = styled.div``;

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

export const SearchIconImg = styled.img`
  position: absolute;
  left: 20px;
`;
// *모양
export const SS = styled.span`
  font-weight: bold;
  color: #ff84a9;
`;
export const DropdownContainer = styled.div`
  position: relative;
  display: ${(props) => (props.$isToggle ? "block" : "none")};
`;
export const DropdownList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
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
export const Toggledown = styled.div`
  position: absolute;
  right: 20px;
  font-weight: 500;
  font-size: 28px;
  color: #838383;
  transform: rotate(-90deg);
  cursor: pointer;
`;
export const Detailbox = styled.div``;
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
