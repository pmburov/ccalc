import React from 'react';
// import styled from 'styled-components';
import { HashRouter, Route } from "react-router-dom";

import AppShell from './components/AppShell/AppShell';
import Calc from './components/Calc/Calc';
import Info from './components/Info/Info';

const App = () => {
  return (
    <HashRouter>
    <AppShell>
      <React.Fragment>
        <Route path="/" exact component={Calc} />
        <Route path="/info" component={Info} />
      </React.Fragment>
    </AppShell>
    </HashRouter>
  );
}

export default App;
