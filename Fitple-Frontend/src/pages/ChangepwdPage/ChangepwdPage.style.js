import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PWDContainer = styled.form`
  width: 1000px;
  height: 416px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #838383;
  border-radius: 20px;
`;
export const EditBox = styled.div`
  width: 920px;
  height: 205px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
`;

export const SaveBTN = styled.button`
  width: 920px;
  height: 71px;
  border-radius: 10px;
  color: white;
  background-color: #0276fe;
  font-size: 20px;
  font-weight: 700;
  border: none;
`;

export const SubTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #0276fe;
  margin-bottom: 4px;
`;

export const InputPWD = styled.input`
  height: 71px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
  border-radius: 10px;
  border: 1px solid #838383;
  padding-left: 24px;
  color: #838383;
`;

export const LogoImg = styled.img`
  width: fit-content;
  height: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
`;
