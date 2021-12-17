import React from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ItemWrapComponent = ({ ...rest }) => {
  return <ItemWrap {...rest} />;
};

export default ItemWrapComponent;
