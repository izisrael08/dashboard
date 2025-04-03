import React, { useState, useRef, useEffect } from "react";
import "./configuracao.css";

export default function ModalConfiguracao({ onClose, onThemeChange, onBackgroundChange }) {
  const [settings, setSettings] = useState({
    theme: "light",
    fontSize: "medium",
    fontFamily: "Arial",
    backgroundImage: null,
    previewImage: null
  });

  const fileInputRef = useRef(null);

  // Carrega configurações salvas ao montar o componente
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('panelSettings')) || {};
    setSettings(prev => ({
      ...prev,
      ...savedSettings,
      previewImage: savedSettings.backgroundImage
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));

    // Aplica mudanças imediatamente para pré-visualização
    if (name === 'fontSize' || name === 'fontFamily') {
      document.documentElement.style.setProperty(`--${name}`, value);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSettings(prev => ({
          ...prev,
          previewImage: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBackground = () => {
    setSettings(prev => ({
      ...prev,
      backgroundImage: null,
      previewImage: null
    }));
    fileInputRef.current.value = "";
    onBackgroundChange(null);
  };

  const saveSettings = () => {
    // Salva no localStorage
    localStorage.setItem('panelSettings', JSON.stringify({
      ...settings,
      backgroundImage: settings.previewImage
    }));

    // Aplica o tema
    onThemeChange(settings.theme);
    
    // Aplica o plano de fundo
    if (settings.previewImage) {
      onBackgroundChange(settings.previewImage);
    } else {
      onBackgroundChange(null);
    }

    onClose();
  };

  return (
    <div className="modal-config-overlay">
      <div className="modal-config-content">
        <div className="modal-config-header">
          <h2 className="modal-config-title">Configurações do Painel</h2>
          <button className="modal-config-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="modal-config-body">
          <div className="config-section">
            <h3 className="config-section-title">Aparência</h3>
            
            <div className="config-group">
              <label className="config-label">Tema</label>
              <select 
                name="theme"
                value={settings.theme}
                onChange={handleInputChange}
                className="config-select"
              >
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
              </select>
            </div>
            
            <div className="config-group">
              <label className="config-label">Tamanho da Fonte</label>
              <select 
                name="fontSize"
                value={settings.fontSize}
                onChange={handleInputChange}
                className="config-select"
              >
                <option value="small">Pequeno</option>
                <option value="medium">Médio</option>
                <option value="large">Grande</option>
                <option value="xlarge">Extra Grande</option>
              </select>
            </div>
            
            <div className="config-group">
              <label className="config-label">Fonte</label>
              <select 
                name="fontFamily"
                value={settings.fontFamily}
                onChange={handleInputChange}
                className="config-select"
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Courier New">Courier New</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
            </div>
          </div>
          
          <div className="config-section">
            <h3 className="config-section-title">Plano de Fundo</h3>
            
            <div className="config-group">
              <label className="config-label">Imagem de Fundo</label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className="config-file-input"
              />
            </div>
            
            {settings.previewImage && (
              <div className="preview-container">
                <p className="preview-label">Pré-visualização:</p>
                <img 
                  src={settings.previewImage} 
                  alt="Prévia do plano de fundo" 
                  className="preview-image"
                />
                <button 
                  onClick={removeBackground}
                  className="preview-remove-btn"
                >
                  Remover Imagem
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="modal-config-footer">
          <button
            onClick={onClose}
            className="modal-config-btn modal-config-btn-secondary"
          >
            Cancelar
          </button>
          <button
            onClick={saveSettings}
            className="modal-config-btn modal-config-btn-primary"
          >
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  );
}