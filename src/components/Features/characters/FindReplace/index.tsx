import { Box, Textarea } from '@chakra-ui/react';
import { useFindReplace } from './useFindReplace';

export const FindReplace = (): JSX.Element => {
  const { value, handleChange } = useFindReplace();
  return (
    <Box>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder="ここに文字を入力してください"
        height="256px"
      />
    </Box>
  );
};
