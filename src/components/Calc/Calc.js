import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';

import { calcDaily, calcGain, calcLoss } from '../../core/calc';

const Calc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(1.20);
  const [alterPercent, setAlterPercent] = useState(10);

  const daily = calcDaily(weight, height, age, activity);

  return (
    <Grid>
          <Block>
            <Label htmlFor="weight">Weight</Label>
            <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </Block>
          <Block>
            <Label htmlFor="height">Height</Label>
            <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </Block>
          <Block>
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </Block>
          <Block>
            <Label>Activity</Label>
            <Select name="" id="" defaultValue={activity} onChange={(e) => setActivity(e.target.value)}>
              <option value="1.20">1.20</option>
              <option value="1.38">1.38</option>
              <option value="1.55">1.55</option>
              <option value="1.73">1.73</option>
            </Select>
          </Block>
          <Block>
            <Label>Total</Label>
            {daily.toFixed(0)}
          </Block>
          <Block>
            <Label htmlFor="alter">Alter Percent</Label>
            <Input
              id="alter"
              type="number"
              value={alterPercent}
              onChange={(e) => setAlterPercent(e.target.value)}
              min="0"
              max="30"
            />
          </Block>
          <Block>
            Gain {calcGain(daily, alterPercent)} <br />
            Loss {calcLoss(daily, alterPercent)}
          </Block>
        </Grid>
  );
};

const inputCss = css`
  display: block;
  font-size: 1rem;
  padding: 8px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 4px;
`;

const Input = styled.input`
  ${inputCss};
`;

const Select = styled.select`
  /* appearance: none; */
  ${inputCss};
`;

const Block = styled.div`
  margin-bottom: 24px;
`;

const Grid = styled.section`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
`;

const Column = styled.div`
  grid-column: span 1;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export default Calc;

