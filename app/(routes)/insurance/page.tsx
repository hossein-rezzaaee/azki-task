'use client';

import { Box } from '@mui/material';
import InsuranceCard from '_components/cards/insurance';
import Title from '_components/title';

const INSURANCES = [
  {
    name: 'شخص ثالث',
    active: true,
    link: '/third',
  },
  {
    name: 'بدنه',
    active: false,
    link: '/body',
  },
];

export default function Insurance() {
  return (
    <Box>
      <Title>انتخاب بیمه</Title>
      <Box display={'flex'} gap={2} flexWrap={'wrap'}>
        {INSURANCES.map((item) => (
          <InsuranceCard key={item.name} {...item} />
        ))}
      </Box>
    </Box>
  );
}
