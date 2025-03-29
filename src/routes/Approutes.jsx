import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
import Usuarios from "../pages/Usuarios";
import Faturas from "../pages/Faturas";
import ModalConfiguracao from "../components/Modal/configuracao";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("auth") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Componente de Layout Comum (Navbar + SideBar)
  const Layout = ({ children }) => (
    <div className="app-container">
      <SideBar setIsModalOpen={setIsModalOpen} />
      <div className="main-content">
        <Navbar />
        {children}
        {isModalOpen && <ModalConfiguracao onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Rotas autenticadas */}
      <Route
        path="/painel"
        element={
          isAuthenticated ? (
            <Layout>
              <Painel />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/users"
        element={
          isAuthenticated ? (
            <Layout>
              <Usuarios />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      
      <Route
        path="/faturas"
        element={
          isAuthenticated ? (
            <Layout>
              <Faturas />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;