import React from "react";

const Configure = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1050,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
    content: {
      backgroundColor: 'white',
      borderRadius: '0.3rem',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      border: 'none',
      outline: 0,
    },
    header: {
      padding: '1rem',
      borderBottom: '1px solid #dee2e6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    body: {
      padding: '1rem',
      flex: '1 1 auto',
      overflowY: 'auto',
      maxHeight: '70vh',
    },
    footer: {
      padding: '1rem',
      borderTop: '1px solid #dee2e6',
      display: 'flex',
      justifyContent: 'flex-end',
    }
  };

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
        <div style={modalStyles.header}>
          <h5 style={{ margin: 0, fontSize: '1.25rem' }}>Configurações</h5>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              opacity: '0.5',
              padding: '0.25rem',
            }}
          >
            &times;
          </button>
        </div>
        <div style={modalStyles.body}>
          {children}
        </div>
        <div style={modalStyles.footer}>
          <button
            onClick={onClose}
            style={{
              padding: '0.375rem 0.75rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configure;