import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import useLocalStorage from 'react-use/lib/useLocalStorage';
import Chart from "chart.js";

import { calcDaily, calcGain, calcLoss } from '../../core/calc';

const Calc = () => {
  const [weight, setWeight] = useLocalStorage('weight', 0);
  const [height, setHeight] = useLocalStorage('height', 0);
  const [age, setAge] = useLocalStorage('age', 0);
  const [activity, setActivity] = useLocalStorage('activity', 1.20);
  const [alterPercent, setAlterPercent] = useLocalStorage('alterPercent', 10);
  const chartRef = useRef(null);

  const daily = calcDaily(weight, height, age, activity);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");

      const carbohydrates = daily*50/100;
      const proteins = daily*20/100;
      const fats = daily*30/100;

      const data = {
        datasets: [{
            // data: [50, 20, 30],
            data: [carbohydrates.toFixed(0), proteins.toFixed(0), fats.toFixed(0)],
            backgroundColor: [
              '#4dc9f6',
              '#f67019',
              '#f53794',
            ],
        }],


        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Carbohydrates',
          'Proteins',
          'Fats'
        ]
      };

      new Chart(myChartRef, {
        type: 'doughnut',
        data: data,
        options: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      });
    }
  }, [weight, height, age, daily]);

  return (
    <Section>
      <Block>
        <Label htmlFor="weight">Weight</Label>
        <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} autoFocus />
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
      {weight && height && age && (
        <Block>
          <canvas id="myChart" ref={chartRef} />
        </Block>
      )}
    </Section>
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
  position: relative;
  margin-bottom: 24px;
`;

const Section = styled.section``;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export default Calc;

