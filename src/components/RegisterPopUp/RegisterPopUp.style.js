import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: column;
  width: 760px;
  height: 280px;
  background-color: white;
  border-radius: 20px;
  top: 150px;
  margin-left: 450px;
`;
export const Text1 = styled.div`
  display: flex;
  justify-content: center;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
  font-size: 24px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
`;
export const Text2 = styled.div`
  display: flex;
  justify-content: center;
  font-family: "SUIT Variable", sans-serif;
  color: #0075ff;
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const Button2 = styled.button`
  width: 100px;
  height: 40px;
  background-color: #0075ff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 20px;
`;
