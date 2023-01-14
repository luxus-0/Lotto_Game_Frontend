import styled from 'styled-components';

import { theme } from '../Theme';

export const HeroBanner = styled.div`
  background-color: ${theme.secondary};
  padding: 5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;
