import "./App.css";
import React from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ClothdetailPage from "./pages/ClothdetailPage/ClothdetailPage";
import ClothregisterPage from "./pages/ClothregisterPage/ClothregisterPage";
import ClothmainPage from "./pages/ClothmainPage/ClothmainPage";

import TosPage from "./pages/TosPage/TosPage";
import FindIdPage from "./pages/FindIdPage/FindIdPage";
import FindPwPage from "./pages/FindPwPage/FindPwPage";
import RePwPage from "./pages/RePwPage/RePwPage";
import IdPage from "./pages/IdPage/IdPage";
import PwPage from "./pages/PwPage/PwPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RecomMainPage from "./pages/RecomMainPage/RecomMainPage";
import RecomAllPage from "./pages/RecomAllPage/RecomAllPage";
import RecomUserCloInfomPage from "./pages/RecomUserCloInfomPage/RecomUserCloInfomPage";
import RecomUserFeedPage from "./pages/RecomUserFeedPage/RecomUserFeedPage";
import ClothupdatePage from "./pages/ClothupdatePage/ClothupdatePage";
import RecomUserSearchPage from "./pages/RecomUserSearchPage/RecomUserSearchPage";
import LayoutNonNav from "./layout/LayoutNonNav";
import Layout from "./layout/Layout";
import LayoutNavBlue from "./layout/LayoutNavBlue";
import SearchMainPage from "./pages/SearchMainPage/SearchMainPage";
import BrandPage from "./pages/BrandPage/BrandPage";
import MainPage from "./pages/MainPage/MainPage";
import LayoutMain from "./layout/LayoutMain";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import ChangepwdPage from "./pages/ChangepwdPage/ChangepwdPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import userAuthStore from "../data/store/userAuthStore";
import { getInform } from "../data/ProfileApi";
function App() {
  const location = useLocation();
  const { authenticate, setAuthenticate } = userAuthStore(); // 로그인 되었는지 안되어있는지 확인

  // authenticate가 변경될 때마다 로그 출력
  useEffect(() => {
    console.log("로그인 되어있는가?", authenticate);
  }, [authenticate]); // authenticate가 변경될 때마다 실행

  // 유저정보불러오는 api를 이용해서 api정보를 잘 가지고오면 로그인되어있다고 판단, 아니면 안되어있다고 판단
  useEffect(() => {
    const getAuthenticate = async () => {
      try {
        await getInform();
        setAuthenticate(true);
      } catch (error) {
        setAuthenticate(false);
      }
    };
    getAuthenticate();
  }, [location]);

  // 로그인되어있는지 확인
  const PrivateRoute = React.useCallback(() => {
    return authenticate ? <Outlet /> : <Navigate to="/login" />;
  }, [authenticate]);

  return (
    <>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        {/* Navbar 없는 layout */}
        <Route element={<LayoutNonNav />}>
          {/* 로그인페이지 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 회원가입페이지 */}
          <Route path="/tos" element={<TosPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/userinfo" element={<UserInfoPage />} />
          <Route path="/findid" element={<FindIdPage />} />
          <Route path="/findid/showid" element={<IdPage />} />
          <Route path="/findpw" element={<FindPwPage />} />
          <Route path="/findpw/showpw" element={<PwPage />} />
          <Route path="/repw" element={<RePwPage />} />
        </Route>
        {/* 로그인 확인하기 */}
        <Route element={<PrivateRoute />}>
          {/* Navbar 있는 layout */}
          <Route element={<Layout />}>
            <Route path="/clothes" element={<ClothmainPage />} />
            <Route path="/clothes/:clothId" element={<ClothdetailPage />} />
            <Route path="/clothes/register" element={<ClothregisterPage />} />
            <Route path="/clothupdate/:clothId" element={<ClothupdatePage />} />
            {/* 프로필페이지 */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/profile/edit/repw" element={<ChangepwdPage />} />
            <Route path="/recommend" element={<RecomMainPage />} />
            <Route path="/recommendall" element={<RecomAllPage />} />
            <Route path="/recommendFeed" element={<RecomUserFeedPage />} />
            <Route path="/recommendclo" element={<RecomUserCloInfomPage />} />
            <Route path="/brand/:id" element={<BrandPage />} />
            <Route
              path="/recommendUserSearch"
              element={<RecomUserSearchPage />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
          {/* 파란색 Navbar 있는 layout */}
          <Route element={<LayoutNavBlue />}>
            <Route path="/search" element={<SearchMainPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
