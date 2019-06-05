export const calcDaily = (weight, height, age, activity) => {
  return (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * activity;
}

export const calcGain = (daily, alterPercent) => {
  const p = (daily * alterPercent / 100).toFixed(0);
  return (Number(daily) + Number(p)).toFixed(0);
}

export const calcLoss = (daily, alterPercent) => {
  const p = (daily * alterPercent / 100).toFixed(0);
  return (Number(daily) - Number(p)).toFixed(0);
}
