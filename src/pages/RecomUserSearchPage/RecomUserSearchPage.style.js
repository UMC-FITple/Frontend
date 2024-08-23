import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  gap: 42px;
`;

export const Blur = styled.div`
  width: 100%;
  height: 541px;
  position: absolute;
  top: -430px;
  background-color: #0075ff;
  filter: blur(75px);
  z-index: -1;
`;

export const Title = styled.div`
  margin-top: 186px;
  font-size: 40px;
  font-weight: 800;
  color: #0276fe;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #838383;
`;
export const Back = styled.img`
  position: absolute;
  top: 47px;
  left: 54px;
  width: 22px;
  height: auto;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInputBox = styled.input`
  width: 690px;
  height: 61px;
  box-sizing: border-box;
  border-width: 3px;
  border-radius: 30px;
  font-size: 25px;
  font-weight: 500;
  line-height: 36.2px;
  padding-left: 32px;
  margin-left: 12px;
`;

export const SearchBox = styled.div`
  width: 1108px;
  display: flex;
  flex-wrap: wrap;

  padding: 0 74px;
  gap: 36px;
`;
