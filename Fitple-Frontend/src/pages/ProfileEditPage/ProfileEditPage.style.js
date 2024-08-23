import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div``;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const PwdWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PwdEditBox = styled.div`
  width: 55%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid #838383;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 40px 0px;
  align-items: center;
`;

export const MainText = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
`;
export const SubText = styled.p`
  width: auto;
  text-align: left;
  font-size: 17px;
  color: #0276fe;
  font-weight: 550;
`;

export const InputBoxWrap = styled.div`
  margin-bottom: 30px;
`;
export const InputBox = styled.input.attrs((props) => ({
  type: props.type || "text", // 기본값을 'text'로 설정
  id: props.id,
}))`
  width: 100%;
  height: 50px;
  border: 1px solid #838383;
  border-radius: 8px;
  background-color: white;
  padding: 10px 15px;
  font-size: 17px;
  outline-color: #0075ff;
  box-sizing: border-box;
`;
export const EditBTN = styled(Link)`
  text-decoration: none;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 40px;
  border: none;
  background-color: #0075ff;
  color: white;
  cursor: pointer;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;
export const BTNWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SaveBTN = styled.button`
  width: 50%;
  padding: 10px 20px;
  border: 1px solid #838383;
  border-radius: 10px;
  border: none;
  background-color: #0075ff;
  color: white;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
`;

export const SaveBTNWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
