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
import AdminSignInPage from "./pages/AdminSignInPage";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import client from "./libs/api/client";

function App() {
  const navigate = useNavigate();
  const [itemId, setItemId] = useState("");
  const [coktailData, setCoktailData] = useState([]);

  const [isAdminLogined, setIsAdminLogined] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getCoktailData();
  }, []);

  const getCoktailData = async () => {
    const response = await client.get("/coktail");
    setCoktailData(response.data.dataList);
  };

  const randomCoktail = () => {
    const rand = Math.floor(Math.random() * coktailData.length);
    const result = coktailData[rand];
    navigate(`/detail/${result._id}`);
  };

  return (
    <>
      <NavbarContainer />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              coktailData={coktailData}
              setItemId={setItemId}
              randomCoktail={randomCoktail}
            />
          }
        />
        <Route path="/detail/:id" element={<DetailPage itemId={itemId} />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminsignup" element={<AdminSignUpPage />} />
        <Route
          path="/adminsignin"
          element={
            <AdminSignInPage
              setIsAdminLogined={setIsAdminLogined}
              setAdmin={setAdmin}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
