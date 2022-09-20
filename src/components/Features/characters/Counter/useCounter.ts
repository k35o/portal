import { charactersText } from '@/globalStates/characters';
import { ChangeEventHandler, useState, useTransition } from 'react';

export const useCounter = () => {
  const [value, setValue] = charactersText.useTextState();
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    startTransition(() => {
      setCount(() => {
        const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
        return [...segmenter.segment(newValue)].length;
      });
    });
  };

  return {
    value,
    count,
    isPending,
    handleChange,
  };
};
