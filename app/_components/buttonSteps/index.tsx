import { Box } from '@mui/material';
import Button from '_components/button';
import { useRouter } from 'next/navigation';

export default function ButtonSteps({
  disabledNext,
  nextRoute,
}: {
  disabledNext: boolean;
  nextRoute: string;
}) {
  const { back, push } = useRouter();

  return (
    <Box
      display="flex"
      alignItems={'center'}
      justifyContent={'space-between'}
      my={3}
    >
      <Button
        variant="outlined"
        sx={{ borderColor: '#25b79b', color: '#25b79b' }}
        onClick={back}
      >
        {' < '}بازگشت
      </Button>
      <Button
        variant="outlined"
        sx={{ borderColor: '#25b79b', color: '#25b79b' }}
        disabled={disabledNext}
        onClick={() => {
          push(nextRoute);
        }}
      >
        مرحله بعد{' > '}
      </Button>
    </Box>
  );
}
