import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    position:relative;
    box-sizing:border-box;
    width:100%;
    padding: 0 100px;
    padding-bottom:124px;    

`

export const SubTitleWrap = styled.div`
    box-sizing:border-box;
    padding-top:140px;
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const SubTitle = styled.div`
    font-size:24px;
    color:#000;
    font-weight:bold;
    display:flex;

`

export const ShowAll = styled(Link)`
    font-size: 20px;
    color: #838383;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
`;

export const Highlight = styled.div`
    white-space:nowrap;
    color:#0276FE;
`

export const RecomUserWrap = styled.div`
  box-sizing:border-box;
  max-width: 1108px;
  width:100%;
  padding-top: 26px;
  display: flex;
  flex-wrap: wrap; /* 줄바꿈 허용 */
  gap: 36px; /* 카드 사이의 간격 */
  margin:0 auto;
`;

