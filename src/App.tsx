import GlobalStyles from './styles/Global';
import Header from './components/Header';
import Projects from './components/Projects';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './components/Sidebar';
import SidebarProvider from './store/sidebar-context';
import Contact from './components/Contact';

const App: React.FC = () => (
  <SidebarProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  </SidebarProvider>
);

export default App;
