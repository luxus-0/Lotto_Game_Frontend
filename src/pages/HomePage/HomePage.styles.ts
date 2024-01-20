import styled from 'styled-components';

export const HomeBanner = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  width: 100%;
  @media (min-width: 1024px) {
    justify-content: center;
    padding: 3rem 0;
  }
  @media (min-width: 1440px) {
    justify-content: center;
    padding: 4rem 0;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    margin: 0;
    max-width: 17ch;
    color: ${({ theme }) => theme.textSecondary};
  }
  span {
    color: ${({ theme }) => theme.textPrimary};
  }
  @media (min-width: 1024px) {
    max-width: 50%;
    align-items: flex-end;
    h1 {
      padding-top: 4rem;
      font-size: 3rem;
    }
  }
  @media (min-width: 1440px) {
    h1 {
      padding-top: 6rem;
      max-width: 21ch;
    }
  }
`;

export const HomeImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  img {
    max-width: 24rem;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    img {
      max-width: 28rem;
    }
  }
`;

export const HomePlayLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  @media (min-width: 1024px) {
    margin-top: 3rem;
  }
`;

export const HomeDescription = styled.section`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  h3 {
    font-size: 2rem;
    margin-top: 4rem;
  }

  div {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;

    h3 {
      font-size: 3rem;
    }
    div {
      max-width: 90%;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`;
