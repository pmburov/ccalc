import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(1.20);
  const [alterPercent, setAlterPercent] = useState(10);

  const calcDaily = () => {
    return (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * activity;
  }

  const calcGain = () => {
    const d = calcDaily();
    const p = (d*alterPercent/100).toFixed(2);
    return (Number(d) + Number(p)).toFixed(2);
  }

  const calcLoss = () => {
    const d = calcDaily();
    const p = (d*alterPercent/100).toFixed(2);
    return (Number(d) - Number(p)).toFixed(2);
  }

  return (
    <Grid className="App">
      <Column>
        <label htmlFor="weight">Weight</label>
      </Column>
      <Column>
        <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </Column>
      <Column>
        <label htmlFor="height">Height</label>
      </Column>
      <Column>
        <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </Column>
      <Column>
        <label htmlFor="age">Age</label>
      </Column>
      <Column>
        <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </Column>
      <Column>
        Activity
      </Column>
      <Column>
        <select name="" id="" defaultValue={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="1.20">1.20</option>
          <option value="1.38">1.38</option>
          <option value="1.55">1.55</option>
          <option value="1.73">1.73</option>
        </select>
      </Column>
      <Column>
        Total
      </Column>
      <Column>
        {calcDaily().toFixed(2)}
      </Column>
      <Column>
        Alter Percent
      </Column>
      <Column>
        <Input type="number" value={alterPercent} onChange={(e) => setAlterPercent(e.target.value)} />
      </Column>
      <Column>
        Gain {calcGain()}
      </Column>
      <Column>
        Loss {calcLoss()}
      </Column>
      <Column>
        <p>Formula:</p>
        <p>(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * activity</p>
      </Column>
    </Grid>
  );
}

const Input = styled.input``;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Column = styled.div`
  grid-column: span 1;
`;

export default App;
