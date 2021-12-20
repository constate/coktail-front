import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  margin: 0 auto;
  height: 120px;
  display: block;
  width: 100%;
  height: 120px;
  background-color: #2a2a2a;
  text-align: center;
  font-family: "GowunDodum-Regular";
  color: #fff;
  font-size: 15px;
  padding-top: 20px;
`;

const FooterComponent = () => {
  return (
    <FooterWrap>
      만든사람
      <p>김성현</p>
      <p>표정문</p>
      <p>남원우</p>
    </FooterWrap>
  );
};

export default FooterComponent;
