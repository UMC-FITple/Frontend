import React from "react";
import { Container } from "./ItemList.style";
import UserItem from "../UserItem/UserItem";

const ItemList = ({ ...props }) => {
  return (
    <Container>
      {props.data ? (
        props.data.map((item, index) => (
          <UserItem {...props} key={index} item={item} />
        ))
      ) : (
        <>
          {/* profile을 위한 더미데이터 */}
          <UserItem {...props} />
          <UserItem {...props} />
          <UserItem {...props} />
          <UserItem {...props} />
          <UserItem {...props} />
          <UserItem {...props} />
          <UserItem {...props} />
          <UserItem {...props} />
        </>
      )}
    </Container>
  );
};

export default ItemList;
