import { Button as MuiButton } from '@mui/material';

export default function Button(props: React.ComponentProps<typeof MuiButton>) {
  return (
    <MuiButton
      {...props}
      sx={{ borderRadius: 20, minWidth: 100, ...props?.sx }}
    />
  );
}
