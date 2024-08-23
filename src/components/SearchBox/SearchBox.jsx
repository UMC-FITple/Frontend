import React from "react";
import { Container, SearchIconBox, SearchInputBox } from "./SearchBox.style";
import { useNavigate } from "react-router-dom";
const SearchBox = ({ keyword, setKeyword, src, placeholder, ...props }) => {
  const navigate = useNavigate();
  // enter 눌렀을 때
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      setKeyword(e.target.value);
      navigate(`/search?keyword=${e.target.value}`);
    }
  };
  return (
    <Container>
      <SearchIconBox>
        <img src={src} />
      </SearchIconBox>
      <SearchInputBox
        placeholder={placeholder}
        {...props}
        onKeyDown={(e) => activeEnter(e)}
      />
    </Container>
  );
};

export default SearchBox;
