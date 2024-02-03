import GlobalStyles from '../src/ui/Global';
import Header from './components/Header';
import Projects from './components/Projects';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './components/Sidebar';
import SidebarProvider from './store/sidebar-context';

const App: React.FC = () => (
  <SidebarProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  </SidebarProvider>
);

export default App;
