import { useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import useLocalStorage from '_hooks/useLocalStorage';

type TUser = {
  first_name: string;
  last_name: string;
  phone_number: string;
};

const AZKI_LOCALS = { user: 'AZKI_USER' };

export const useAuth = () => {
  const { push } = useRouter();
  const path = usePathname();
  const [user, setUser, logout] = useLocalStorage<TUser>(AZKI_LOCALS.user);

  const isAuth = !!user;

  const login = useCallback(
    (userInfo: TUser) => {
      setUser(userInfo);
    },
    [setUser]
  );

  useEffect(() => {
    if (!isAuth) {
      push('/sign-up');
    } else if (path == '/sign-up' || path == '/') {
      push('/insurance');
    }
  }, [isAuth, path]);

  return {
    isAuth,
    user,
    login,
    logout,
  };
};
