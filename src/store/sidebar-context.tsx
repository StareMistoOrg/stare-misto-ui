import { ReactNode, createContext, useReducer } from 'react';

interface SidebarState {
  open: boolean;
}

interface Action {
  type: string;
}

interface SidebarContextProps {
  open: boolean;
  handleTriggerSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  handleTriggerSidebar: () => {},
});

function sidebarReducer(state: SidebarState, action: Action) {
  if (action.type === 'TRIGGER_SIDEBAR') {
    return {
      open: !state.open,
    };
  }

  return state;
}

interface SidebarProviderProps {
  children: ReactNode;
}

const initialState: SidebarState = {
  open: false,
};

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarState, sidebarDispatch] = useReducer(sidebarReducer, initialState);

  const handleTriggerSidebar = () => {
    sidebarDispatch({ type: 'TRIGGER_SIDEBAR' });
  };

  const ctxSidebar: SidebarContextProps = {
    open: sidebarState?.open,
    handleTriggerSidebar: handleTriggerSidebar,
  };

  return <SidebarContext.Provider value={ctxSidebar}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
