import { charactersText } from '@/globalStates/characters';
import { ChangeEventHandler, useMemo, useState } from 'react';

export const useFindReplace = () => {
  const [value, setValue] = charactersText.useTextState();
  const [isRegExp, setIsRegExp] = useState(false);
  const [isInvalidRegExp, setIsInvalidRegExp] = useState(false);
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

  const searchedResultAndSplitText: {
    replacedText: string[];
    splitText: string[];
  } = useMemo(() => {
    setIsInvalidRegExp(false);
    if (!value.length || !searchText.length) {
      return {
        replacedText: [],
        splitText: [value],
      };
    }
    if (isRegExp) {
      try {
        const regexp = RegExp(searchText, 'g');
        return {
          replacedText: value.match(regexp) ?? [],
          splitText: value.split(regexp),
        };
      } catch {
        setIsInvalidRegExp(true);
        return {
          replacedText: [],
          splitText: [value],
        };
      }
    }
    const splitText = value.split(searchText);
    return {
      replacedText: new Array(splitText.length).fill(searchText),
      splitText,
    };
  }, [value, searchText, isRegExp]);

  return {
    value,
    isRegExp,
    isInvalidRegExp,
    searchText,
    replaceText,
    searchedResultAndSplitText,
    handleChangeRegExp,
    handleChange,
    handleChangeSearchText,
    handleChangeReplaceText,
  };
};
