import styled from "styled-components";
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
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  border: 2px solid #0276fe;
  border-radius: 30px;
  padding: 20px 0 20px 67px;
  color: #838383;
  outline: none;
  box-shadow: 0px 1px 3px #0000001a, 0px 5px 5px #00000017,
    0px 11px 6px #0000000d, 0px 19px 8px #00000003, 0px 29px 8px #00000000;
`;
