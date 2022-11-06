import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Highlight,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
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
    isRegExp,
    isInvalidRegExp,
    searchText,
    replaceText,
    searchedResultAndSplitText,
    handleChangeRegExp,
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
      <FormControl pt={5} isInvalid={isRegExp && isInvalidRegExp}>
        <Flex>
          <FormLabel>検索する文字</FormLabel>
          <Spacer />
          <FormControl w="auto">
            <Checkbox isChecked={isRegExp} onChange={handleChangeRegExp}>
              正規表現を使用する
            </Checkbox>
          </FormControl>
        </Flex>
        {isRegExp ? (
          <>
            <InputGroup>
              <InputLeftAddon>/</InputLeftAddon>
              <Input
                type="text"
                value={searchText}
                onChange={handleChangeSearchText}
              />
              <InputRightAddon>/</InputRightAddon>
            </InputGroup>
            {isInvalidRegExp && (
              <FormErrorMessage>不正な正規表現です</FormErrorMessage>
            )}
          </>
        ) : (
          <Input
            type="text"
            value={searchText}
            onChange={handleChangeSearchText}
          />
        )}
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
            <Text>{searchedResultAndSplitText.splitText.length - 1}件</Text>
          </Flex>
          <Text
            border="1px solid"
            borderColor="inherit"
            borderRadius="md"
            minH="256px"
          >
            {searchedResultAndSplitText.splitText.map((searchedText, idx) => (
              <Fragment key={`${searchedText}_${idx}`}>
                {searchedText}
                {idx !== searchedResultAndSplitText.splitText.length - 1 && (
                  <Highlight
                    query={searchedResultAndSplitText.replacedText[idx]}
                    styles={{ bg: 'orange.100' }}
                  >
                    {searchedResultAndSplitText.replacedText[idx]}
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
            {searchedResultAndSplitText.splitText.map((searchedText, idx) => (
              <Fragment key={`${searchedText}_${idx}`}>
                {searchedText}
                {idx !== searchedResultAndSplitText.splitText.length - 1 && (
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
