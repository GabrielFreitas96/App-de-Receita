export const setDoneRecipesLocalStorage = (doneObject) => {
  const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipesStorage) {
    localStorage
      .setItem('doneRecipes', JSON
        .stringify([doneObject]));
  }
  if (doneRecipesStorage) {
    localStorage
      .setItem('doneRecipes', JSON
        .stringify([...doneRecipesStorage, doneObject]));
  }
};

export const getDoneRecipesLocalStorage = () => {
  const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipesStorage) {
    return [];
  }
  return doneRecipesStorage;
};
