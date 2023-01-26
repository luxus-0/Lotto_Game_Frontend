import styled from 'styled-components';

import { theme } from '../Theme';

export const ContentWrapper = styled.main`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Wrapper = styled.div`
  background: ${theme.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
