import { useState } from "react";
import EditContext from "../EditContext";

const EditProvider = ({ children }) => {
  const [editInfo, setEditInfo] = useState({
    coktailName: "",
    sweet: 1,
    sour: 5,
    bitter: 5,
    alcoholDegree: 80,
    kind: ["소주", "맥주"],
    perifume: ["레몬"],
    cocktailContent: "",
    imgURL: "",
  });
  return (
    <EditContext.Provider
      value={{
        editInfo,
        setEditInfo,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
