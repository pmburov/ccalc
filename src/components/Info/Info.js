import React from 'react';
// import styled from 'styled-components/macro';

const Info = () => {
  return (
    <div>
      <h4>Formula</h4>
      <code>(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * activity</code>
      <h4>Activity</h4>
      <p>What to choose?</p>
      <h5>1.20</h5>
      <p>Office life, no gym or other sports</p>
      <h5>1.38</h5>
      <p>1-3 iight workouts per week (e.g. at home)</p>
      <h5>1.55</h5>
      <p>3-5 moderate workouts per week (e.g. group aerobics)</p>
      <h5>1.73</h5>
      <p>5-7 intensive workouts per week</p>
    </div>
  );
}

export default Info;

