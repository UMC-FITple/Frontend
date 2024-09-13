import { styled } from "styled-components";

export const Container = styled.div``;
export const FirstContainer = styled.div`
  background-color: #d9d9d9;
  margin-bottom: 8px;
  border-radius: 20px;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* 1:1 비율로 설정 */
  object-fit: cover; /* 이미지를 잘라서 비율을 유지 */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UploadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const UploadIcon = styled.img`
  height: 75px;
  width: 75px;
`;
export const UploadText = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
  text-decoration: underline;
`;
export const UploadImg = styled.img`
  background-color: #d9d9d9;
  margin-bottom: 8px;
  border-radius: 20px;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* 1:1 비율로 설정 */
  object-fit: cover; /* 이미지를 잘라서 비율을 유지 */
`;
export const SecondContainer = styled.div``;
export const ProductDeImagemin = styled.img`
  min-width: 20%;
  height: auto;
  aspect-ratio: 1 / 1; /* 1:1 비율로 설정 */
  object-fit: cover; /* 이미지를 잘라서 비율을 유지 */
  overflow-x: scroll;
  border-radius: 0.625rem;
  margin-bottom: 0.625rem;
  background-color: #efefef;
`;
export const ImgContainer = styled.div`
  margin-bottom: 8px;
  gap: 3%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 0.3125rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
