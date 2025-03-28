// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Para redirecionamento após login
import "./style.css";

export default function Login() {
  const [username, setUsername] = useState("");  // Estado para o nome de usuário
  const [password, setPassword] = useState("");  // Estado para a senha
  const [errorMessage, setErrorMessage] = useState("");  // Estado para mensagem de erro
  const navigate = useNavigate();  // Hook para navegação após login bem-sucedido

  const handleLogin = (e) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário

    // Aqui você pode adicionar a lógica de autenticação real
    if (username === "admin" && password === "1234") {
      localStorage.setItem("auth", "true");  // Simulação de autenticação
      navigate("/painel");  // Redireciona para o painel
    } else {
      setErrorMessage("Usuário ou senha inválidos!");  // Mensagem de erro
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}
