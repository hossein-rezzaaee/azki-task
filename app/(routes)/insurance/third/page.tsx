'use client';
import {
  Box,
  CircularProgress,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ButtonSteps from '_components/buttonSteps';
import Select from '_components/select';
import Title from '_components/title';
import { useInquiry } from '_hooks/useInquiry';
import { getVehicleTypes } from '_services';
import { useMemo, useState } from 'react';

export default function ThirdInsurance() {
  const [, setInquiry] = useInquiry();

  const { data, isLoading } = useQuery<
    { id: number; title: string; usages: { id: number; title: string }[] }[]
  >({
    queryFn: async () => await getVehicleTypes(),
    queryKey: ['getVehicleTypes'],
  });

  const [vehicleType, setVehicleType] = useState<string>();
  const [vehicleModel, setVehicleModel] = useState<string>();

  const vehicleModelOptions = useMemo(() => {
    return (
      data?.find((item) => String(item.id) == vehicleType?.split('@_@')[0])
        ?.usages || []
    );
  }, [vehicleType, data]);

  return (
    <Box>
      <Title>بیمه شخص ثالث</Title>
      <Typography mb={2}>نوع و مدل خودروی خود را انتخاب کنید.</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Select
                label="نوع خودرو"
                value={vehicleType}
                onChange={(v) => {
                  setVehicleType(v);
                  setInquiry((p) => ({
                    ...p,
                    vehicle_type: v,
                  }));
                }}
                options={data!.map((item) => ({
                  value: item.id,
                  name: item.title,
                }))}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Select
                label="مدل خودرو"
                disabled={!vehicleType}
                value={vehicleModel}
                onChange={(v) => {
                  setVehicleModel(v);
                  setInquiry((p) => ({
                    ...p,
                    vehicle_model: v,
                  }));
                }}
                options={vehicleModelOptions!.map((item) => ({
                  value: item.id,
                  name: item.title,
                }))}
                fullWidth
              />
            </Grid>
          </Grid>
          <ButtonSteps
            disabledNext={!vehicleModel || !vehicleType}
            nextRoute="/insurance/third/last-insurance"
          />
        </Box>
      )}
    </Box>
  );
}
