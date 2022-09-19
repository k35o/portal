import { ChangeEventHandler, useState } from 'react';

export const useCounter = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    setCount([...segmenter.segment(newValue)].length);
  };

  return {
    value,
    count,
    handleChange,
  };
};
