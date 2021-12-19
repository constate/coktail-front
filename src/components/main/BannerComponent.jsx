import React from "react";
import styled from "styled-components";

const BannerBlock = styled.div`
  width: 100%;
  height: 30vh;
  margin-bottom: 20px;
`;

const BannerComponent = ({ onClickBanner }) => {
  return (
    <BannerBlock onClick={onClickBanner}>
      <video
        muted
        autoPlay
        loop
        style={{
          display: "block",
          width: "100%",
          height: "30vh",
          objectFit: "cover",
          opacity: 0.7,
        }}
        onClick={() => {}}
      >
        <source
          // src="https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1639888685646.mp4"
          src="https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1639890619602.mp4"
          type="video/mp4"
        />
      </video>
    </BannerBlock>
  );
};

export default BannerComponent;
