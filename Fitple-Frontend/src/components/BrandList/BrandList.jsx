import React from "react";
import { Container } from "./BrandList.style";
import BrandCard from "../BrandCard/BrandCard";

const BrandList = ({ data }) => {
  return (
    <Container>
      {data ? (
        data.map((item, index) => <BrandCard item={item} key={index} />)
      ) : (
        <>
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </>
      )}
    </Container>
  );
};

export default BrandList;
