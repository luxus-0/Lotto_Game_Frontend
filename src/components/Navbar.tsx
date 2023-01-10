import React, { useState } from 'react';

import { Header, Nav } from './Navbar.styles';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Header>
      <h2>Lottery</h2>
      <button onClick={() => setIsNavOpen(!isNavOpen)}>x</button>
      <Nav isNavOpen={isNavOpen}>
        <button>x</button>
        <a href="/#">Home</a>
        <a href="/#">Play</a>
        <a href="/#">Results</a>
        <a href="/#">Linkedin</a>
      </Nav>
    </Header>
  );
};
