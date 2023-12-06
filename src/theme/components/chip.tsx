export const MuiChip = {
  styleOverrides: {
    root: {
      borderColor: '#979797',
    },
  },
  variants: [
    {
      props: { size: 'small' },
      style: {
        borderRadius: '4px',
        height: '21px',
      },
    },
    {
      props: { size: 'medium' },
      style: {
        fontSize: '1.125rem',
        lineHeight: '1.6rem',
        borderRadius: '11px',
        height: '22px',
        '.MuiChip-label': {
          padding: '0 1rem',
        },
      },
    },
  ] as any[],
};
