import React, { ReactNode } from 'react';

import { Wrapper } from './PageWrapper.styles';

interface Props {
  children: ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
