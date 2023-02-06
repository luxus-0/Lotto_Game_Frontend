import styled from 'styled-components';

export const Header = styled.div`
  h2 {
    font-size: 2rem;
  }
  div {
    font-size: 1.1rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 50px;
  height: 30px;
  margin: 10px;
  font-size: 1.2rem;
  text-align: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  font-size: 20px;
`;
