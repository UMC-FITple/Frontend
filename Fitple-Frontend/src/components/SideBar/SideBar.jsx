import { Menu, SideBarContainer } from "./SideBar.style";
import { useState } from "react";

// 카테고리 이름과 ID를 매핑
const categories = [
  { id: undefined, name: "전체" }, // 전체 선택 시 category 파라미터 없이 요청
  { id: 1, name: "아우터" },
  { id: 2, name: "상의" },
  { id: 3, name: "바지" },
  { id: 4, name: "스커트" },
  { id: 5, name: "원피스" },
  { id: 6, name: "신발" },
];

const SideBar = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    setCategory(category.id);
  };

  return (
    <SideBarContainer>
      {categories.map((category, index) => (
        <Menu
          key={index}
          selected={selectedCategory === category.name}
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </Menu>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
