import Logo from "/assets/Logo.svg";
import SearchIcon from "/assets/SearchIcon.svg";
import {
  NavBarBox,
  MenuBox,
  LogoBox,
  MainBox,
  MenuItem,
  SearchContainer,
  Container,
  LogoTitle,
  LogoImg,
  LoginBTN,
  MenuItemWhite,
} from "./Navbar.style";
import SearchBox from "../SearchBox/SearchBox";
import { useLocation } from "react-router-dom";

const Navbar = ({ ...props }) => {
  const location = useLocation();

  return (
    <Container {...props}>
      {/* 전체 Navbar 가운데 정렬 */}
      <NavBarBox>
        {/* 로고 & 메뉴 영역 */}
        <MainBox>
          {/* 로고 */}
          <LogoBox to="/cloth">
            <LogoImg src={Logo} />
            <LogoTitle {...props}>FITple</LogoTitle>
          </LogoBox>
          {/* 메뉴 */}
          <MenuBox {...props}>
            <MenuItem to="/cloth" {...props} $active={location.pathname === "/cloth"}>
              옷장
            </MenuItem>
            <MenuItem to="/recommend" {...props} $active={location.pathname === "/recommend"}>
              추천
            </MenuItem>
            <MenuItemWhite to="/search" {...props} $active={location.pathname === "/search"}>
              검색
            </MenuItemWhite>
            <MenuItem to="/profile" {...props} $active={location.pathname === "/profile"}>
              프로필
            </MenuItem>
          </MenuBox>
        </MainBox>
        {/* search box */}
        <SearchContainer {...props}>
          {/* <SearchBox src={SearchIcon} placeholder={"내 옷 검색하기"} /> */}
          <LoginBTN to="/login">로그인 / 회원가입</LoginBTN>
        </SearchContainer>
      </NavBarBox>
    </Container>
  );
};

export default Navbar;
