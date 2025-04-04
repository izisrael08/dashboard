import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

function FormCadastro({ onCadastroSuccess }) {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    login: '',
    perfil: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validação simples
      if (!usuario.nome || !usuario.email || !usuario.senha) {
        throw new Error('Preencha todos os campos obrigatórios');
      }

      onCadastroSuccess(usuario);
      setUsuario({
        nome: '',
        email: '',
        login: '',
        perfil: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-cadastro">
      <div className="form-group mb-3">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          className="form-control"
          placeholder="Digite o nome do usuário"
          value={usuario.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Digite o Email do usuário"
          value={usuario.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="login">Login</label>
        <input
          type="text"
          name="login"
          id="login"
          className="form-control"
          placeholder="Digite o login do usuário"
          value={usuario.login}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="perfil">Perfil</label>
        <select
          name="perfil"
          id="perfil"
          className="form-control"
          value={usuario.perfil}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="Administrador">Administrador</option>
          <option value="Padrao">Padrão</option>
        </select>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          className="form-control"
          placeholder="Digite a senha do usuário"
          value={usuario.senha}
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>


      <div className="form-buttons">
        <button type="submit" className="form-btn form-btn-primary">
          <FaUserPlus className="form-btn-icon" />
          Adicionar Usuário
        </button>
        <a className="form-btn form-btn-secondary" href="/usuarios" role="button">
          Voltar
        </a>
      </div>
    </form>
  );
}

export default FormCadastro;