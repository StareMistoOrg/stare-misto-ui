import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin:0;
  padding: 0;
  font-family: system-ui, sans-serif;
}

body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-track {
  background-color: ${theme.color.gray900};
}

body::-webkit-scrollbar-thumb {
  background-color: ${theme.color.secondary};
}

body::-webkit-scrollbar-thumb:hover {
  background-color: ${theme.color.primary300};
}
`;
