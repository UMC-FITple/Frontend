import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  flex-direction: column;
  width: 430px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  margin-left: 450px;
`;
export const TitleContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Xiconbox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-left: 110px;
  cursor: pointer;
`;
export const SearchBox = styled.div`
  height: 61px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 20px;
`;
export const SearchInputBox = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  border: 4px solid #838383;
  border-radius: 30px;
  padding-left: 20px;
  color: #838383;
  outline: none;
  box-shadow: 0px 1px 3px #0000001a, 0px 5px 5px #00000017,
    0px 11px 6px #0000000d, 0px 19px 8px #00000003, 0px 29px 8px #00000000;
`;

export const SearchIconBox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  padding: 0px;
  right: 20px;
`;
//브랜드검색글씨
export const Searchtitle = styled.div`
  align-items: center;
  font-size: 24px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 700;
  color: #0276fe;
  margin-left: 30px;
`;
