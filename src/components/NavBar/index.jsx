import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import Avatar from "./assets/avatar.svg";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false); // Controle do menu
  const menuRef = useRef(null); // Referência para o menu de perfil

  const navigate = useNavigate(); // Usar para redirecionamento

  const handleLogout = () => {
    localStorage.removeItem("auth"); // Remover a autenticação do localStorage
    navigate("/login"); // Redirecionar para a página de login
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Alternar a visibilidade do menu
  };

  // Fechar o menu se o clique for fora do menu ou da foto de perfil
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Painel
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            Sobre
          </a>
        </li>
      </ul>
      <div className="navbar-input-container">
        <input
          type="text"
          className="navbar-input"
          placeholder="Pesquisar..."
        />
        <i className="fa fa-search"></i> {/* Ícone de pesquisa */}
      </div>
      <div className="profile-container">
        <div
          className="profile-icon"
          onClick={toggleMenu} // Toggle menu ao clicar na foto de perfil
        >
          <img src={Avatar} alt="Perfil" className="profile-photo" />
        </div>
        {menuVisible && (
          <ul className="profile-details" ref={menuRef}>
            <li className="profile-item">
              <span>Nome da Pessoa</span>
            </li>
            <li className="profile-item">
              <button className="profile-sair" onClick={handleLogout}>
                Sair
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
