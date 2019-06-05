import React from 'react';
import styled from 'styled-components/macro';

import { NavLink } from "react-router-dom";

const Comp = () => {
  return (
    <TabsWrap>
      <Tab exact to="/">Home</Tab>
      <Tab exact to="/info">Info</Tab>
    </TabsWrap>
  );
}

const TabsWrap = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Tab = styled(NavLink)`
  flex: 1 0 auto;
  padding: 16px;
  text-align: center;
  text-decoration: none;
`;

export default Comp;

