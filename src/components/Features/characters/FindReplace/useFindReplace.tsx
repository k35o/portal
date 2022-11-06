import { charactersText } from '@/globalStates/characters';
import { ChangeEventHandler, useMemo, useState } from 'react';

export const useFindReplace = () => {
  const [value, setValue] = charactersText.useTextState();
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  const handleChangeSearchText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
  };

  const handleChangeReplaceText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setReplaceText(e.target.value);
  };

  const searchedSplitText = useMemo(() => {
    if (!value.length || !searchText.length) {
      return [value];
    }
    return value.split(searchText);
  }, [value, searchText]);

  return {
    value,
    searchText,
    replaceText,
    searchedSplitText,
    handleChange,
    handleChangeSearchText,
    handleChangeReplaceText,
  };
};
