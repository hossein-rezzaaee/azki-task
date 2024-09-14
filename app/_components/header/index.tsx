'use client';
import React from 'react';
import { Box, MenuItem, Popover, Typography } from '@mui/material';
import Image from 'next/image';
import { useAuth } from '_hooks/useAuth';
import Link from 'next/link';

export default function Header() {
  const { user, isAuth, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'logout-popover' : undefined;
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Link href={'/'}>
        <Image src={'/icons/logo.svg'} alt="icon" height={20} width={20} />
      </Link>
      <Typography sx={{ display: { xs: 'none', lg: 'block' } }}>
        سامانه خرید بیمه
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem
          sx={{ p: 2 }}
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          خروج
        </MenuItem>
      </Popover>
      {isAuth ? (
        <Box
          onClick={handleClick}
          display={'flex'}
          alignItems={'center'}
          gap={1}
        >
          <Image src={'/icons/user.svg'} alt="icon" height={20} width={20} />
          <Typography>{`${user.first_name} ${user.last_name}`}</Typography>
        </Box>
      ) : (
        <Typography>ثبت نام</Typography>
      )}
    </Box>
  );
}
