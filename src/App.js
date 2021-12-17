import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./libs/styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import NavbarContainer from "./containers/common/NavbarContainer";
import client from "./libs/api/client";

function App() {
  const navigate = useNavigate();
  const [itemId, setItemId] = useState("");
  const [coktailData, setCoktailData] = useState([]);

  useEffect(() => {
    getCoktailData();
  }, []);

  useEffect(() => {
    if (itemId !== "") {
      navigate(`detail/${itemId}`);
    }
  }, [itemId]);

  const getCoktailData = async () => {
    const response = await client.get("/coktail");
    setCoktailData(response.data.dataList);
  };

  return (
    <>
      <NavbarContainer />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<MainPage coktailData={coktailData} setItemId={setItemId} />}
        />
        <Route path="/detail/:id" element={<DetailPage itemId={itemId} />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
