import styled from "styled-components";
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 86px;
  gap: 35px;
`;

export const Menu = styled.div`
  width: fit-content;
  white-space: nowrap;
  display: flex;
  position: relative;
  align-items: center;
  /* padding: 10px 15px; */
  font-weight: ${(props) => (props.selected ? "800" : "700")};
  font-size: ${(props) => (props.selected ? "32px" : "24px")};
  cursor: pointer; /* 클릭 시 커서 모양 변경 */
  color: ${(props) =>
    props.selected
      ? "#000000"
      : "#838383"}; /* 선택된 카테고리는 검은 글씨, 다른 카테고리는 회색 글씨 */
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #0276fe;
    opacity: 0.3;
    bottom: 0px;
    display: ${(props) => (props.selected ? "block" : "none")};
  }
`;
