const getIngredients = (ingredients, filter: string) => {
  return Object.entries(ingredients).filter(
    (item) => item[0].includes(filter) && item[1] !== null
  );
};

const getMeasurements = (measurements, filter: string) => {
  return Object.entries(measurements).filter((item) => item[0].includes(filter));
};

export { getIngredients, getMeasurements }