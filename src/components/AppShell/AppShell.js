import React from 'react';
import styled from 'styled-components/macro';

import Tabs from '../Tabs/Tabs';

const Comp = (props) => {
  const { children } = props;

  return (
    <FH>
      <Main>
        {children}
      </Main>
      <Nav>
        <Tabs />
      </Nav>
    </FH>
  );
}

const FH = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  padding: 24px;
  flex: 1 0 auto;
`;

const Nav = styled.nav``;

export default Comp;

