import { useState } from "react";
import { Container, Items, UnderLine } from "./FeedNav.style";
function FeedNav({ onCategoryClick, selectedCategory }) {
  const categories = ["전체", "아우터", "상의", "바지", "스커트", "원피스", "신발"];

  const handleClick = (category) => {
    onCategoryClick(category);
  };

  return (
    <Container>
      {categories.map((category) => (
        <Items 
          key={category} 
          onClick={() => handleClick(category)} 
          style={{ 
            fontSize: selectedCategory === category ? "32px" : "24px", 
            fontWeight: selectedCategory === category ? "800" : "bold" 
          }}
        >
          {category}
          <UnderLine style={{ opacity: selectedCategory === category ? 1 : 0 }} />
        </Items>
      ))}
    </Container>
  );
}
export default FeedNav;
