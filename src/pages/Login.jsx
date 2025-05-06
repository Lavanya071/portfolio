import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css'; // ✅ Add this line

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={() => login(email, password)}>Login</button>
      </div>
    </div>
  );
};

export default Login;
