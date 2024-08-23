import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.$blue ? "#0075FF" : "white")};
  padding: 12px 0px;
  border-bottom: ${(props) => (props.$blue ? "none" : "1px solid #e0e0e0")};
`;

export const NavBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
`;

export const MainBox = styled.div`
  display: flex;
  width: 715px;
`;
export const LogoBox = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 900;
  text-decoration: none;
  margin-right: 84px;
`;
export const LogoImg = styled.img`
  width: auto;
  height: 60px;
`;

export const LogoTitle = styled.p`
  margin-left: 12px;
  color: ${(props) => (props.$blue ? "white" : "black")};
`;
export const LogoItem = styled.div`
  cursor: pointer;
`;
export const MenuBox = styled.div`
  display: ${(props) => (props.$login ? "none" : "flex")};
  font-size: 20px;
  font-weight: 700;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  color: white;
`;

export const MenuItem = styled(Link)`
  color: ${(props) => (props.$active ? "#0276fe" : "black")};
  cursor: pointer;
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? "800" : "700")};
  transform: ${(props) => (props.$active ? "scale(1.2)" : "none")};
  &:hover {
    transform: scale(1.2);
    color: ${(props) => (props.$blue ? "white" : "#0276fe")};
    font-weight: 800;
  }
`;

export const MenuItemWhite = styled(Link)`
  color: ${(props) => (props.$active ? "#FFFFFF" : "black")};
  cursor: pointer;
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? "800" : "700")};
  transform: ${(props) => (props.$active ? "scale(1.2)" : "none")};
  &:hover {
    transform: scale(1.2);
    color: ${(props) => (props.$blue ? "white" : "#0276fe")};
    font-weight: 800;
  }
`;

export const SearchContainer = styled.div`
  display: ${(props) => (props.$login ? "flex" : "none")};
  align-items: center;
`;

export const LoginBTN = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  box-sizing: border-box;
  height: 40px;
  padding: 12px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background-color: #0056b3;
  }
`;
