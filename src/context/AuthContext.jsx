import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email && password) {
      const newUser = { email };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      navigate('/portfolio');
    }
  };

  const signup = (username, email, password) => {
    const newUser = { username, email };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    navigate('/portfolio');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
