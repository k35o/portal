import { appInfo } from '@/globalStates/app';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { AppCard } from './AppCard';

export const AppCardList = (): JSX.Element => {
  const appInfoList = appInfo.useWithCommingSoonValue();
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  return (
    <Flex
      justifyContent="space-between"
      display={isLargerThan720 ? 'flex' : ''}
    >
      {appInfoList.map((appInfo) => (
        <Box
          key={appInfo.title}
          w={isLargerThan720 ? '48%' : '100%'}
          h="144px"
          m="15px 0"
        >
          <AppCard {...appInfo} />
        </Box>
      ))}
    </Flex>
  );
};
