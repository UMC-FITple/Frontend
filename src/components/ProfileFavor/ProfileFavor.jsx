import React from "react";
import {
  Container,
  ItemListWrap,
  SideBarWrap,
  Wrap,
} from "./ProfileFavor.style";
import SideBar from "../SideBar/SideBar";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";
import { ProfileFavorApi } from "../../../data/ProfileFavorApi";
import { useEffect } from "react";
const ProfileFavor = () => {
  const [category, setCategory] = useState(undefined);
  const [profileFavorData, setProfileFavorData] = useState([]);
  const getProfileClothFavorData = async () => {
    const response = await ProfileFavorApi(category);
    setProfileFavorData(response.result.clothData);
    console.log(response.result.clothData);
  };
  useEffect(() => {
    getProfileClothFavorData();
  }, [category]);
  return (
    <Container>
      <Wrap>
        <SideBarWrap>
          <SideBar setCategory={setCategory} />
        </SideBarWrap>
        <ItemListWrap>
          <ItemList $user data={profileFavorData} />
        </ItemListWrap>
      </Wrap>
    </Container>
  );
};

export default ProfileFavor;
