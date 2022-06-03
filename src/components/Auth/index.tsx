import { useState, createContext, useContext, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface AuthData {
  token: string,
};

interface AuthContextProvider {
  token: string,
  onLogin: Function,
  onLogout: Function,
  onUpdate: Function,
};

const AuthContext = createContext<AuthContextProvider>({} as AuthContextProvider);

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  useEffect(() => {
    if (cookies.jwt && !token) {
      setToken(cookies.jwt);
    }
  }, [cookies, token])

  // navigate when token updates
  useEffect(() => {
    navigate(location.pathname); // eslint-disable-next-line
  }, [token]);

  const handleLogin = (data: AuthData): void => {
    setToken(data.token);
    localStorage.setItem('token', data.token);
  };

  const handleLogout = (): void => {
    setToken('');
    removeCookie('jwt');
    localStorage.removeItem('token');
  };

  const handleUpdate = (): void => {
    
  };

  const value: AuthContextProvider = {
    token,
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
