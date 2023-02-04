import styled from 'styled-components';

import { theme } from '../Theme';

export const Button = styled.button`
  min-width: 6rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${theme.primary};
  color: ${theme.secondary};
`;
