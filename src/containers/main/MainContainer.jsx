import React, { useEffect, useState } from "react";
import BannerComponent from "../../components/main/BannerComponent";
import ItemComponent from "../../components/main/ItemComponent";
import ItemWrapComponent from "../../components/common/ItemWrapComponent";

const MainContainer = ({ coktailData, setItemId }) => {
  console.log(coktailData);
  const onClickItem = (e) => {
    setItemId(e.target.id);
  };
  return (
    <>
      <BannerComponent />
      <ItemWrapComponent>
        {coktailData.map((data) => {
          return (
            <ItemComponent
              key={data["_id"]}
              data={data}
              setItemId={setItemId}
              onClickItem={onClickItem}
            />
          );
        })}
      </ItemWrapComponent>
      ;
    </>
  );
};

export default MainContainer;
