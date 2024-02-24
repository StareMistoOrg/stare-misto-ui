import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import { Footer, Header, SideBar } from '../components';
import GlobalStyles from '../styles/Global';
import SidebarProvider from '../store/sidebar-context';

const Layout: React.FC = () => (
  <SidebarProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SideBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  </SidebarProvider>
);

export default Layout;
