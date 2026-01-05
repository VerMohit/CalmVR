import React from 'react';
import { Box } from '@mantine/core';
import { About } from '../components/About/About';
import { CustomPage } from '../components/CusomtPage/CustomPage';
import { Demo } from '../components/Demo/Demo';
import { Facts } from '../components/Facts/Facts';
import { Footer } from '../components/Footer/Footer';
import { Heading } from '../components/Heading/Heading';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { Review } from '../components/Reviews/Reviews';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Heading />
      <CustomPage idLabel="About" heading="About">
        <About />
      </CustomPage>
      <CustomPage idLabel="Facts" heading="">
        <Facts />
      </CustomPage>
      <Box style={{ background: '#F8F9FA' }}>
        <CustomPage idLabel="How_It_Works" heading="How It Works">
          <HowItWorks />
        </CustomPage>
        <CustomPage idLabel="Demo" heading="Demo">
          <Demo />
        </CustomPage>
      </Box>
      <CustomPage idLabel="Reviews" heading="Reviews">
        <Review />
      </CustomPage>
      <Footer />
    </>
  );
}
