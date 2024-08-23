import { styled, css } from "styled-components";

export const Container = styled.div`
  max-width: 250px;
`;
export const ImgWrap = styled.div`
  position: relative;
`;

export const ItemImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 8px;
  box-shadow: 8px 8px 20px 0px #c9c7c730;
`;

export const HeartImg = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const UserInfo = styled.div`
  display: ${(props) => (props.$user ? "flex" : "none")};
  align-items: center;
  margin-bottom: 8px;
`;
export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const ItemWrap = styled.div`
  font-size: 20px;
`;
export const BrandWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const OptionBox = styled.div`
  width: 230px;
  height: 92px;
  position: absolute;
  right: 10px;
  top: 27px;
  border-radius: 10px;
  box-shadow: 8px 8px 20px 0px #c9c7c730;
  background-color: #efefef;
  display: ${(props) => (props.$active ? "block" : "none")};
  z-index: 100;
`;

export const OptionItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  display: block;
  width: 230px;
  height: 46px;
  padding: 13px 0 13px 36px;
  box-sizing: border-box;
  border-bottom: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
  /* 처음일때 */
  ${(props) =>
    props.$first &&
    css`
      border-radius: 10px 10px 0 0;
    `}
  /* 마지막일때 */
  ${(props) =>
    props.$last &&
    css`
      border-bottom: "1px solid #d9d9d9";
      border-radius: 0 0 10px 10px;
    `}
`;

export const Brand = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const OptionImg = styled.img`
  width: 5px;
  height: 19px;
`;

export const OptionBTN = styled.button`
  display: ${(props) => (props.$main ? "block" : "none")};
  padding: 0 10px;
  cursor: pointer;
  background: none;
  border: none;
`;

export const ItemName = styled.p`
  max-height: 40px;
  font-weight: 800;
  margin-bottom: 4px;

  /* 2줄 넘어가면 ...으로표시 */
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
export const Size = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SizeWrap = styled.div`
  display: flex;
`;
