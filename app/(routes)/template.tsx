'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import Header from '_components/header';

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box p={{ xs: 3, lg: 5 }} minHeight={'100vh'} position={'relative'}>
      <Box
        sx={{
          width: { xs: 1, lg: 1 / 3 },
          height: { xs: 100, lg: '100%' },
          bottom: 0,
          right: 0,
          position: 'fixed',
          bgcolor: '#fffbeb',
          zIndex: -1,
        }}
      >
        <Box zIndex={2} width={1} height={1} position={'relative'}>
          <Box
            sx={{
              width: {
                xs: 6 / 10,
                lg: '175%',
              },
              maxWidth: {
                xs: '350px',
                lg: '800px',
              },
              aspectRatio: '1114/490',
              position: 'absolute',
              bottom: { xs: '70%', lg: '20px' },
              right: 20,
            }}
          >
            <Image src={'/icons/car-green.svg'} alt="icon" fill />
          </Box>
        </Box>
      </Box>
      <Header />
      <Box sx={{ px: { xs: 0, lg: 4 }, width: { xs: 1, lg: 1 / 2 } }}>
        <Box mt={3}>{children}</Box>
      </Box>
    </Box>
  );
}
