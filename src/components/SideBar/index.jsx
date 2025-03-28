import React, { useState, useEffect } from "react";
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
} from "react-feather";
import LogoFull from "./assets/logoipsum-360.svg";
import LogoMinimized from "./assets/logoMinimizado.svg";
import "./sidebar.css";

const NavItem = ({ icon, text }) => {
  return (
    <li className="sidebar-item" title={text}>
      <button className="sidebar-button-item">
        {icon}
        <span className="sidebar-text">{text}</span>
      </button>
    </li>
  );
};

const SideBar = ({ email = "israelguedes008@gmail.com" }) => {
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
            onClick={toggleSidebar} // Logo agora serve como botão de alternância
          />
        </div>

        <ul className="sidebar-nav">
          <NavItem icon={<Home size={20} />} text="Dashboard" />
          <NavItem icon={<BarChart2 size={20} />} text="Statistics" />
          <NavItem icon={<Users size={20} />} text="Users" />
          <NavItem icon={<Box size={20} />} text="Inventory" />
          <NavItem icon={<ShoppingCart size={20} />} text="Orders" />
          <NavItem icon={<CreditCard size={20} />} text="Billings" />
        </ul>

        <hr className="sidebar-divider" />

        <ul className="sidebar-nav">
          <NavItem icon={<Settings size={20} />} text="Settings" />
          <NavItem icon={<HelpCircle size={20} />} text="Help" />
        </ul>

        <div className="sidebar-footer">
          <div className="sidebar-email-container">
            {isOpen ? (
              <p className="sidebar-email">{email}</p>
            ) : (
              <Mail size={20} />
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
