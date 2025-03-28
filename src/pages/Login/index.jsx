import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/painel");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulação de autenticação
      if (email === "admin@example.com" && password === "123456") {
        localStorage.setItem("auth", "true");
        window.dispatchEvent(new Event("storage"));
        navigate("/painel");
      } else {
        throw new Error("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="google-auth-container">
      <div className="google-auth-card">
        <div className="google-logo-wrapper">
          <svg className="google-logo" viewBox="0 0 75 24" width="75" height="24">
            <g fill="#4285F4">
              <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 2.03l2.85-2.76C15.5 1.69 12.85 0 9.24 0 4.23 0 .16 4.04.16 9s4.07 9 9.08 9c4.71 0 7.84-3.31 7.84-7.95 0-.52-.07-1.02-.2-1.48H9.24z"/>
              <path d="M25.16 5.19v3.63h4.44v1.11h-4.44v4.14h-1.32V5.19h1.32z"/>
              <path d="M33.13 14.24c-1.2 0-2.15-.96-2.15-2.15s.96-2.15 2.15-2.15 2.15.96 2.15 2.15-.96 2.15-2.15 2.15zm0-5.52c-1.86 0-3.38 1.51-3.38 3.38s1.51 3.38 3.38 3.38 3.38-1.51 3.38-3.38-1.51-3.38-3.38-3.38z"/>
              <path d="M47.14 9.82v4.32h-1.28V9.82h-1.93V8.7h5.14v1.11h-1.93z"/>
              <path d="M56.24 14.24c-1.2 0-2.15-.96-2.15-2.15s.96-2.15 2.15-2.15 2.15.96 2.15 2.15-.96 2.15-2.15 2.15zm0-5.52c-1.86 0-3.38 1.51-3.38 3.38s1.51 3.38 3.38 3.38 3.38-1.51 3.38-3.38-1.51-3.38-3.38-3.38z"/>
              <path d="M70.84 8.7v5.44h-1.28v-1.28h-3.84v1.28h-1.28V8.7h1.28v1.28h3.84V8.7h1.28z"/>
            </g>
          </svg>
        </div>

        <h1 className="google-auth-title">Fazer login</h1>
        <p className="google-auth-subtitle">Use sua Conta do Google</p>

        <form onSubmit={handleLogin} className="google-auth-form">
          <div className={`google-input-container ${emailFocused ? 'focused' : ''} ${errorMessage && email ? 'error' : ''}`}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
              autoComplete="username"
            />
            <label htmlFor="email" className={email ? 'filled' : ''}>E-mail ou telefone</label>
            {errorMessage && email && (
              <div className="input-error-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
            )}
          </div>

          <div className={`google-input-container ${passwordFocused ? 'focused' : ''} ${errorMessage ? 'error' : ''}`}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required
              autoComplete="current-password"
            />
            <label htmlFor="password" className={password ? 'filled' : ''}>Digite sua senha</label>
            {errorMessage && (
              <div className="input-error-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
            )}
          </div>

          {errorMessage && (
            <div className="google-error-message">
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="google-auth-options">
            <a href="#" className="google-auth-link">Esqueceu seu e-mail?</a>
            <button 
              type="submit" 
              className="google-auth-button"
              disabled={isLoading || !email}
            >
              {isLoading ? (
                <div className="google-spinner"></div>
              ) : 'Avançar'}
            </button>
          </div>
        </form>

        <div className="google-auth-footer">
          <div className="google-language-selector">
            <select>
              <option>Português (Brasil)</option>
              <option>English (United States)</option>
            </select>
          </div>
          <div className="google-footer-links">
            <a href="#" className="google-auth-link">Ajuda</a>
            <a href="#" className="google-auth-link">Privacidade</a>
            <a href="#" className="google-auth-link">Termos</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;