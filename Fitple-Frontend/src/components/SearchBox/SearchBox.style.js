import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;
export const SearchIconBox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  padding: 0px;
  left: 28px;
`;
export const SearchInputBox = styled.input`
  font-family: "SUIT-Regular";
  background-color: transparent;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  border: 2px solid #0276fe;
  color: black;
  border-radius: 30px;
  padding: 20px 0 20px 67px;
  outline: none;
  box-shadow: 0px 1px 3px #0000001a, 0px 5px 5px #00000017,
    0px 11px 6px #0000000d, 0px 19px 8px #00000003, 0px 29px 8px #00000000;
  &::placeholder {
    color: #838383;
  }

  /* 흰색일때 */
  ${(props) =>
    props.$white &&
    css`
      color: white;
      border: 3px solid white;
      box-shadow: none;
      &::placeholder {
        color: white;
      }
    `}

  /* 회색 일때 */
  ${(props) =>
    props.gray &&
    css`
      border: 3px solid #838383;
      box-shadow: none;
    `}
`;
