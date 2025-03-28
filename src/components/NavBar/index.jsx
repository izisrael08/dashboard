import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import Avatar from "./assets/avatar.svg";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const profileContainerRef = useRef(null);
  const profileIconRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Não fecha se clicar no ícone ou no menu
      if (
        !profileContainerRef.current?.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
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
        <i className="fa fa-search"></i>
      </div>
      <div className="profile-container" ref={profileContainerRef}>
        <div
          className="profile-icon"
          onClick={toggleMenu}
          ref={profileIconRef}
        >
          <img src={Avatar} alt="Perfil" className="profile-photo" />
        </div>
        {menuVisible && (
  <ul className="profile-details" ref={menuRef}>
    <li className="profile-item">
      <span>Nome da Pessoa</span>
    </li>
    <li className="profile-item profile-item-email">
      <span>email@example.com</span> {/* Substitua pelo email dinâmico */}
    </li>
    {/* <li className="profile-item profile-item-settings">
      <span>Configurações</span>
    </li>
    <li className="profile-item profile-item-help">
      <span>Ajuda</span>
    </li> */}
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