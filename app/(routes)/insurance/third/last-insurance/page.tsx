'use client';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ButtonSteps from '_components/buttonSteps';
import Select from '_components/select';
import Title from '_components/title';
import { useInquiry } from '_hooks/useInquiry';
import { getInsurances } from '_services';
import { useState } from 'react';

export default function LastInsurance() {
  const [, setInquiry] = useInquiry();

  const { data, isLoading } = useQuery<{ title: string; id: number }[]>({
    queryFn: async () => await getInsurances(),
    queryKey: ['getInsurances'],
  });

  const [lastComp, setLastComp] = useState<string>();

  return (
    <Box>
      <Box>
        <Title>بیمه شخص ثالث</Title>
        <Typography mb={2}>شرکت بیمه گر قبلی خود را وارد کنید</Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box>
            <Box>
              <Select
                label="شرکت بیمه گر قبلی"
                value={lastComp}
                onChange={(v) => {
                  setLastComp(v);
                  setInquiry((p) => ({
                    ...p,
                    last_insurance: v,
                  }));
                }}
                options={data!.map((item) => ({
                  value: item.id,
                  name: item.title,
                }))}
                fullWidth
              />
            </Box>
            <ButtonSteps
              disabledNext={!lastComp}
              nextRoute="/insurance/third/discount-percent"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
