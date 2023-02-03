import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    max-width: 1024px;
    @media (min-width: 1440px) {
      max-width: 1440px;
    }
  }
`;
