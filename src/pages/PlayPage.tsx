import React, { useState } from 'react';

import { Button, FormContainer, Header, Input } from './PlayPage.styles';

export const PlayPage = () => {
  const [inputs, setInputs] = useState(Array(6).fill(''));

  return (
    <>
      <Header>
        <h2>Play the Lottery</h2>
        <div>Enter your lucky numbers or just fill the fields randomly</div>
      </Header>
      <FormContainer>
        {inputs.map((input, index) => (
          <Input key={index} type="number" value={input} />
        ))}
        <Button type="button">Random</Button>
        <Button type="submit">Submit</Button>
      </FormContainer>
    </>
  );
};
