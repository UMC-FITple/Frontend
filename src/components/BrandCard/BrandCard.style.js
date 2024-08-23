import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 317px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  box-shadow: 8px 8px 20px rgba(201, 199, 199, 0.19);
  background-color: #fff;
  cursor: pointer;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const TitleWrap = styled.div`
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #838383;
`;

export const Arrow = styled.p`
  color: #838383;
  font-size: 28px;
  font-weight: 700;
`;
