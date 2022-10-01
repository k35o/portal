import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
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
      <FormControl>
        <FormLabel>検索する文字</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>置換する文字</FormLabel>
        <Input type="text" />
      </FormControl>
      <SimpleGrid columns={2} spacing={5} pt={5}>
        <Button>検索する</Button>
        <Button>置換する</Button>
      </SimpleGrid>
    </Box>
  );
};
