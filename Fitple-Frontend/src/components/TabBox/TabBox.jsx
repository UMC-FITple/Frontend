import React from "react";
import { Container, TabItem, TabMenu, TabText } from "./TabBox.style";
import LoveClothBlue from "/assets/LoveCloth-blue.svg";
import LoveClothBlack from "/assets/LoveCloth-black.svg";
import FavorClothBlue from "/assets/FavorCloth-blue.svg";
import FavorClothBlack from "/assets/FavorCloth-black.svg";
import MyBodyBlue from "/assets/MyBody-blue.svg";
import MyBodyBlack from "/assets/MyBody-black.svg";

const TabBox = ({ selectItem, setSelectItem }) => {
  const tabData = [
    {
      id: 0,
      content: "좋아하는 옷",
      selectImg: LoveClothBlue,
      deSelectImg: LoveClothBlack,
    },
    {
      id: 1,
      content: "관심있는 옷",
      selectImg: FavorClothBlue,
      deSelectImg: FavorClothBlack,
    },
    {
      id: 2,
      content: "내 체형정보",
      selectImg: MyBodyBlue,
      deSelectImg: MyBodyBlack,
    },
  ];

  const handleItem = (e, idx) => {
    setSelectItem(idx);
  };
  return (
    <Container>
      {tabData.map((item) => (
        // 가운데 이거나 선택된 버튼 css수정
        <TabMenu
          onClick={(e) => handleItem(e, item.id)}
          key={item.id}
          $isCenter={item.id === 1}
          selected={selectItem === item.id}
        >
          <TabItem>
            {selectItem === item.id ? (
              <img src={item.selectImg} />
            ) : (
              <img src={item.deSelectImg} />
            )}

            <TabText selected={selectItem === item.id}>{item.content}</TabText>
          </TabItem>
        </TabMenu>
      ))}
    </Container>
  );
};

export default TabBox;
