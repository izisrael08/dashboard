import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormCadastro from '../../components/Usuarios/FormCadastro';
import ListaUsuarios from '../../components/Usuarios/ListaUsuarios';
import '../../components/Usuarios/styles/Usuarios.css';

export default function CadastroUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const showToast = (message, type = 'success') => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCadastro = (novoUsuario) => {
    setUsuarios([...usuarios, novoUsuario]);
    showToast('Usuário cadastrado com sucesso!');
  };

  const handleExcluir = (index) => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      const novaLista = [...usuarios];
      novaLista.splice(index, 1);
      setUsuarios(novaLista);
      showToast('Usuário excluído com sucesso!');
    }
  };

  return (
    <div className="usuarios-page">
      <Helmet>
        <title>Cadastro de Usuários | Sistema</title>
      </Helmet>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="container">
        <div className="header">
          <h1 className="title">Cadastrar usuário</h1>
        </div>

        <FormCadastro onCadastroSuccess={handleCadastro} />
        
        <div className="lista-container">
          <ListaUsuarios 
            usuarios={usuarios} 
            onExcluir={handleExcluir}
          />
        </div>
      </div>
    </div>
  );
}