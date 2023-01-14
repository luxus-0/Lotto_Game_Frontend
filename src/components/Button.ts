import styled from 'styled-components';

import { theme } from '../Theme';

export const Button = styled.button`
  min-width: 6em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 1em;
  background-color: ${theme.primary};
  color: ${theme.secondary};
`;
