import {useEffect, useState} from '@hooks';

const useDebounce = <T, D>(value: T, delay: number, value2?: D) => {
  const [debounceValue, setDebounceValue] = useState<T>();
  const [debounceValue2, setDebounceValue2] = useState<D>();

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
      setDebounceValue2(value2);
    }, delay);
    return () => clearTimeout(debounceHandler);
  }, [value, value2]);
  return Object.assign({}, {debounceValue}, {debounceValue2});
};

export default useDebounce;
