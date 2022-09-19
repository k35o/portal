import { ChangeEventHandler, useCallback, useState } from 'react';

export const useCounter = () => {
  const [value, setValue] = useState('');
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    handleChange,
  };
};
