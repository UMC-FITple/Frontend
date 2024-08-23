import styled from "styled-components";

// width props가 없으면 기본 437px
// margin followButton으로 이동
export const Container = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  width: ${(props) => props.width || "437px"};
  padding: 12px 24px;
  border-radius: 50px;
  border: solid 1px #d9d9d9;
  font-size: 16px;
  font-weight: bold;
`;
