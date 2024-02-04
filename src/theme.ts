interface ThemeProps {
  color: {
    primary100: string;
    primary300: string;
    primary500: string;
    primary700: string;
    secondary: string;
    gray500: string;
    gray700: string;
    gray800: string;
    gray900: string;
    black: string;
    white: string;
    error: string;
  };
  space: {
    halfunit: string;
    unit: string;
    oneandhalfunits: string;
    twounits: string;
    threeunits: string;
    fourunits: string;
    fiveunits: string;
    sixunits: string;
  };
  size: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    maxwidth: string;
  };
  radius: {
    round: string;
    radius2: string;
    radius4: string;
    radius8: string;
    radius16: string;
  };
  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
}

export const theme: ThemeProps = {
  color: {
    primary100: '#003EB3',
    primary300: '#0074F0',
    primary500: '#14A9FF',
    primary700: '#85DCFF',
    secondary: '#ffdd00',
    gray500: '#D9D9D9',
    gray700: '#999999',
    gray800: '#757575',
    gray900: '#595959',
    black: '#000000',
    white: '#FFFFFF',
    error: '#E34F4F',
  },
  size: {
    xsmall: '16px',
    small: '48px',
    medium: '96px',
    large: '144px',
    xlarge: '192px',
    xxlarge: '288px',
    maxwidth: '1400px',
  },
  radius: {
    round: '50%',
    radius2: '2px',
    radius4: '4px',
    radius8: '8px',
    radius16: '16px',
  },
  space: {
    halfunit: '8px',
    unit: '16px',
    oneandhalfunits: '24px',
    twounits: '32px',
    threeunits: '48px',
    fourunits: '64px',
    fiveunits: '80px',
    sixunits: '96px',
  },
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },
};
