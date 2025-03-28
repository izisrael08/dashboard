import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") === "true");

  // Atualiza o estado sempre que o valor do localStorage mudar
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("auth") === "true");
  }, [localStorage.getItem("auth")]); // Atualiza quando o auth mudar no localStorage

  return (
    <Routes>
      {/* Página de Login (página inicial) */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Painel protegido por autenticação */}
      <Route
        path="/painel"
        element={
          isAuthenticated ? (
            <div className="app-container">
              <SideBar />
              <div className="main-content">
                <Navbar />
                <Painel />
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
