export const MuiMenu = {
  styleOverrides: {
    paper: ({ theme }: { theme: import('@mui/system').Theme }) => ({
      border: '1px solid #262626',
      borderRadius: 0,
      ul: {
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
      },
      li: {
        padding: '0 0.75rem',
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        },
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        '& + li': {
          marginTop: '0.312rem',
        },
      },
    }),
  },
};
