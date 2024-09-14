'use client';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Button from '_components/button';
import InquiryModal from '_components/inquiryModal';
import Select from '_components/select';
import Title from '_components/title';
import { useInquiry } from '_hooks/useInquiry';
import { getDiscountPercents } from '_services';
import { useState } from 'react';

export default function DiscountPercent() {
  const [, setInquiry] = useInquiry();

  const { data, isLoading } = useQuery<{ id: number; title: string }[]>({
    queryFn: async () => await getDiscountPercents(),
    queryKey: ['getDiscountPercents'],
  });

  const [thirdPercent, setThirdPercent] = useState<string>();
  const [driverPercent, setDriverPercent] = useState<string>();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Title>بیمه شخص ثالث</Title>
      <Typography mb={2}>درصد تخفیف بیمه ثالث و حوادث را وارد کنید</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <InquiryModal open={open} handleClose={handleClose} />
          <Box>
            <Box>
              <Select
                label="درصد تخفیف ثالث"
                value={thirdPercent}
                onChange={(v) => {
                  setThirdPercent(v);
                  setInquiry((p) => ({
                    ...p,
                    third_discount_percent: v,
                  }));
                }}
                options={data!.map((item) => ({
                  value: item.id,
                  name: item.title,
                }))}
                fullWidth
              />
            </Box>
            <Box mt={2}>
              <Select
                label="درصد تخفیف حوادث"
                value={driverPercent}
                onChange={(v) => {
                  setDriverPercent(v);
                  setInquiry((p) => ({
                    ...p,
                    driver_discount_percent: v,
                  }));
                }}
                options={data!.map((item) => ({
                  value: item.id,
                  name: item.title,
                }))}
                fullWidth
              />
            </Box>
          </Box>
          <Box
            width={1}
            display={'flex'}
            justifyContent={{ xs: 'center', lg: 'flex-end' }}
            mt={3}
          >
            <Button
              disabled={!thirdPercent || !driverPercent}
              onClick={handleClickOpen}
              variant="contained"
              sx={{ bgcolor: '#25b79b' }}
            >
              استعلام قیمت
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
