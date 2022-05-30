import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './assets/themes/themes';
import { AuthProvider, ProtectedRoute, UnauthenticatedRoute } from './components/Auth';
import Header from './components/Header';
import Welcome from './components/Welcome';
import PostFeed from './components/Post/Feed';

const StyledApp = styled.div`
  background: ${(props) => props.theme.custom.background};
  color: ${(props) => props.theme.custom.font};
`;

const App = () => {
  const [theme, setTheme] = useState((JSON.parse(localStorage.getItem('dark') || '')) ? darkTheme : lightTheme);
  
  const toggleTheme = (): void => {
    if (theme === lightTheme) {
      localStorage.setItem('dark', JSON.stringify(true));
      setTheme(darkTheme);
    } else {
      localStorage.setItem('dark', JSON.stringify(false));
      setTheme(lightTheme);
    }
  };
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <StyledApp>
              <Header toggleTheme={toggleTheme} dark={(theme === darkTheme)} />
              <Routes>
                <Route
                  path='/welcome'
                  element={<UnauthenticatedRoute><Welcome /></UnauthenticatedRoute>}
                />
                <Route
                  path='/'
                  element={<ProtectedRoute><PostFeed /></ProtectedRoute>}
                />
              </Routes>
            </StyledApp>
          </ThemeProvider>
        </MuiThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
