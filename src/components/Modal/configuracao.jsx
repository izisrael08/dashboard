import React from "react";
import "./configuracao.css";

export default function ModalConfiguracao({ onClose }) {
    return(
        <div className="modal-config-overlay">
            <div className="modal-config-content">
                <div className="modal-config-header">
                    <h2 className="modal-config-title">Configurações</h2>
                    <button 
                        className="modal-config-close"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                
                <div className="modal-config-body">
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
                
                <div className="modal-config-footer">
                    <button
                        onClick={onClose}
                        className="modal-config-btn modal-config-btn-secondary"
                    >
                        Cancelar
                    </button>
                    <button
                        className="modal-config-btn modal-config-btn-primary"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}