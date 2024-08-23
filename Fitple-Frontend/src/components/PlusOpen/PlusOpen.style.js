import styled from "styled-components";

export const PlusOpenButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 100px;
  right: 50px;
  width: auto;
  height: auto;
  flex-direction: column;
  justify-content: center;
`;
export const PlusOpenButton = styled.button`
  display: flex;
  width: 170px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  font-family: "SUIT Variable", sans-serif;
  border-radius: 10px;
  background-color: #efefef;
  cursor: pointer;
  &:hover {
    background-color: #626262;
  }
`;
