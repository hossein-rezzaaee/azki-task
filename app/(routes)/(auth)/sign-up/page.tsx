'use client';

import { useAuth } from '_hooks/useAuth';
import { Box, Grid2 as Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Title from '_components/title';
import Button from '_components/button';
import { useInquiry } from '_hooks/useInquiry';

const persian_alpha_codepoints = /[\u0600-\u06FF]/;
const schema = z.object({
  first_name: z
    .string()
    .min(1, 'اسمت رو وارد کن')
    .regex(persian_alpha_codepoints, 'اسمتو فارسی بنویس'),
  last_name: z
    .string()
    .min(1, 'نام خانوادگیت رو وارد کن')
    .regex(persian_alpha_codepoints, 'نام خانوادگیت فارسی بنویس'),
  phone_number: z
    .string()
    .min(1, 'موبایلت رو وارد کن')
    .regex(/^09\d{9}/, 'شمارت اشتباس'),
  password: z
    .string()
    .min(1, 'رمز عبورت رو وارد کن')
    .min(4, 'رمز عبورت کوتاهه')
    .max(8, 'رمز عبورت درازه')
    .regex(/^[a-zA-Z0-9]+$/, 'کاراکتر غیرمجاز')
    .regex(/[A-Z]/, 'حداقل یه حرف بزرگ انگلیسی')
    .regex(/[a-z]/, 'حداقل یه حرف کوچیک انگلیسی')
    .regex(/\d/, 'حداقل یه عدد'),
});

type Schema = z.infer<typeof schema>;

export default function SignUp() {
  const { login } = useAuth();
  const [, setInquiry] = useInquiry();
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (d) => {
    const { first_name, last_name, phone_number } = d;
    setInquiry((p) => ({ ...p, first_name, last_name, phone_number }));
    login({ first_name, last_name, phone_number });
  };

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Title>ثبت نام</Title>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Controller
            name="first_name"
            control={control}
            defaultValue=""
            render={(p) => (
              <TextField
                {...p.field}
                fullWidth
                label="نام"
                error={!!p.fieldState.error}
                helperText={p.fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Controller
            name="last_name"
            control={control}
            defaultValue=""
            render={(p) => (
              <TextField
                {...p.field}
                fullWidth
                label="نام خانوادگی"
                error={!!p.fieldState.error}
                helperText={p.fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Controller
            name="phone_number"
            control={control}
            defaultValue=""
            render={(p) => (
              <TextField
                {...p.field}
                fullWidth
                label="شماره موبایل"
                error={!!p.fieldState.error}
                helperText={p.fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={(p) => (
              <TextField
                {...p.field}
                fullWidth
                label="رمز عبور"
                error={!!p.fieldState.error}
                helperText={p.fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Box
          width={1}
          display={'flex'}
          justifyContent={{ xs: 'center', lg: 'flex-end' }}
        >
          <Button type="submit" variant="contained" sx={{ bgcolor: '#25b79b' }}>
            ثبت نام
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
