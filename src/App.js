import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/themes/themes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostForm from './components/post/PostForm';

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [theme, setTheme] = useState((JSON.parse(localStorage.getItem('dark'))) ? darkTheme : lightTheme);
  
  const toggleTheme = () => {
    if (theme === lightTheme) {
      localStorage.setItem('dark', true);
      setTheme(darkTheme);
    } else {
      localStorage.setItem('dark', false);
      setTheme(lightTheme);
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header toggleTheme={toggleTheme} dark={(theme === darkTheme)} />
        <PostForm />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
