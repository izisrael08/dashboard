import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
import Configure from "../pages/configuracaoes/configure";

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

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/painel"
        element={
          isAuthenticated ? (
            <div className="app-container">
              <SideBar setIsModalOpen={setIsModalOpen} />
              <div className="main-content">
                <Navbar />
                <Painel />
                {/* Modal de Configurações */}
                <Configure isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">Configurações</h2>
    <div className="border-t border-gray-200 pt-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tema</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Claro</option>
            <option>Escuro</option>
            <option>Sistema</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Idioma</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Português</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
        
        <div className="flex items-center">
          <input
            id="notifications"
            name="notifications"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
            Receber notificações
          </label>
        </div>
      </div>
    </div>
  </div>
</Configure>
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;