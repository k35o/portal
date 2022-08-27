import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../Header';

export const Layout = ({
  children,
}: React.PropsWithChildren<{}>): JSX.Element => (
  <Grid templateRows="auto 1fr" templateColumns="100%" minH="100vh">
    <Header />
    <Box as="main">{children}</Box>
  </Grid>
);
