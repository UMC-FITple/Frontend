import React from "react";
import { Container } from "./UserList.style";
import RecomUser from "../RecomUserCard/RecomUserCard";

const UserList = ({ data }) => {
  return (
    <Container>
      {data ? (
        data.map((item, index) => <RecomUser item={item} key={index} />)
      ) : (
        <>
          <RecomUser />
          <RecomUser />
          <RecomUser />
          <RecomUser />
          <RecomUser />
        </>
      )}
    </Container>
  );
};

export default UserList;
