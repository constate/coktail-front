import React from "react";
import MainContainer from "../containers/main/MainContainer";
const MainPage = ({ coktailData, setItemId }) => {
  return (
    <>
      <MainContainer coktailData={coktailData} setItemId={setItemId} />
    </>
  );
};

export default MainPage;
