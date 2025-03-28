import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  BarChart2,
  Users,
  Box,
  ShoppingCart,
  CreditCard,
  Settings,
  HelpCircle,
  Mail,
  ChevronLeft,
  ChevronRight
} from "react-feather";
import LogoFull from "./assets/logoipsum-360.svg";
import LogoMinimized from "./assets/logoMinimizado.svg";
import "./styles/sidebar.css";

const NavItem = ({ icon, text, onClick }) => {
  return (
    <li className="sidebar-item" title={text}>
      <button className="sidebar-button-item" onClick={onClick}>
        {icon}
        <span className="sidebar-text">{text}</span>
      </button>
    </li>
  );
};

const SideBar = ({ email = "israelguedes008@gmail.com", setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("sidebarState");
      return savedState ? JSON.parse(savedState) : true;
    }
    return true;
  });

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem("sidebarState", JSON.stringify(newState));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "sidebarState") {
        setIsOpen(e.newValue ? JSON.parse(e.newValue) : true);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <nav className="h-full flex flex-col">
        <div className="sidebar-header">
          <img
            src={isOpen ? LogoFull : LogoMinimized}
            className="sidebar-logo"
            alt="Logo"
          />
          {/* Botão para recolher/expandir */}
          <button 
            className="sidebar-toggle-button"
            onClick={toggleSidebar}
            aria-label={isOpen ? "Recolher sidebar" : "Expandir sidebar"}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <ul className="sidebar-nav">
          <NavItem icon={<Home size={20} />} href="/" text="Dashboard" />
          <NavItem icon={<BarChart2 size={20} />} text="Statistics" />
          <NavItem 
            icon={<Users size={20} />} 
            text="Usuarios" 
            onClick={() => navigate("/users")} 
          />
          <NavItem icon={<Box size={20} />} text="Inventory" />
          <NavItem icon={<ShoppingCart size={20} />} text="Orders" />
          <NavItem icon={<CreditCard size={20} />} text="Billings" />
        </ul>

        <hr className="sidebar-divider" />

        <ul className="sidebar-nav">
          <NavItem
            icon={<Settings size={20} />}
            text="Settings"
            onClick={() => setIsModalOpen(true)}
          />
          <NavItem icon={<HelpCircle size={20} />} text="Help" />
        </ul>

        <div className="sidebar-footer">
          <div className="sidebar-email-container">
            {isOpen ? <p className="sidebar-email">{email}</p> : <Mail size={20} />}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;