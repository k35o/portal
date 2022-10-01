import { charactersText } from '@/globalStates/characters';
import { ChangeEventHandler, useState } from 'react';

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

  const search = () => {
    console.log(searchText);
  };

  const replace = () => {
    console.log(replaceText);
  };

  return {
    value,
    searchText,
    replaceText,
    handleChange,
    handleChangeSearchText,
    handleChangeReplaceText,
    search,
    replace,
  };
};
