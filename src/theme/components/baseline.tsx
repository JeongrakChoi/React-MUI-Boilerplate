export const MuiCssBaseline = {
  styleOverrides: {
    body: {
      fontWeight: '400',
    },
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    '*:disabled': {
      svg: {
        opacity: 0.3,
      },
    },
  },
};
