import React, { useState } from 'react';

import { Button, FormContainer, Header, Input } from './PlayPage.styles';

export const PlayPage = () => {
  const [inputs, setInputs] = useState(Array(6).fill(''));

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = event.target.value;
    setInputs(updatedInputs);
  };

  const fillRandom = () => {
    const randomInputs = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    setInputs(randomInputs.map(String));
  };

  return (
    <>
      <Header>
        <h2>Play the Lottery</h2>
        <div>Enter your lucky numbers or just fill the fields randomly</div>
      </Header>
      <FormContainer>
        <div>
          {inputs.map((input, index) => (
            <Input
              key={index}
              type="number"
              value={input}
              onChange={(event) => handleInputChange(event, index)}
            />
          ))}
        </div>
        <div>
          <Button type="button" onClick={fillRandom}>
            Random
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </FormContainer>
    </>
  );
};
