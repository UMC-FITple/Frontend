import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
`;

export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SecondContainer = styled.div``;
export const SearchBarWrap = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
`;
export const ProductItem = styled.div`
  width: 250px;
  height: 250px;
  top: 50px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 10px;
`;
export const ProductBrand = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border-color: gray;
  background-color: #d9d9d9;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Imgcontainer = styled.div`
  display: flex;
  position: relative;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px; /* 하단 여백 */
`;

export const ProductDetail = styled.div`
  font-size: 18px;
  color: #666;
`;
export const ProductContainer = styled.div`
  display: flex; /* flexbox 레이아웃 사용 */
  flex-wrap: wrap; /* 여러 줄로 나열 가능 */
  justify-content: flex-start; /* 아이템 사이 공간 최대한 활용 */
  width: 90%;
  margin-bottom: auto;

  overflow: hidden;
`;

export const Parent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 140px;
`;

export const FilledHeart = styled.div`
  background: url(assets/filledheart.svg);
  position: absolute;
  top: 20px;
  right: 15px;
  width: 33.33px;
  height: 30.58px;
  z-index: 1;
`;
export const SideBarWrap = styled.div`
  margin-right: 110px;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
`;
export const ItemListWrap = styled.div`
  width: 1096px;
  margin-bottom: 100px;
`;

export const PLUSbutton = styled.div`
  background: url(assets/plus.svg);
  position: fixed;
  width: 97px;
  height: 97px;
  right: 100px;
  top: 500px;
  cursor: pointer;
`;
//수정하기
export const EditButtons = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  display: ${(props) => (props.isEdit ? "flex" : "none")};
  z-index: 1;
`;
export const EditButton = styled.button`
  padding: 10px 40px;
  border: 1px solid #000000;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  font-family: "SUIT Variable", sans-serif;
  border-radius: 10px;
  background-color: #efefef;
  cursor: pointer;
  &:hover {
    background-color: #626262;
  }
`;
export const ClothdebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;

  margin-left: 180px;
  margin-top: 210px;
`;
export const Clothdebar = styled.div`
  //옷 이름 옆 점 세개(추가,수정나오는칸)
  background: url(assets/detailbar.svg);
  width: 7px;
  height: 7px;
  margin-bottom: 3px;
`;
export const LoadMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
  background-color: #f5f5f5;
  cursor: pointer;
`;
//검색창 만들기

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
export const SearchImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
`;
export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #838383;
  border-radius: 30px;
  font-size: 16px;
  padding-left: 62px;
  color: #000000;
`;

export const SerchTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
`;
export const SerchTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  font-family: "SUIT Variable", sans-serif;
  color: #0276fe;
`;
export const SerchTitle2 = styled.div`
  font-size: 24px;
  font-weight: 800;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
`;
