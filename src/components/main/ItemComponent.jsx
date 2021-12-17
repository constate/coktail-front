import React from "react";
import styled from "styled-components";

const CoktailItem = styled.div`
  width: 175px;
  height: 185px;
  margin: 0.5rem;
  background-size: cover;
  background-image: ${(props) =>
    props.imgURL
      ? `url(${props.imgURL})`
      : `url("https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1639733002599.png")`};
`;

const ItemComponent = ({ data, onClickItem }) => {
  const { coktailName, sour, _id, imgURL } = data;
  console.log(imgURL);
  return <CoktailItem imgURL={imgURL}>{coktailName}</CoktailItem>;
};

export default ItemComponent;
