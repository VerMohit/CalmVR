import React from 'react';
import { Box, Text } from '@mantine/core';
import { About } from '../components/About/About';
import { CustomPage } from '../components/CusomtPage/CustomPage';
import { Demo } from '../components/Demo/Demo';
import { Facts } from '../components/Facts/Facts';
import { Footer } from '../components/Footer/Footer';
import { Heading } from '../components/Heading/Heading';
import { Review } from '../components/Reviews/Reviews';
import { Use } from '../components/Use/Use';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Heading />
      <CustomPage idLabel={'About'} heading={'About'} children={<About />} />
      <CustomPage idLabel={'Facts'} heading={''} children={<Facts />} />
      <Box style={{ background: '#F8F9FA' }}>
        <CustomPage idLabel={'How_It_Works'} heading={'How It Works'} children={<Use />} />
        <CustomPage idLabel={'Demo'} heading={'Demo'} children={<Demo />} />
      </Box>
      <CustomPage idLabel={'Reviews'} heading={'Reviews'} children={<Review />} />
      <Footer />
    </>
  );
}
