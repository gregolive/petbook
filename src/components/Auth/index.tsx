import { useState, createContext, useContext, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

interface AuthData {
  token: string,
};

interface AuthContextProvider {
  token: string,
  authError: string,
  onLogin: Function,
  onLogout: Function,
  onUpdate: Function,
}

const AuthContext = createContext<AuthContextProvider>({} as AuthContextProvider);

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [authError, setAuthError] = useState('');

  // navigate when token updates
  useEffect(() => {
    navigate(location.pathname); // eslint-disable-next-line
  }, [token]);

  const setAuthData = (data: AuthData) => {
    setToken(data.token);
    localStorage.setItem('token', data.token);
  };

  const authRequest = async (username: string, password: string) => {
    const apiURL = 'http://localhost:3001/api/v1/login';
  
    axios.post(apiURL, {
      username,
      password,
    }).then((res) => {
      setAuthData(res.data);
    }, (err) => {
      setAuthError(err.response.data.message.message);
    });
  };

  const handleLogin = async (username: string, password: string) => {
    await authRequest(username, password);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  const handleUpdate = () => {
    
  };

  const value: AuthContextProvider = {
    token,
    authError,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onUpdate: handleUpdate,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

const ProtectedRoute = ({ children }: any) => {
  const { token } = useAuth();
  
  if (!token) {
    return <Navigate to='/welcome' replace />;
  }
  return children;
};

const UnauthenticatedRoute = ({ children }: any) => {
  const { token } = useAuth();
  
  if (token) {
    return <Navigate to='/' replace />;
  }
  return children;
};

export { AuthProvider, useAuth, ProtectedRoute, UnauthenticatedRoute };
