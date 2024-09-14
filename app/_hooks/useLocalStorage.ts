import { useState, useEffect } from 'react';

const useLocalStorage = <T>(
  key: string,
  defaultValue?: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  const [value, setValue] = useState<T>(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  const remove = () => {
    setValue(undefined as T);
    localStorage.removeItem(key);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue, remove];
};

export default useLocalStorage;
