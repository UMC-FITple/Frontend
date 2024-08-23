import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width:250px;
  cursor: pointer;
`;
export const SetGoodsImg = styled.img`
  width: 250px;
  height: 250px;
  background-color: #d9d9d9;
  border-radius: 20px;
  box-shadow: 8px 8px 20px #c9c7c7;
  object-fit: cover;

`;

export const Brand = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
  overflow: hidden;              // 넘치는 부분 숨기기
  text-overflow: ellipsis;      // 넘치는 부분에 ... 표시
  white-space: nowrap;          // 줄 바꿈 방지
`;
export const GoodsName = styled.h3`
  width:100%;
  font-size: 18px;
  font-weight: 800;
  margin-top: 4px;
  overflow: hidden;              // 넘치는 부분 숨기기
  text-overflow: ellipsis;      // 넘치는 부분에 ... 표시
  white-space: nowrap;          // 줄 바꿈 방지
`;
export const GoodsSize = styled.h3`
  font-size: 186x;
  font-weight: 500;
  color: #838383;
  margin-top: 8px;
`;

export const HeartIcon = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 18px;
  right: 14px;
`;
