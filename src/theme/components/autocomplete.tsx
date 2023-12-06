export const MuiAutocomplete = {
  styleOverrides: {
    listbox: ({ theme }: { theme: import('@mui/system').Theme }) => ({
      padding: '0.187rem 0 0.5rem',
      '.MuiAutocomplete-option': {
        marginTop: '0.312rem',
        padding: '0 0.75rem',
        '&.Mui-focused, &[aria-selected="true"].Mui-focused': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    }),
    paper: {
      fontSize: '0.812rem',
      fontWeight: '400',
      lineHeight: '1.312rem',
      borderRadius: 0,
      border: '1px solid #262626',
      '.MuiAutocomplete-noOptions, .MuiAutocomplete-loading': {
        color: '#fff',
        padding: '0.187rem 0.75rem',
      },
    },
  },
};
