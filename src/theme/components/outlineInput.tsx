export const MuiOutlinedInput = {
  styleOverrides: {
    notchedOutline: ({ theme }: { theme: import('@mui/system').Theme }) => ({
      borderColor: theme.palette.border.inputBorder,
    }),
  },
};
