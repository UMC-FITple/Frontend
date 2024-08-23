import styled, { css } from "styled-components";
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 42px 0px;
`;
export const ProfileBox = styled.div`
  display: flex;
  position: relative;
`;
export const ClothContainer = styled.div`
  box-shadow: 8px -8px 20px 0px #c9c7c730;
  border-radius: 30px 30px 0 0;
`;

export const OptionBtn = styled.button`
  cursor: pointer;
  height: fit-content;
  width: 30px;
  background: none;
  border: none;
  padding: 0px;
  margin-top: 37px;
  margin-left: 88px;
`;

export const OptionBox = styled.div`
  width: 230px;
  height: 138px;
  position: absolute;
  right: 0;
  top: 66px;
  margin-top: 4px;
  border-radius: 10px;
  box-shadow: 8px 8px 20px 0px #c9c7c730;
  background-color: #efefef;
  display: ${(props) => (props.$active ? "block" : "none")};
`;

export const OptionItem = styled.div`
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

export const OptionItemA = styled.a`
  display: block;
  width: 230px;
  height: 46px;
  padding: 13px 0 13px 36px;
  box-sizing: border-box;
  border-bottom: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;
