import { charactersText } from '@/globalStates/characters';
import { ChangeEventHandler } from 'react';

export const useFindReplace = () => {
  const [value, setValue] = charactersText.useTextState();

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return {
    value,
    handleChange,
  };
};
