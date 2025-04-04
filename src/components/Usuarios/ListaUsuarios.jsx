import { FaEdit, FaTrash } from 'react-icons/fa';

function ListaUsuarios({ usuarios, onExcluir }) {
  if (usuarios.length === 0) {
    return (
      <div className="lista-vazia">
        <p>Nenhum usuário cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="lista-usuarios">
      <h2>Usuários Cadastrados</h2>
      
      <ul className="user-list">
        {usuarios.map((usuario, index) => (
          <li key={index} className="user-item">
            <div className="user-info">
              <div className="user-main-info">
                <span className="user-name">{usuario.nome}</span>
                <span className="user-email">{usuario.email}</span>
              </div>
              {usuario.perfil && (
                <span className={`user-perfil ${
                  usuario.perfil === 'Administrador' ? 'perfil-admin' : 'perfil-padrao'
                }`}>
                  {usuario.perfil}
                </span>
              )}
            </div>
            <div className="user-actions">
              <button 
                className="btn-action btn-edit"
                onClick={() => console.log('Editar', usuario)}
              >
                <FaEdit /> Editar
              </button>
              <button 
                className="btn-action btn-delete"
                onClick={() => onExcluir(index)}
              >
                <FaTrash /> Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaUsuarios;