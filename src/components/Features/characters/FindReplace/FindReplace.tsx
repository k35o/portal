import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  SimpleGrid,
  Spacer,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { useFindReplace } from './useFindReplace';

export const FindReplace = (): JSX.Element => {
  const {
    value,
    searchText,
    replaceText,
    searchedSplitText,
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
        <Flex>
          <FormLabel>検索する文字</FormLabel>
          <Spacer />
          <Checkbox>正規表現で検索する</Checkbox>
        </Flex>
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
          <Flex>
            <Text>検索結果</Text>
            <Spacer />
            <Text>{searchedSplitText.length - 1}件</Text>
          </Flex>
          <Text
            border="1px solid"
            borderColor="inherit"
            borderRadius="md"
            minH="256px"
          >
            {searchedSplitText.map((searchedText, idx) => (
              <Fragment key={`${searchedText}_${idx}`}>
                {searchedText}
                {idx !== searchedSplitText.length - 1 && (
                  <Highlight query={searchText} styles={{ bg: 'orange.100' }}>
                    {searchText}
                  </Highlight>
                )}
              </Fragment>
            ))}
          </Text>
        </Box>
        <Box>
          <Text>置換後の文字列</Text>
          <Text
            border="1px solid"
            borderColor="inherit"
            borderRadius="md"
            minH="256px"
          >
            {searchedSplitText.map((searchedText, idx) => (
              <Fragment key={`${searchedText}_${idx}`}>
                {searchedText}
                {idx !== searchedSplitText.length - 1 && (
                  <Highlight query={replaceText} styles={{ bg: 'orange.100' }}>
                    {replaceText}
                  </Highlight>
                )}
              </Fragment>
            ))}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
