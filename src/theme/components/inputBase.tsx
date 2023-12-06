export const MuiInputBase = {
  variants: [
    {
      props: { size: 'medium' },
      style: {
        input: {
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          fontSize: '0.812rem',
          height: '1.386em',
        },
      },
    },
    {
      props: { size: 'small' },
      style: {
        input: {
          fontSize: '0.812rem',
        },
      },
    },
  ] as any[],
};
