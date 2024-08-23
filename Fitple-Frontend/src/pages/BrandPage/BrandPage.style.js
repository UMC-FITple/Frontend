import styled from "styled-components";
export const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 69px;
`;
export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 31px 0 50px 0;
`;
export const InputBox = styled.input`
  font-family: "SUIT-Regular";
  width: 436px;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0 12px 50px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  outline: none;
`;
export const PlaceholderText = styled.div`
  position: absolute;
  display: flex;
  left: 50px;
  font-size: 16px;
  font-weight: 500;
  pointer-events: none;
`;

export const BlueText = styled.p`
  color: #0276fe;
  font-weight: 800;
`;

export const IconImg = styled.img`
  position: absolute;
  left: 16px;
`;
export const ItemContainer = styled.div`
  box-shadow: 8px -8px 20px 0px #c9c7c730;
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: center;
  padding-top: 56px;
`;
export const Wrap = styled.div``;

export const SubMenuWrap = styled.div`
  display: flex;
  width: 562px;
  justify-content: space-between;
  /* 드레그 막기 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SubMenuItem = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #838383;
  cursor: pointer;
  &:hover {
    font-weight: 800;
    color: #0276fe;
  }
`;

export const ItemWrap = styled.div`
  margin-top: 48px;
`;

export const NonWrap = styled.div`
  padding: 152px 0;
  width: 1096px;
  display: flex;
  justify-content: center;
`;
export const RegisterBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegisterText = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

export const RegisterBTN = styled.button`
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-radius: 40px;
  margin-top: 24px;
  padding: 20px 62px;
  background-color: #0276fe;
  border: none;
  font-family: "";
  width: fit-content;
`;
