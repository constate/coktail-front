import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DetailBlock = styled.div`
  background: pink;
  height: calc(100vh - 6rem);
`;

const DetailComponent = ({ data }) => {
  const { _id, coktailName, cocktailContent } = data;
  console.log(data);
  return (
    <DetailBlock>
      <div>{coktailName}</div>
    </DetailBlock>
  );
};

export default DetailComponent;
