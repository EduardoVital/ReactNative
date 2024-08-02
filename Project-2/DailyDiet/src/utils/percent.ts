export const formatPercent = (value: number) => {
  const percentage = value.toFixed(2)
  const result = `${percentage.toString().replace('.',',')}%`;
  return result;
};
