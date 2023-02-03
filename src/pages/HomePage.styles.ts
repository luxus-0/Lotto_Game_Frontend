import styled from 'styled-components';

export const HeroBanner = styled.div`
  padding: 1.5rem 1rem;

  h1 {
    font-size: 2rem;
    margin: 0;
    max-width: 17ch;
    color: gray;
  }
  span {
    color: white;
  }
`;

export const ButtonsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RulesSection = styled.section`
  margin-top: 4em;
  ul {
    list-style-type: disc;
    margin: 0;
    padding: 0 0 0 1.5em;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export const RewardsSection = styled.section`
  margin-top: 4em;
`;

export const CardContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 1em;
  }
`;
