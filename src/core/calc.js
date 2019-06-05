export const calcDaily = (weight = 0, height = 0, age = 0, activity = 1.20) => {
  return (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * activity;
}

export const calcGain = (daily = 655, alterPercent = 10) => {
  const p = (daily * alterPercent / 100).toFixed(0);
  return (Number(daily) + Number(p)).toFixed(0);
}

export const calcLoss = (daily = 655, alterPercent = 10) => {
  const p = (daily * alterPercent / 100).toFixed(0);
  return (Number(daily) - Number(p)).toFixed(0);
}
