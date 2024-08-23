import React from "react";
import {
  Container,
  ItemListWrap,
  SideBarWrap,
  Wrap,
} from "./ProfileLove.style";
import SideBar from "../SideBar/SideBar";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";
import { ProfileLoveApi } from "../../../data/ProfileLoveApi";
import { useEffect } from "react";

const ProfileLove = () => {
  const [category, setCategory] = useState(undefined);
  const [profileLoveData, setProfileLoveData] = useState([]);
  const getProfileClothLoveData = async () => {
    const response = await ProfileLoveApi(category);
    setProfileLoveData(response.result.clothData);
  };
  useEffect(() => {
    getProfileClothLoveData();
  }, [category]);
  return (
    <Container>
      <Wrap>
        <SideBarWrap>
          <SideBar setCategory={setCategory} />
        </SideBarWrap>
        <ItemListWrap>
          <ItemList data={profileLoveData} />
        </ItemListWrap>
      </Wrap>
    </Container>
  );
};

export default ProfileLove;
