import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { HeroBanner } from './HeroBanner';
import { Navbar } from './Navbar';
import { ContentWrapper, Wrapper } from './PageWrapper.styles';

interface Props {
  children: ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return (
    <Wrapper>
      <Navbar />
      <HeroBanner>
        <h1>Lottery</h1>
        <h1>JavaReady.pl</h1>
      </HeroBanner>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
};
