import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 100px 5%;
`;

export const RightWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
`;

export const LeftWrap = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    gap:10px;
    width:550px;
`

export const SWrap = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-between;
`;

export const Wrap = styled.div`
    padding-bottom: 11px;
    width: 100%;
    display: flex;
    gap:100px;
    justify-content: center;
    font-size: 25px;
`;
export const LineWrap = styled.div`
    padding-bottom: 11px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
`

export const Root = styled.h3`
    font-size: 25px;
`;

export const ImgWrap = styled.div`
    position:relative;
    width:550px;
    height:550px;
    border-radius:20px;
`



export const Like = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 36px;
    right: 36px;
`;

export const SubImgWrap = styled.div`
    width: 550px;
    overflow-x: auto;
    display: flex;
    gap: 5px;
`;

export const ImgItem = styled.img`
    width: 120px;
    height: 120px;
`;

export const Rate = styled.div`
    display: flex;
    
    gap: 10px;
`;

export const Bookmark = styled.img`
    width: 50px;
    height: 50px;
`;

export const Item = styled.div`
    font-size: 24px;
`;

export const Brand = styled.div`
    font-size:32px;
    font-weight:700;
`
export const Product = styled.div`
    font-size:40px;
    font-weight:800;
`

export const Table = styled.table`
    width: 478px;
    border-collapse: collapse;
`;

export const Th = styled.th`
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    background-color: #f4f4f4;
`;

export const Td = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

export const Highlight = styled.div`
    color: #838383;
`;

export const MemoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MemoBox = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid black;
    border-radius: 16px;
    padding: 10px 17px;
    box-sizing: border-box;
`;
