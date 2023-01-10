import styled from 'styled-components';

import { theme } from '../Theme';

export const Header = styled.header`
  background-color: ${theme.primary};
  padding: 1em;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
    padding: 0;
    color: ${theme.secondary};
  }
`;

export const Nav = styled.nav<{ isNavOpen: boolean }>`
  transform: ${(p) => (p.isNavOpen ? 'translateX(0)' : 'translateX(100vw)')};
`;
