export const MuiTooltip = {
  styleOverrides: {
    tooltip: ({ theme }: { theme: import('@mui/system').Theme }) => ({
      fontSize: '0.687rem',
      fontWeight: '400',
      background: theme.palette.tooltip.background,
    }),
    arrow: ({ theme }: { theme: import('@mui/system').Theme }) => ({
      color: theme.palette.tooltip.background,
    }),
  },
};
