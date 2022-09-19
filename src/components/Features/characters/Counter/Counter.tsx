import { Textarea } from '@chakra-ui/react';
import { useCounter } from './useCounter';

export const Counter = (): JSX.Element => {
  const { value, handleChange } = useCounter();
  return (
    <Textarea
      value={value}
      onChange={handleChange}
      placeholder="ここに文字を入力してください"
      height="256px"
    />
  );
};
