import React from 'react';
import GlobalStyles from '../src/ui/Global';
import Header from './components/Header';
import Projects from './components/Projects';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Hero />
    <Projects />
    <Footer />
  </ThemeProvider>
);

export default App;
