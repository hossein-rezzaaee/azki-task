import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type TInsuranceCardProps = {
  name: string;
  active: boolean;
  link: string;
};

export default function InsuranceCard({
  active,
  name,
  link,
}: TInsuranceCardProps) {
  const { push } = useRouter();
  return (
    <Box
      width={100}
      height={100}
      borderRadius={'10px'}
      border={'1px solid #ccc'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        opacity: active ? 1 : 0.5,
        bgcolor: active ? '#fff' : '#ccc',
        cursor: active ? 'pointer' : 'not-allowed',
      }}
      onClick={() => active && push(`/insurance${link}`)}
      gap={1}
    >
      <Image src={'/icons/insurance.svg'} alt="icon" height={40} width={40} />

      <Typography>{name}</Typography>
    </Box>
  );
}
