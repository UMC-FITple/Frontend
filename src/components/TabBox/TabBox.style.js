import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  /* 드레그 막기 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const TabMenu = styled.div`
  cursor: pointer;
  height: 96px;
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: ${(props) => (props.$isCenter ? "1px solid #D9D9D9" : "none")};
  border-right: ${(props) => (props.$isCenter ? "1px solid #D9D9D9" : "none")};
  border-bottom: ${(props) => (props.selected ? "none" : "1px solid #D9D9D9")};
`;
export const TabItem = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TabText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#0276FE" : "#838383")};
`;
