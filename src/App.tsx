import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './assets/themes/themes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostForm from './components/post/PostForm';

const StyledApp = styled.div`
  background: ${(props) => props.theme.custom.background};
  color: ${(props) => props.theme.custom.font};
`;

const App = () => {
  const [theme, setTheme] = useState((JSON.parse(localStorage.getItem('dark') || '')) ? darkTheme : lightTheme);
  
  const toggleTheme = () => {
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
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <Header toggleTheme={toggleTheme} dark={(theme === darkTheme)} />
            <Routes>
              <Route path='/' element={<PostForm />} />
            </Routes>
            <Footer />
          </StyledApp>
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
