const prepareIngredients = (cocktails) => {
  if (!cocktails) return [];

  return Object.entries(cocktails).reduce((acc, item) => {
    if (item[0].match(/strIngredient/)) {
      const ingredient = item[0].match(/strIngredient/);
      const id = ingredient.input.slice(13);
      if (item[1]) {
        acc.push({
          name: item[1],
          value: cocktails[`strMeasure${id}`],
          id,
        });
      }
    }
    return acc;
  }, []);
};

export default prepareIngredients;
