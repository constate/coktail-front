import React from "react";
import MainContainer from "../containers/main/MainContainer";
const MainPage = ({ coktailData, setItemId, randomCoktail }) => {
  return (
    <>
      <MainContainer
        coktailData={coktailData}
        setItemId={setItemId}
        randomCoktail={randomCoktail}
      />
    </>
  );
};

export default MainPage;
