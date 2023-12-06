export const MuiButton = {
  styleOverrides: {
    root: {
      fontWeight: '400',
      color: 'rgba(0,0,0,1)',
      backgroundColor: 'rgba(120,120,120,1)',
      boxShadow: 'none',
      '&.Mui-disabled': {
        color: 'rgba(0,0,0,1)',
        borderColor: 'rgba(0,0,0,1)',
      },
    },
  },
  variants: [
    {
      props: { size: 'medium' },
      style: {
        padding: '0.187rem 0.75rem',
        fontSize: '0.812rem',
        lineHeight: '1.25rem',
        borderRadius: '0.875rem',
      },
    },
    {
      props: { size: 'large' },
      style: {
        padding: '0.56rem 0.937rem 0.691rem',
        fontSize: '1rem',
        lineHeight: '1rem',
        borderRadius: '1.187rem',
      },
    },
    {
      props: { color: 'white' },
      style: ({ theme }: { theme: import('@mui/system').Theme }) => ({
        borderColor: theme.palette.common.white,
      }),
    },
  ] as any[],
};
