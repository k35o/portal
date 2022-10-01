import {
  Box,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useFindReplace } from './useFindReplace';

export const FindReplace = (): JSX.Element => {
  const {
    value,
    searchText,
    replaceText,
    searchedText,
    replacedText,
    handleChange,
    handleChangeSearchText,
    handleChangeReplaceText,
  } = useFindReplace();
  return (
    <Box>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder="ここに文字列を入力してください"
        height="256px"
      />
      <FormControl pt={5}>
        <FormLabel>検索する文字</FormLabel>
        <Input
          type="text"
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </FormControl>
      <FormControl pt={3}>
        <FormLabel>置換する文字</FormLabel>
        <Input
          type="text"
          value={replaceText}
          onChange={handleChangeReplaceText}
        />
      </FormControl>
      <SimpleGrid columns={2} spacing={5} pt={5}>
        <Box>
          <Text>検索結果</Text>
          <Text
            border="1px solid"
            borderColor="inherit"
            borderRadius="md"
            height="256px"
          >
            {searchedText}
          </Text>
        </Box>
        <Box>
          <Text>置換後の文字列</Text>
          <Text
            border="1px solid"
            borderColor="inherit"
            borderRadius="md"
            height="256px"
          >
            {replacedText}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
