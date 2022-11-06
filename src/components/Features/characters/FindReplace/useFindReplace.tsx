import { charactersText } from '@/globalStates/characters';
import { ChangeEventHandler, useMemo, useState } from 'react';

export const useFindReplace = () => {
  const [value, setValue] = charactersText.useTextState();
  const [isRegExp, setIsRegExp] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');

  const handleChangeRegExp: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsRegExp(e.target.checked);
  };

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
    isRegExp,
    searchText,
    replaceText,
    searchedSplitText,
    handleChangeRegExp,
    handleChange,
    handleChangeSearchText,
    handleChangeReplaceText,
  };
};
