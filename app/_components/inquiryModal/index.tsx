import { AppBar, Box, Button, Dialog, Slide, Toolbar } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useInquiry } from '_hooks/useInquiry';
import { TInquiry } from '_providers/contextProvider';
import { forwardRef } from 'react';

const translate: Required<TInquiry> = {
  first_name: 'نام',
  last_name: 'نام خانوادگی',
  phone_number: 'شماره موبایل',
  vehicle_type: 'نوع خودرو',
  vehicle_model: 'مدل خودرو',
  last_insurance: 'آخرین شرکت بیمه گر',
  third_discount_percent: 'درصد تخفیف بیمه شخص ثالث',
  driver_discount_percent: 'درصد تخفیف بیمه حوادث راننده',
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InquiryModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [inquiry] = useInquiry();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar sx={{ bgcolor: '#25b79b' }}>
          جدول اطلاعات بیمه شخص ثالث
        </Toolbar>
      </AppBar>
      <Box p={5}>
        {Object.entries(inquiry).map(([k, v]) => (
          <Box key={k}>
            {translate[k as keyof typeof translate]}:{' '}
            {v.includes('@_@') ? v.split('@_@')[1] : v}
          </Box>
        ))}
      </Box>
      <Box width={1} display={'flex'} justifyContent={{ xs: 'center' }}>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ bgcolor: '#25b79b' }}
        >
          تایید اطلاعات
        </Button>
      </Box>
    </Dialog>
  );
}
